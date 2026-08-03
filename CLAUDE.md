# Blog LES FÉES DE L'IA — Contexte projet

## Infrastructure

- **Site** : blog.fees-de-lia.com (Next.js 15 — export statique)
- **Hébergement** : GitHub Pages avec domaine personnalisé (`public/CNAME`)
- **Repo GitHub** : mariepelecqav-bit/test-github
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

GitHub Pages sert `out/blog/erreur-ia-google.html` à l'URL `/blog/erreur-ia-google`.

## Ajouter un article : workflow Next.js

1. **Écrire le fragment** : fichier `<article class="fdia-article">…</article>` avec CSS inline dans le scratchpad
2. **Générer la couverture** : `node /root/.claude/skills/blog-fees-de-lia/scripts/generer_image_une.js`
3. **Copier le fragment** dans `content/blog/[slug].html` (juste le fragment, sans le wrapper HTML)
4. **Copier l'image** dans `public/blog/images/`
5. **Ajouter l'article dans `lib/articles.ts`** (tableau `articles`, trié par date desc)
6. **Commit + push** — Netlify rebuild et déploie automatiquement

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
