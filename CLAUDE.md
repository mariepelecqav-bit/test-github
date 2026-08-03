# Blog LES FÉES DE L'IA — Contexte projet

## ⚠️ ATTENTION : ce repo n'est PAS le blog en ligne

**Vérifié le 3 août 2026 par résolution DNS :**

```
blog.fees-de-lia.com  →  CNAME  →  fees-de-lia-blog.netlify.app
```

Le blog public **blog.fees-de-lia.com** est servi par **Netlify**, depuis un repo
**Astro + Tailwind** qui vit en local sur le PC de Marie (`C:\Users\corme\fees-de-lia`).
Ce repo Astro **n'existe pas sur GitHub** — il est introuvable via `add_repo`.

Ce repo-ci (`mariepelecqav-bit/test-github`) est un **projet Next.js séparé**,
déployé sur GitHub Pages à `mariepelecqav-bit.github.io/test-github`.
**Rien de ce qui est publié ici n'apparaît sur blog.fees-de-lia.com.**

### Pour publier un article sur le vrai blog

Il faut lancer Claude Code **sur le PC de Marie**, dans `C:\Users\corme\fees-de-lia` :
article Markdown avec frontmatter Astro dans `src/content/articles/`, puis push
(Netlify redéploie tout seul). Les sources d'articles sont sur le Drive, dans
`G:\Mon Drive\FEES DE L'IA\BLOG\a-publier\` — accessibles aussi via le connecteur
Google Drive depuis une session distante.

Ne jamais affirmer qu'un article est en ligne sur blog.fees-de-lia.com après un
déploiement de CE repo. Vérifier le DNS avant toute conclusion sur l'hébergement.

## Infrastructure de ce repo (Next.js, GitHub Pages)

- **Repo GitHub** : mariepelecqav-bit/test-github
- **URL réelle** : mariepelecqav-bit.github.io/test-github
- **Branche de développement** : `claude/fees-de-lia-blog-refonte-u0wnz1`
- Merger sur `main` → GitHub Actions lance `npm run build` → déploie `out/` sur GitHub Pages

## Stack technique

- **Next.js 15** avec App Router + `output: 'export'` (statique)
- **next-seo** (v6, garmeeh/next-seo — 8 000+ ⭐) — JSON-LD BlogPosting inline
- **next-sitemap** (v4, iamvishnusankar/next-sitemap — 3 700+ ⭐) — sitemap.xml + robots.txt
- **TypeScript** strict

## Structure des fichiers

```
/
├── app/
│   ├── layout.tsx              # Shell nav + footer
│   ├── page.tsx                # Homepage (hero + grille articles)
│   ├── globals.css             # CSS global (nav, hero, cards, footer)
│   └── blog/[slug]/page.tsx    # Template article (generateStaticParams)
├── lib/
│   └── articles.ts             # Métadonnées de tous les articles
├── content/
│   └── blog/
│       └── [slug].html         # Fragments HTML des articles (CSS inline inclus)
├── public/
│   ├── blog/images/            # Couvertures 1200x630
│   └── llms.txt                # GEO : indexation par les IA
├── blog/
│   ├── generate.js             # Générateur de fragments (héritage)
│   └── images/                 # Copies des couvertures (héritage)
├── next.config.ts
├── next-sitemap.config.js
└── .github/workflows/deploy.yml   # GitHub Actions : build + deploy sur push main
```

GitHub Pages sert `out/blog/erreur-ia-google.html` à `mariepelecqav-bit.github.io/test-github/blog/erreur-ia-google` (pas sur le domaine personnalisé).

## Ajouter un article : workflow Next.js

1. **Écrire le fragment** : fichier `<article class="fdia-article">…</article>` avec CSS inline dans le scratchpad
2. **Générer la couverture** : `node /root/.claude/skills/blog-fees-de-lia/scripts/generer_image_une.js`
3. **Copier le fragment** dans `content/blog/[slug].html` (juste le fragment, sans le wrapper HTML)
4. **Copier l'image** dans `public/blog/images/`
5. **Ajouter l'article dans `lib/articles.ts`** (tableau `articles`, trié par date desc)
6. **Commit + push, puis merger sur `main`** — GitHub Actions rebuild et déploie sur GitHub Pages (rappel : pas sur blog.fees-de-lia.com)

> Les anciens `blog/[slug].html` et `blog/generate.js` sont conservés pour référence mais ne sont plus servis.

## Planification éditoriale

La base Notion "Contenus Fées de l'IA" sert de calendrier. Les dates de publication dans Notion sont des jalons éditoriaux uniquement — elles ne déclenchent rien automatiquement. Les articles doivent être committés manuellement pour être publiés.

## Charte de la marque

**Marque** : LES FÉES DE L'IA (toujours en majuscules, jamais de tiret cadratin —)  
**Ton** : tutoiement, chaleureux, direct, pas de jargon non expliqué  
**Audience** : freelances (principalement assistantes digitales) qui veulent maîtriser l'IA

**Palette** :
- Corail : `#d25050`
- Rose : `#F5E8EF`
- Slate : `#3d4a55`
- Gris : `#8a8f96`

**Polices** : Chau Philomene One (titres) + Poppins (corps)

**Classes CSS articles** : `.fdia-article` (CSS inline dans chaque fragment)

## Catégories officielles

- Comprendre l'IA
- IA pour les réseaux sociaux
- Prompts IA
- Gagner du temps avec l'IA
- Créer des services IA

## Types d'articles

- **Pédagogique** : donne la connaissance. CTA final → `https://www.fees-de-lia.com/catalogue`
- **Vitrine de skill** : présente un service à vendre. Donne le QUOI, jamais le COMMENT. CTA → lien d'achat du skill.

## Articles publiés

| Slug | Catégorie | Date |
|------|-----------|------|
| erreur-ia-google | Comprendre l'IA | 2026-07-27 |
| avatar-ia-prompt | Prompts IA | 2026-07-15 |
| suivi-budget-automatique-claude-notion | Gagner du temps avec l'IA | 2026-07-31 |
| debrief-hebdo-extension-claude | Gagner du temps avec l'IA | 2026-08-07 |
| prompt-photos-realistes-gemini | Prompts IA | 2026-08-19 |
| photo-pro-ia-prompt | Prompts IA | 2026-08-26 |
| 6-prompts-community-management-ia | IA pour les réseaux sociaux | 2026-09-02 |
| prompt-audit-malt | Prompts IA | 2026-09-09 |
| prompt-plan-professionnel-3-ans | Prompts IA | 2026-09-16 |
| monter-video-avec-claude | Gagner du temps avec l'IA | 2026-07-29 |
| ia-act-ce-qui-te-concerne | Comprendre l'IA | 2026-08-03 |

## Skill disponible

`blog-fees-de-lia` (dans `/root/.claude/skills/blog-fees-de-lia/`) — charge les règles complètes de rédaction, le gabarit HTML, et le générateur d'images de couverture.
