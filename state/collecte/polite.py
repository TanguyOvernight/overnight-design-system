"""Rythme de requêtes « humain » pour les sources joignables : pauses aléatoires,
recul exponentiel sur 429/403, plafond de requêtes par domaine et par run.
N'est PAS un moyen de contourner le proxy de l'environnement (un 403 CONNECT du proxy
reste un refus : seul l'ajout du domaine à l'allowlist le lève)."""
import random, time, urllib.request, urllib.error
UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36'
HDR = {'User-Agent': UA, 'Accept-Language': 'fr-CH,fr;q=0.9,en;q=0.8', 'Accept': 'text/html,application/json;q=0.9,*/*;q=0.8'}
_count = {}

def pause(base=2.5, spread=3.0):
    time.sleep(base + random.random() * spread)

def get(url, domain_cap=40, retries=3, data=None, headers=None):
    dom = url.split('/')[2]
    _count[dom] = _count.get(dom, 0) + 1
    if _count[dom] > domain_cap:
        return None, 'cap'
    delay = 8
    for _ in range(retries):
        try:
            req = urllib.request.Request(url, headers={**HDR, **(headers or {})}, data=data)
            r = urllib.request.urlopen(req, timeout=25)
            return r.read().decode('utf-8', 'ignore'), r.getcode()
        except urllib.error.HTTPError as e:
            if e.code in (429, 403, 503):
                time.sleep(delay + random.random() * 4); delay *= 2; continue
            return None, e.code
        except Exception as e:
            if 'Tunnel connection failed: 403' in str(e):
                return None, 'proxy-refus'   # allowlist, inutile d'insister
            time.sleep(delay); delay *= 2
    return None, 'abandon'
