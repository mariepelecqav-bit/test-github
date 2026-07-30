# Blog LES FÉES DE L'IA — Contexte projet

## Infrastructure

- **Site** : blog.fees-de-lia.com (statique HTML)
- **Hébergement** : Netlify — déploiement automatique à chaque push
- **Repo GitHub** : mariepelecqav-bit/test-github
- **Branche de développement** : `claude/fees-de-lia-blog-refonte-u0wnz1`
- Pousser sur cette branche → Netlify déploie automatiquement

## Structure des fichiers

```
/
├── index.html          # Homepage (grille des articles)
├── style.css           # CSS global (nav, hero, cards, footer)
├── blog/
│   ├── generate.js     # Script Node.js — génère les pages depuis les fragments
│   ├── [slug].html     # Pages article complètes (une par article)
│   └── images/
│       └── image-[slug].png   # Couvertures 1200x630
```

Netlify sert `blog/erreur-ia-google.html` à l'URL `/blog/erreur-ia-google` (Pretty URLs activé — pas d'extension .html dans les liens).

## Ajouter un article : workflow

1. **Écrire le fragment** : fichier `<article class="fdia-article">…</article>` avec CSS inline, sauvegardé dans le scratchpad
2. **Générer la couverture** : `node /root/.claude/skills/blog-fees-de-lia/scripts/generer_image_une.js`
3. **Ajouter l'article dans `blog/generate.js`** (tableau `articles`)
4. **Exécuter** : `node blog/generate.js` → génère le HTML complet dans `blog/[slug].html`
5. **Copier l'image** dans `blog/images/`
6. **Mettre à jour `index.html`** : ajouter la card dans la grille `.articles-grid`
7. **Commit + push** sur la branche de développement

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

## Skill disponible

`blog-fees-de-lia` (dans `/root/.claude/skills/blog-fees-de-lia/`) — charge les règles complètes de rédaction, le gabarit HTML, et le générateur d'images de couverture.
