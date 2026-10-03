#!/usr/bin/env python3
"""Collecte via l'API JSON publique de jobs.ch (même base que jobup, contourne l'anti-bot HTML).
Chaque document fournit : lien officiel verbatim (_links.detail_fr), langues exigées,
expérience, taux, coordonnées GPS (→ distance réelle depuis Lausanne), drapeau is_active.
Limites connues : rows ≤ 20 (sinon 422) ; recherche plein texte → filtrer sur le TITRE.
Usage : python3 state/collecte/jobsch_api.py [jours_max=3]"""
import urllib.request, urllib.parse as up, urllib.error, json, re, time, math, sys
from datetime import date, timedelta

ROOT = '/home/user/overnight-design-system'
UA = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/124 Safari/537.36'}
QUERIES = ["marketing", "communication", "designer", "graphiste", "content", "contenu", "social media",
           "brand", "marque", "digital", "direction artistique", "rédacteur", "copywriter", "vidéo",
           "motion", "UX UI", "webmaster", "créatif", "intelligence artificielle", "automatisation"]
TITRE = re.compile(r'market|communic|brand|marque|design|graph|content|contenu|social media|r[ée]seaux sociaux|digital|vid[ée]o|motion|'
                   r'cr[ée]a|r[ée]dact|copy|m[ée]dia|\bux\b|\bui\b|webmaster|campagne|growth|automati|\bia\b|\bai\b|'
                   r'art director|direction artistique|community|e-?commerce', re.I)
EXCLU = re.compile(r'stagiaire|stage\b|intern|apprenti|cfc|master thesis|trainee|ing[ée]nieur|engineer|d[ée]veloppeur|developer|[ée]ducat|soins|infirmi', re.I)
LSNE = (46.5197, 6.6323)

def km(a, b):
    la1, lo1, la2, lo2 = map(math.radians, (a[0], a[1], b[0], b[1]))
    h = math.sin((la2 - la1) / 2) ** 2 + math.cos(la1) * math.cos(la2) * math.sin((lo2 - lo1) / 2) ** 2
    return 6371 * 2 * math.asin(math.sqrt(h))

def get(params):
    u = "https://www.jobs.ch/api/v1/public/search?" + up.urlencode(params)
    try:
        return json.loads(urllib.request.urlopen(urllib.request.Request(u, headers=UA), timeout=25).read())
    except urllib.error.HTTPError as e:
        return {'err': e.code}
    except Exception as e:
        return {'err': str(e)[:60]}

def main():
    jours = int(sys.argv[1]) if len(sys.argv) > 1 else 3
    depuis = (date.today() - timedelta(days=jours)).isoformat()
    seen = set(json.load(open(f'{ROOT}/state/seen.json'))['vus']['jobup'])
    found = {}
    for q in QUERIES:
        for page in (1, 2, 3):
            d = get({"query": q, "location": "Lausanne", "rows": 20, "page": page, "sort": "date"})
            if 'err' in d:
                print(f"  {q}: ERR {d['err']}"); break
            for j in d.get('documents', []):
                jid = j.get('job_id', '')
                if not jid or jid in seen or jid in found: continue
                if (j.get('publication_date') or '')[:10] < depuis: continue
                if not j.get('is_active', True): continue
                t = j.get('title', '')
                if not TITRE.search(t) or EXCLU.search(t): continue
                c = (j.get('coordinates') or [{}])
                c = c[0] if isinstance(c, list) and c else c
                dist = None
                if isinstance(c, dict) and c.get('lat') and c.get('lon'):
                    dist = round(km(LSNE, (float(c['lat']), float(c['lon']))), 1)
                    if dist > 80 and re.search(r'lausanne|pully|prilly|renens|crissier|ecublens|morges|paudex|lutry|epalinges', j.get('place', ''), re.I):
                        dist = None  # coordonnées du siège, pas du lieu de travail
                found[jid] = {
                    'date': j.get('publication_date', '')[:10], 'titre': t, 'entreprise': j.get('company_name', ''),
                    'lieu': j.get('place', ''), 'km': dist, 'taux': j.get('employment_grades'),
                    'langues': j.get('language_skills'), 'experience': j.get('work_experience'),
                    'lien': ((j.get('_links') or {}).get('detail_fr') or {}).get('href', ''), 'requete': q}
            if page >= (d.get('num_pages') or 1): break
            time.sleep(1.2)
        time.sleep(1.2)
    rows = sorted(found.values(), key=lambda r: ((r['km'] if r['km'] is not None else 99), r['date']))
    print(f"\n{len(rows)} offres métier nouvelles (≤{jours} j) — triées par distance de Lausanne")
    for r in rows:
        kmtxt = f"{r['km']:>5.1f} km" if r['km'] is not None else "   ? km"
        print(f"  {kmtxt} | {r['date']} | {r['titre'][:60]} | {r['entreprise'][:28]} | {r['lieu'][:18]} | {r['lien']}")
    json.dump(rows, open('/tmp/jobsch_api_last.json', 'w'), ensure_ascii=False, indent=1)

if __name__ == '__main__':
    main()
