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

def est_titre(txt: str) -> bool:
    """Un titre de section est COURT et majoritairement en capitales.

    Ce test existe parce que la premiere version du script prenait toute
    phrase en italique occupant une ligne entiere pour un titre, et la
    passait en gras. Resultat : une hierarchie typographique aplatie, ou
    plus rien ne ressort. La longueur seule ne suffit pas ; les capitales
    seules non plus (une ligne de tableau peut l'etre). Les deux ensemble,
    si.
    """
    # Un titre peut porter un sous-titre en minuscules apres un tiret :
    # "LES MARCHES — le decrochage repart". Seul le segment de TETE est
    # jugé ; sans cette exception le titre repartait en italique.
    tete = re.split(r'\s[—–-]\s', txt, maxsplit=1)[0]
    # Pas de plafond de LONGUEUR : il a rejete deux titres legitimes le
    # 16/09 ("CE QUI A FAIT BAISSER LES MARCHES HIER..."). Le test des
    # capitales suffit — une phrase en italique dans du texte courant
    # n'est jamais a 80 % de majuscules, quelle que soit sa longueur.
    # Deux criteres dont un seul discrimine, c'est un critere de trop :
    # celui qui ne discrimine pas ne fait que produire des faux negatifs.
    lettres = [c for c in tete if c.isalpha()]
    if not lettres:
        return False
    return sum(c.isupper() for c in lettres) / len(lettres) >= 0.8


def italiques(txt: str) -> str:
    """*emphase* -> _italique_, en laissant les **gras** intacts."""
    return re.sub(r'(?<!\*)\*([^*\n]+)\*(?!\*)', r'_\1_', txt)


def convertir(texte: str) -> str:
    sorties = []
    for ligne in texte.split("\n"):
        # Titre de section : *TEXTE COURT EN CAPITALES* seul sur la ligne
        m = re.match(r'^(\S*\s*)\*([^*]+)\*\s*$', ligne)
        if m and ligne.count('*') == 2 and est_titre(m.group(2)):
            sorties.append(f"{m.group(1)}**{m.group(2)}**")
            continue
        # Titre de section suivi d'un tiret : 📅 *LA SEMAINE* — ...
        # La QUEUE doit elle aussi etre convertie : la premiere version la
        # recopiait verbatim, ce qui laissait des *emphases* mrkdwn en clair
        # apres le tiret.
        m = re.match(r'^(\S*\s*)\*([A-ZÀ-Ý0-9 ,\'’-]+)\*(\s*[—–-].*)$', ligne)
        if m:
            sorties.append(f"{m.group(1)}**{m.group(2)}**{italiques(m.group(3))}")
            continue
        sorties.append(italiques(ligne))
    # La PREMIERE ligne non vide est toujours le titre de la newsletter :
    # elle est longue et en minuscules, donc est_titre() la refuse a juste
    # titre pour une ligne de corps. On la traite par sa POSITION.
    for i, ligne in enumerate(sorties):
        if ligne.strip():
            sorties[i] = re.sub(r'^_(.+)_$', r'**\1**', ligne)
            break
    return "\n".join(sorties)

if __name__ == "__main__":
    if len(sys.argv) != 2:
        sys.exit("usage: mrkdwn-vers-markdown.py <fichier.md>")
    with open(sys.argv[1], encoding="utf-8") as f:
        sys.stdout.write(convertir(f.read()))
