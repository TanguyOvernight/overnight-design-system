#!/usr/bin/env python3
"""Collecte Job-Room (SECO) — API publique de recherche, canton de Vaud (ajout 26.10).
POST jobAdvertisements/_search ; URL = externalUrl renvoyée par l'API (verbatim, règle ⛔).
Usage : python3 state/collecte/jobroom.py [jours=3]"""
import json, sys, time, urllib.request
ROOT = '/home/user/overnight-design-system'
KWS = ["marketing", "communication", "design", "graphiste", "community manager", "digital",
       "contenu", "brand", "social media", "créatif", "intelligence artificielle"]
API = "https://www.job-room.ch/jobadservice/api/jobAdvertisements/_search?page={p}&size=50&sort=date_desc"
H = {'Content-Type': 'application/json', 'Accept': 'application/json', 'User-Agent': 'Mozilla/5.0'}

def search(kw, days, page=0):
    body = {"workloadPercentageMin": 0, "workloadPercentageMax": 100, "permanent": None,
            "companyName": None, "onlineSince": days, "displayRestricted": False,
            "keywords": [kw], "communalCodes": [], "cantonCodes": ["VD"], "professionCodes": []}
    req = urllib.request.Request(API.format(p=page), data=json.dumps(body).encode(), headers=H, method='POST')
    return json.loads(urllib.request.urlopen(req, timeout=30).read())

def main():
    days = int(sys.argv[1]) if len(sys.argv) > 1 else 3
    seen = set(json.load(open(f'{ROOT}/state/seen.json'))['vus'].get('jobroom', []))
    out = {}
    for kw in KWS:
        try:
            res = search(kw, days)
        except Exception as e:
            print(f"  {kw}: ERR {str(e)[:50]}"); continue
        items = res if isinstance(res, list) else res.get('content', res.get('result', []))
        for it in items:
            ad = it.get('jobAdvertisement', it)
            jid = ad.get('id')
            if not jid or jid in seen or jid in out: continue
            c = ad.get('jobContent', {})
            d = (c.get('jobDescriptions') or [{}])[0]
            loc = (c.get('location') or {}).get('city', '?')
            emp = c.get('employment') or {}
            out[jid] = {'id': jid, 'titre': d.get('title', '?'), 'entreprise': (c.get('company') or {}).get('name', '?'),
                        'lieu': loc, 'taux': f"{emp.get('workloadPercentageMin')}-{emp.get('workloadPercentageMax')}",
                        'date': (ad.get('publication') or {}).get('startDate', ''), 'url': c.get('externalUrl') or '',
                        'kw': kw, 'desc': (d.get('description') or '')[:3000]}
        time.sleep(2)
    print(f"{len(out)} annonces Job-Room jamais vues (≤ {days} j, VD)")
    for x in out.values():
        print(f"  {x['date'][:10]} | {x['titre'][:60]} | {x['entreprise'][:28]} | {x['lieu'][:18]} | {x['taux']} | {x['url'][:110]}")
    json.dump(list(out.values()), open('/tmp/jobroom_last.json', 'w'), ensure_ascii=False, indent=1)

if __name__ == '__main__':
    main()
