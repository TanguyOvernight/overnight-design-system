#!/usr/bin/env python3
"""Collecte LinkedIn via l'API « guest » publique (méthode open source documentée, cf. JobSpy).
Leviers : pagination par pas de 10 (start=0,10,20…) — on ne lisait que la 1re page ;
fiche détaillée jobs-guest/jobs/api/jobPosting/{id} = texte complet + critères structurés
(séniorité, type de contrat) sans charger la page publique (moins de 429).
URLs toujours re-extraites verbatim du HTML (règle ⛔). Usage : python3 linkedin_guest.py [r86400|r172800|r604800]"""
import urllib.request, urllib.parse as up, re, html as H, time, json, sys

ROOT = '/home/user/overnight-design-system'
UA = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/124 Safari/537.36'}
KWS = ["marketing", "communication", "brand", "graphic designer", "content", "social media",
       "art director", "motion designer", "creative", "generative AI", "copywriter", "digital marketing"]
BASE = "https://www.linkedin.com/jobs-guest/jobs/api/seeMoreJobPostings/search?"

def get(u):
    try:
        r = urllib.request.urlopen(urllib.request.Request(u, headers=UA), timeout=25)
        return r.getcode(), r.read().decode('utf-8', 'ignore')
    except Exception as e:
        return str(e)[:40], ''

def cards(raw):
    out = []
    for blk in re.split(r'<li>', raw)[1:]:
        m = re.search(r'href="(https://[^"]*?/jobs/view/[^"?]+)', blk)
        if not m: continue
        url = m.group(1)
        jid = re.search(r'-(\d{9,11})$', url)
        t = re.search(r'base-search-card__title[^>]*>\s*([^<]+?)\s*<', blk)
        c = re.search(r'base-search-card__subtitle[^>]*>\s*(?:<a[^>]*>)?\s*([^<]+?)\s*<', blk)
        l = re.search(r'job-search-card__location[^>]*>\s*([^<]+?)\s*<', blk)
        d = re.search(r'datetime="([0-9-]+)"', blk)
        out.append({'id': jid.group(1) if jid else url, 'url': url,
                    'titre': H.unescape(t.group(1)) if t else '?', 'entreprise': H.unescape(c.group(1)) if c else '?',
                    'lieu': H.unescape(l.group(1)) if l else '?', 'date': d.group(1) if d else ''})
    return out

def detail(jid):
    """Critères structurés + texte complet d'une offre (endpoint guest)."""
    c, raw = get(f"https://www.linkedin.com/jobs-guest/jobs/api/jobPosting/{jid}")
    crit = dict(re.findall(r'description__job-criteria-subheader">\s*([^<]+?)\s*</h3>\s*<span[^>]*>\s*([^<]+?)\s*</span>', raw))
    m = re.search(r'show-more-less-html__markup[^>]*>(.*?)</div>', raw, re.S)
    txt = ' '.join(re.sub(r'<[^>]+>', ' ', H.unescape(m.group(1))).split()) if m else ''
    return {'code': c, 'criteres': crit, 'texte': txt}

def main():
    tpr = sys.argv[1] if len(sys.argv) > 1 else 'r172800'
    seen = set(json.load(open(f'{ROOT}/state/seen.json'))['vus']['linkedin'])
    found = {}
    for kw in KWS:
        for start in (0, 10, 20, 30):
            c, raw = get(BASE + up.urlencode({"keywords": kw, "location": "Lausanne, Vaud, Switzerland",
                                              "distance": "25", "f_TPR": tpr, "start": str(start)}))
            if c == 429:
                print(f"  {kw}: 429 — pause"); time.sleep(20); break
            cs = cards(raw)
            for x in cs:
                if x['id'] not in seen and x['id'] not in found:
                    x['kw'] = kw; found[x['id']] = x
            if len(cs) < 10: break
            time.sleep(3)
        time.sleep(3)
    print(f"{len(found)} offres LinkedIn jamais vues ({tpr})")
    for x in found.values():
        print(f"  {x['date']} | {x['titre'][:58]} | {x['entreprise'][:26]} | {x['lieu'][:24]} | {x['url']}")
    json.dump(list(found.values()), open('/tmp/linkedin_last.json', 'w'), ensure_ascii=False, indent=1)

if __name__ == '__main__':
    main()
