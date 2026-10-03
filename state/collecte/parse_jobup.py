#!/usr/bin/env python3
"""Collecte jobup quotidienne — SPECTRE ÉLARGI (consigne Tanguy 03.10.2026).
Versionné dans le repo pour survivre aux recyclages de conteneur ; copier dans le
scratchpad au besoin. Dédup contre state/seen.json (UUID)."""
import urllib.request, re, json, html as H, time
seen=json.load(open('/home/user/overnight-design-system/state/seen.json'))
seen_ids=set(seen['vus']['jobup'])
UA={'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}
KW_FULL=["marketing","communication","brand","designer","digital","intelligence%20artificielle","AI",
         "content","social%20media","graphiste","r%C3%A9dacteur","v%C3%A9nement","growth","vid%C3%A9o","web%20design"]
queries=[("Lausanne",k) for k in KW_FULL] \
       +[("Morges",k) for k in ["marketing","communication","designer","digital"]] \
       +[("Vevey",k) for k in ["marketing","communication"]] \
       +[("Nyon",k) for k in ["marketing","communication"]]
out=[]
for loc,kw in queries:
    url=f"https://www.jobup.ch/fr/emplois/?location={loc}&publication-date=2&term={kw}"
    try: raw=urllib.request.urlopen(urllib.request.Request(url,headers=UA),timeout=25).read().decode('utf-8','ignore')
    except Exception as e: print(f"{loc}/{kw}: ERR {e}"); time.sleep(2); continue
    items=[]
    for b in re.findall(r'<script type="application/ld\+json">(.*?)</script>',raw,re.S):
        try: d=json.loads(b)
        except: continue
        for o in (d if isinstance(d,list) else [d]):
            if isinstance(o,dict) and o.get('@type')=='ItemList':
                for el in o.get('itemListElement',[]):
                    it=el.get('item',{}) if isinstance(el,dict) else {}
                    u=it.get('url','') or el.get('url','')
                    n=it.get('name','') or el.get('name','')
                    if '/detail/' in u: items.append((n,u))
    new=0
    for n,u in items:
        m=re.search(r'/detail/([0-9a-f-]{36})/',u)
        if not m or m.group(1) in seen_ids: continue
        seen_ids.add(m.group(1)); new+=1
        out.append((loc,kw,H.unescape(n) if n else '',u))
    print(f"{loc}/{kw}: {new} new / {len(items)} items")
    time.sleep(3)
print("\nTOTAL NOUVEAUX", len(out))
for r in out: print(" | ".join(r))
