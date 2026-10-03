#!/usr/bin/env python3
"""Google Jobs via SerpAPI — budget quotidien (plan gratuit 250/mois ≈ 7/jour, vérifié 03.10).
Google Jobs agrège aussi Indeed (filet, ~1 lien sur 10). Une page par requête suffit
(la pagination tombe à vide sur Lausanne) : on varie les REQUÊTES plutôt que les pages."""
import json, urllib.parse as up, urllib.request, os, sys
ROOT = '/home/user/overnight-design-system'
KEY = open(os.environ.get('SERPAPI_KEYFILE', '/tmp/claude-0/-home-user-overnight-design-system/2a8a09d6-c116-533c-9d1f-ce872786c4b7/scratchpad/serpapi.key')).read().strip()
Q = ["marketing Lausanne", "communication Lausanne", "graphiste OR designer OR directeur artistique Lausanne",
     "content OR social media OR community manager Lausanne", "IA générative OR generative AI OR Claude marketing Lausanne",
     "chargé de communication Vaud", "brand manager OR chef de produit marketing Lausanne"]
def run(budget=7):
    a = json.loads(urllib.request.urlopen(f"https://serpapi.com/account.json?api_key={KEY}", timeout=30).read())
    left = a.get('total_searches_left', 0)
    budget = min(budget, max(0, left - 5))
    print(f"SerpAPI : {left} restantes ce mois → {budget} requêtes aujourd'hui")
    out = {}
    for q in Q[:budget]:
        try:
            d = json.loads(urllib.request.urlopen("https://serpapi.com/search.json?" + up.urlencode(
                {"engine": "google_jobs", "q": q, "gl": "ch", "hl": "fr", "chips": "date_posted:3days", "api_key": KEY}), timeout=45).read())
        except Exception as e:
            print(" ", q, "ERR", str(e)[:60]); continue
        for j in d.get('jobs_results', []):
            k = (j.get('title', '').lower(), j.get('company_name', '').lower())
            if k in out: continue
            links = [o.get('link', '') for o in j.get('apply_options', [])]
            out[k] = {'titre': j.get('title'), 'entreprise': j.get('company_name'), 'lieu': j.get('location'),
                      'liens': links, 'indeed': [l for l in links if 'indeed' in l], 'desc': j.get('description', '')[:1500], 'q': q}
        print(f"  {q[:50]:50s} → {len(d.get('jobs_results', []))}")
    json.dump(list(out.values()), open('/tmp/serpapi_last.json', 'w'), ensure_ascii=False, indent=1)
    print(f"{len(out)} offres distinctes · {sum(1 for v in out.values() if v['indeed'])} via Indeed")
if __name__ == '__main__':
    run(int(sys.argv[1]) if len(sys.argv) > 1 else 7)
