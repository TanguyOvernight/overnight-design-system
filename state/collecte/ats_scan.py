#!/usr/bin/env python3
"""Scanne les boards ATS publics du registre (Ashby, Greenhouse, Lever, SmartRecruiters) :
postes marketing/créa/comm, avec lien officiel verbatim. Gratuit, sans clé."""
import urllib.request, json, re, os
UA = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/124 Safari/537.36'}
REG = json.load(open(os.path.join(os.path.dirname(__file__), 'ats_registry.json')))
K = re.compile(r'market|communic|brand|design(?!.*engineer)|content|social|creative|cr[ée]a|copy|video|motion design|community|growth|\bpress\b|\bpr\b|storytell|editor|media|\bux\b|art dir', re.I)
ZONE = re.compile(r'lausanne|vaud|morges|renens|ecublens|epfl|switzerland|suisse|remote', re.I)
def j(u):
    try: return json.loads(urllib.request.urlopen(urllib.request.Request(u, headers=UA), timeout=20).read())
    except Exception: return None
out = []
for s in REG.get('ashby', []):
    for p in (j(f"https://api.ashbyhq.com/posting-api/job-board/{s}") or {}).get('jobs', []):
        out.append((s, p.get('title', ''), p.get('location') or '', p.get('publishedAt', '')[:10], p.get('jobUrl', '')))
for s in REG.get('greenhouse', []):
    for p in (j(f"https://boards-api.greenhouse.io/v1/boards/{s}/jobs") or {}).get('jobs', []):
        out.append((s, p.get('title', ''), (p.get('location') or {}).get('name', ''), p.get('updated_at', '')[:10], p.get('absolute_url', '')))
for s in REG.get('lever', []):
    for p in (j(f"https://api.lever.co/v0/postings/{s}?mode=json") or []):
        out.append((s, p.get('text', ''), (p.get('categories') or {}).get('location', ''), '', p.get('hostedUrl', '')))
for s in REG.get('smartrecruiters', []):
    for p in (j(f"https://api.smartrecruiters.com/v1/companies/{s}/postings?limit=100") or {}).get('content', []):
        out.append((s, p.get('name', ''), (p.get('location') or {}).get('city', ''), p.get('releasedDate', '')[:10], f"https://jobs.smartrecruiters.com/{s}/{p.get('id')}"))
hits = [o for o in out if K.search(o[1]) and ZONE.search(o[2])]
print(f"{len(out)} postes scannés · {len(hits)} métier dans la zone")
for h in hits: print(f"  {h[0]:14s} | {h[1][:55]:55s} | {h[2][:24]:24s} | {h[3]} | {h[4]}")
