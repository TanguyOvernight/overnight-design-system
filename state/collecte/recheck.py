import json,urllib.request,re,html,time,sys
UA={'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/124 Safari/537.36','Accept-Language':'fr-CH,fr;q=0.9'}
sys.path.insert(0,'state/collecte')
import linkedin_guest as G
o=json.load(open('state/ouvertes.json'))
items=o['offres']
for it in items:
    u=it['lien']
    li=re.search(r'linkedin\.com/jobs/view/.*?(\d{10})',u)
    if li:  # 20.11 : pages publiques LinkedIn en 404 anti-bot -> API guest
        for k in range(3):
            d=G.detail(li.group(1))
            if d.get('code')!=429: break
            time.sleep(20)
        print(f"{it['id']:16} {d.get('code')} idok=True closed={not bool(d.get('texte')) and d.get('code')==200} | api-guest {'texte' if d.get('texte') else ''}")
        time.sleep(4); continue
    try:
        r=urllib.request.urlopen(urllib.request.Request(u,headers=UA),timeout=30)
        fin=r.geturl(); b=r.read().decode('utf-8','ignore'); c=r.getcode()
    except Exception as e:
        fin=u;b='';c=getattr(e,'code',str(e)[:30])
    t=re.search(r'<title[^>]*>(.*?)</title>',b,re.S)
    t=html.unescape(t.group(1)).strip()[:90] if t else ''
    idok=any(x in fin for x in re.findall(r'[0-9a-f]{8}-[0-9a-f-]{27}|\d{10}',u)) or 'neho' in u
    m=re.search(r'(jobup|jobs|jobscout24)\.ch/.*?([0-9a-f]{8}-[0-9a-f-]{27})',u)
    if m:  # JobCloud: page HTML contient des chaines i18n 'expired' -> se fier a l'API (is_active)
        try:
            a=json.load(urllib.request.urlopen(urllib.request.Request(f'https://www.{"jobup" if m.group(1)=="jobscout24" else m.group(1)}.ch/api/v1/public/search/job/{m.group(2)}',headers=UA),timeout=30))
            closed=not a.get('is_active',True)
        except Exception as e:
            closed=getattr(e,'code',None) in (404,410)
    else:
        closed=bool(re.search(r'no longer accepting|n.est plus disponible|plus accepter|expired',b,re.I))
    print(f"{it['id']:16} {c} idok={idok} closed={closed} | {t}")
    time.sleep(2)
