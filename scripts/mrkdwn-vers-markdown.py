#!/usr/bin/env python3
"""Convertit une newsletter écrite en mrkdwn Slack (*gras*) vers du markdown
standard (**gras**, _italique_), format attendu par l'échelon ② (outil MCP).

Pourquoi ce script existe : les deux échelons de livraison Slack n'attendent
PAS le même format. Le webhook (échelon ①) veut du mrkdwn ; l'outil MCP veut
du markdown standard. Envoyer le fichier tel quel par le mauvais canal
afficherait les astérisques en clair — une livraison réussie mais illisible.

Règle appliquée :
  - une ligne qui est un TITRE DE SECTION (emoji + *TEXTE* et rien d'autre,
    ou *TEXTE* suivi d'un tiret) -> **gras**
  - toute autre *emphase* en milieu de phrase -> _italique_
  - les **gras** déjà présents sont laissés intacts

Usage : python3 mrkdwn-vers-markdown.py <fichier.md>   (écrit sur stdout)
"""
import re, sys

def convertir(texte: str) -> str:
    sorties = []
    for ligne in texte.split("\n"):
        # Titre de section : *TEXTE* seul sur la ligne (après un emoji éventuel)
        m = re.match(r'^(\S*\s*)\*([^*]+)\*\s*$', ligne)
        if m and ligne.count('*') == 2:
            sorties.append(f"{m.group(1)}**{m.group(2)}**")
            continue
        # Titre de section suivi d'un tiret : 📅 *LA SEMAINE* — ...
        m = re.match(r'^(\S*\s*)\*([A-ZÀ-Ý0-9 ,\'’-]+)\*(\s*[—–-].*)$', ligne)
        if m:
            sorties.append(f"{m.group(1)}**{m.group(2)}**{m.group(3)}")
            continue
        sorties.append(re.sub(r'(?<!\*)\*([^*\n]+)\*(?!\*)', r'_\1_', ligne))
    return "\n".join(sorties)

if __name__ == "__main__":
    if len(sys.argv) != 2:
        sys.exit("usage: mrkdwn-vers-markdown.py <fichier.md>")
    with open(sys.argv[1], encoding="utf-8") as f:
        sys.stdout.write(convertir(f.read()))
