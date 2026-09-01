#!/usr/bin/env python3
"""Extract the archived Overnight reference images and verify their checksums.

Run from any working directory. Existing files with different contents are never overwritten.
No third-party package is required.
"""
from pathlib import Path
import hashlib
import json
import zipfile

ROOT = Path(__file__).resolve().parent


def digest(path):
    h = hashlib.sha256()
    with path.open('rb') as stream:
        for chunk in iter(lambda: stream.read(1024 * 1024), b''):
            h.update(chunk)
    return h.hexdigest()


def extract():
    manifest = json.loads((ROOT / 'manifest.json').read_text(encoding='utf-8'))
    prepared = 0
    already_present = 0
    for archive in manifest['archives']:
        archive_path = ROOT / archive['path']
        if not archive_path.is_file():
            raise FileNotFoundError(f'Archive manquante : {archive_path}')
        if archive_path.stat().st_size != archive['bytes'] or digest(archive_path) != archive['sha256']:
            raise ValueError(f'Archive différente de la référence : {archive_path}')
        members = [im for im in manifest['images'] if im.get('storage_archive') == archive['path']]
        with zipfile.ZipFile(archive_path) as zf:
            for im in members:
                target = (ROOT / im['path']).resolve()
                if not target.is_relative_to(ROOT):
                    raise ValueError(f'Chemin hors collection : {im["path"]}')
                info = zf.getinfo(im['original_path'])
                if info.is_dir() or info.file_size != im['bytes']:
                    raise ValueError(f'Taille inattendue : {im["original_path"]}')
                if target.exists():
                    if target.is_file() and digest(target) == im['sha256']:
                        already_present += 1
                        continue
                    raise FileExistsError(f'Fichier local différent, conservé : {target}')
                data = zf.read(info)
                if hashlib.sha256(data).hexdigest() != im['sha256']:
                    raise ValueError(f'Image différente de la référence : {im["original_path"]}')
                target.parent.mkdir(parents=True, exist_ok=True)
                with target.open('xb') as output:
                    output.write(data)
                prepared += 1
    print(f'{prepared} images extraites ; {already_present} images déjà présentes et vérifiées.')


if __name__ == '__main__':
    extract()
