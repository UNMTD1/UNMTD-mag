# UNMTD1 — Unmuted One

Starter repository Astro pour le projet éditorial bilingue décrit dans le cahier des charges.

**Les personnes, citations et contenus de démonstration sont fictifs.** Remplace-les avant toute publication.

## Ce qui est inclus

- Astro + Markdown
- FR / EN
- séries, épisodes et profils
- recherche et filtres
- navigation précédent/suivant
- YouTube et SoundCloud
- design responsive éditorial
- métadonnées SEO / Open Graph
- RSS et robots.txt
- GitHub Actions → GitHub Pages
- aucun backend, aucune base de données, aucun CMS payant

## Installation locale

Pré-requis : Node.js 22+ et npm.

```bash
npm install
npm run dev
```

Puis :

```bash
npm run build
```

## Déploiement GitHub Pages

1. Crée un repository, par exemple `unmtd1`.
2. Copie le contenu de ce dossier dans le repository.
3. Fais un commit et pousse sur `main`.
4. Dans GitHub : **Settings → Pages → Source → GitHub Actions**.
5. Le workflow `.github/workflows/deploy.yml` construit puis publie automatiquement.

Pour un dépôt `unmtd1`, l'adresse sera normalement :

`https://TON-UTILISATEUR.github.io/unmtd1/`

Si le dépôt est `TON-UTILISATEUR.github.io`, le site sera servi à la racine.

## Publier un épisode

Ajoute un fichier :

`src/content/episodes/nom-de-serie/episode-04.md`

avec par exemple :

```yaml
---
title:
  fr: "Titre français"
  en: "English title"
excerpt:
  fr: "Résumé français."
  en: "English excerpt."
date: 2026-10-09
series: "behind-the-sound"
episode: 4
person: "nom-du-profil"
author: "UNMTD1"
type: interview
categories: [Production]
tags: [producer, electronic]
image: "/images/photo.jpg"
video:
  platform: youtube
  id: "VIDEO_ID"
audio:
  platform: soundcloud
  url: "SOUNDCLOUD_EMBED_URL"
featured: true
draft: false
---

Ton article en Markdown.
```

Aucun composant du site n'a besoin d'être modifié.

## Architecture

```text
src/
├── components/
├── content/
│   ├── episodes/
│   ├── people/
│   └── series/
├── layouts/
├── pages/
│   ├── fr/
│   └── en/
├── styles/
└── utils/
.github/workflows/deploy.yml
public/images/
```

## Avant publication réelle

Remplace les contenus fictifs, les images de démonstration, l'identifiant YouTube, l'e-mail de contact et vérifie les droits des médias. Ajoute ensuite l'outil de statistiques de ton choix si nécessaire.

## Dépendances

Le workflow utilise `npm install` afin que le dépôt reste simple à copier sans imposer un lockfile généré localement. Pour un projet de production plus figé, tu peux ensuite committer `package-lock.json`.
