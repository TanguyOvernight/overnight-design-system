#!/usr/bin/env python3
"""Indeed via JobSpy (open source, gratuit). BLOQUÉ tant que le proxy de l'environnement
refuse apis.indeed.com / ch-fr.indeed.com (403 CONNECT, vérifié 03.10). Dès que ces domaines
sont autorisés, ce script fonctionne tel quel. Rythme prudent : peu de résultats par requête,
pauses aléatoires entre requêtes, offres ≤ 72 h, rayon 15 km (préférence Lausanne ≤ 5 km)."""
import random, time
from jobspy import scrape_jobs
TERMS = ["marketing", "communication", "graphiste", "designer", "content manager", "social media", "brand manager"]
rows = []
for t in TERMS:
    try:
        df = scrape_jobs(site_name=["indeed"], search_term=t, location="Lausanne, VD", country_indeed="Switzerland",
                         distance=15, results_wanted=25, hours_old=72, verbose=0)
        rows.append(df); print(f"  {t:16s} → {len(df)}")
    except Exception as e:
        msg = str(e)
        print(f"  {t:16s} → {'REFUS PROXY (allowlist)' if '403' in msg else msg[:80]}")
        if '403' in msg: break
    time.sleep(6 + random.random() * 8)
if rows:
    import pandas as pd
    df = pd.concat(rows).drop_duplicates(subset=['job_url'])
    df.to_json('/tmp/indeed_last.json', orient='records', force_ascii=False)
    print(len(df), "offres Indeed")
