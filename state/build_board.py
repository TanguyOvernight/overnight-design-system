#!/usr/bin/env python3
"""Génère le job board artifact : injecte state/offres.json dans state/board-template.html.
Usage : python3 state/build_board.py [sortie] (défaut : scratchpad ou ./veille-board.html).
Run quotidien : maj offres.json -> build -> republier l'artifact (même URL)."""
import json, sys, os
root = os.path.dirname(os.path.abspath(__file__))
data = json.load(open(os.path.join(root, 'offres.json'), encoding='utf-8'))
tpl = open(os.path.join(root, 'board-template.html'), encoding='utf-8').read()
payload = json.dumps({'maj': data['maj'], 'offres': data['offres']}, ensure_ascii=False)
out = sys.argv[1] if len(sys.argv) > 1 else os.path.join(root, '..', 'veille-board.html')
html = tpl.replace('/*__DATA__*/', payload, 1)
open(out, 'w', encoding='utf-8').write(html)
print(f"board généré -> {out} ({len(html)//1024} KB, {len(data['offres'])} offres)")
