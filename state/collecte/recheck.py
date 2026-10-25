import json,urllib.request,re,html,time,sys
UA={'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/124 Safari/537.36','Accept-Language':'fr-CH,fr;q=0.9'}
o=json.load(open('state/ouvertes.json'))
items=o['offres']
for it in items:
    u=it['lien']
    try:
        r=urllib.request.urlopen(urllib.request.Request(u,headers=UA),timeout=30)
        fin=r.geturl(); b=r.read().decode('utf-8','ignore'); c=r.getcode()
    except Exception as e:
        fin=u;b='';c=getattr(e,'code',str(e)[:30])
    t=re.search(r'<title[^>]*>(.*?)</title>',b,re.S)
    t=html.unescape(t.group(1)).strip()[:90] if t else ''
    idok=any(x in fin for x in re.findall(r'[0-9a-f]{8}-[0-9a-f-]{27}|\d{10}',u)) or 'neho' in u
    closed=bool(re.search(r'no longer accepting|n.est plus disponible|plus accepter|expired',b,re.I))
    print(f"{it['id']:16} {c} idok={idok} closed={closed} | {t}")
    time.sleep(2)
