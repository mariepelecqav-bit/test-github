// Génère les pages HTML complètes pour chaque article du blog FÉES DE L'IA
// Usage: node blog/generate.js

const fs = require('fs');
const path = require('path');

const SCRATCHPAD = '/tmp/claude-0/-home-user-test-github/f840ddf4-3079-5b4a-a4a8-fd797f3aece6/scratchpad';

const articles = [
  {
    slug: 'erreur-ia-google',
    fragment: 'blog-erreur-ia-google.html',
    title: "L'IA de Google se trompe : garde un oeil critique",
    desc: "Google affiche des réponses IA qui peuvent être fausses. 3 réflexes pour vérifier sans perdre de temps et ne pas publier n'importe quoi.",
    image: 'image-erreur-ia-google.png',
    date: '2026-07-27',
  },
  {
    slug: 'avatar-ia-prompt',
    fragment: 'blog-avatar-mini-toi.html',
    title: "Crée ton avatar IA en 5 minutes avec ce prompt",
    desc: "Un prompt simple pour générer ton avatar IA professionnel. Fini les photos ternes : habille ta présence en ligne avec l'IA.",
    image: 'image-avatar-mini-toi.png',
    date: '2026-07-15',
  },
  {
    slug: 'suivi-budget-automatique-claude-notion',
    fragment: 'blog-suivi-budget-claude-notion.html',
    title: "Suivi budget automatique avec Claude et Notion",
    desc: "Claude lit tes emails Systèmio et remplit ton Notion de suivi. Ton CA en temps réel, sans saisie manuelle. Voici comment ça marche.",
    image: 'image-suivi-budget.png',
    date: '2026-07-31',
  },
  {
    slug: 'debrief-hebdo-extension-claude',
    fragment: 'blog-debrief-hebdo-extension-claude.html',
    title: "Debrief client automatique avec l'extension Claude",
    desc: "L'extension Claude lit le dashboard Systèmio, extrait les KPIs et rédige le debrief hebdo à ta place. Résultat en moins de 5 minutes.",
    image: 'image-debrief-hebdo.png',
    date: '2026-08-07',
  },
  {
    slug: 'prompt-photos-realistes-gemini',
    fragment: 'blog-prompt-photos-gemini.html',
    title: "10 photos IA réalistes avec Gemini : le prompt complet",
    desc: "Un prompt complet pour générer 10 photos réalistes de la même personne dans 10 décors différents avec Gemini. À copier et adapter dès maintenant.",
    image: 'image-photos-gemini.png',
    date: '2026-08-19',
  },
  {
    slug: 'photo-pro-ia-prompt',
    fragment: 'blog-photo-pro-ia.html',
    title: "Photo de profil pro avec l'IA : le prompt studio",
    desc: "Un prompt pour transformer n'importe quelle photo en portrait de studio pro. À coller dans ChatGPT ou Gemini avec ta photo. Résultat en quelques secondes.",
    image: 'image-photo-pro.png',
    date: '2026-08-26',
  },
  {
    slug: '6-prompts-community-management-ia',
    fragment: 'blog-6-prompts-cm.html',
    title: "6 prompts IA pour gérer tes réseaux sans CM",
    desc: "Stratégie, calendrier, accroches, engagement : 6 prompts IA complets pour gérer tes réseaux sociaux seule, sans community manager. Prêts à copier.",
    image: 'image-6-prompts-cm.png',
    date: '2026-09-02',
  },
  {
    slug: 'prompt-audit-malt',
    fragment: 'blog-prompt-audit-malt.html',
    title: "Audit Malt par l'IA : le prompt sans complaisance",
    desc: "Fais auditer ton profil Malt par Claude sans complaisance. Ce prompt identifie les failles qui font fuir les clientes avant même qu'elles te contactent.",
    image: 'image-audit-malt.png',
    date: '2026-09-09',
  },
  {
    slug: 'prompt-plan-professionnel-3-ans',
    fragment: 'blog-prompt-plan-3-ans.html',
    title: "Plan professionnel 3 ans avec l'IA : le prompt complet",
    desc: "Ce prompt IA te construit un plan professionnel réaliste sur 3 ans : jalons annuels, objectifs trimestriels, indicateur simple et plans B. Prêt à copier.",
    image: 'image-plan-3-ans.png',
    date: '2026-09-16',
  },
  {
    slug: 'monter-video-avec-claude',
    fragment: 'blog-monter-video-claude.html',
    title: "Monter ses vidéos avec l'IA : fini les heures devant la timeline",
    desc: "Ce skill IA coupe, assemble et structure tes vidéos automatiquement. Ce qui prenait 2 à 3 heures se fait en quelques minutes, sans logiciel complexe.",
    image: 'image-monter-video-claude.png',
    date: '2026-07-29',
  },
];

function pageTemplate(article, fragmentContent) {
  return `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${article.title}</title>
  <meta name="description" content="${article.desc}">
  <meta property="og:title" content="${article.title}">
  <meta property="og:description" content="${article.desc}">
  <meta property="og:image" content="/blog/images/${article.image}">
  <meta property="og:type" content="article">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Chau+Philomene+One&family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../style.css">
  <style>
    .article-page-main { padding-top: 90px; padding-bottom: 40px; }
  </style>
</head>
<body>

<header class="nav-bar">
  <div class="nav-inner">
    <a href="/" class="logo">LES FÉES DE L'IA <span aria-hidden="true">✨</span></a>
    <nav aria-label="Navigation principale">
      <ul class="nav-links">
        <li><a href="/#articles">Blog</a></li>
        <li>
          <a href="https://www.fees-de-lia.com/catalogue"
             class="nav-btn"
             target="_blank"
             rel="noopener">
            Catalogue gratuit
          </a>
        </li>
      </ul>
    </nav>
  </div>
</header>

<main class="article-page-main">
${fragmentContent}
</main>

<footer class="site-footer">
  <p class="footer-brand">LES FÉES DE L'IA</p>
  <p class="footer-copy">&copy; 2026 LES FÉES DE L'IA. Tous droits réservés.</p>
</footer>

</body>
</html>`;
}

function extractFragment(html) {
  // Remove the template comment block at the top
  const cleaned = html.replace(/<!--[\s\S]*?===== FIN DES NOTES[\s\S]*?===== -->/m, '').trim();
  return cleaned;
}

let generated = 0;
for (const article of articles) {
  const fragmentPath = path.join(SCRATCHPAD, article.fragment);
  if (!fs.existsSync(fragmentPath)) {
    console.error(`MISSING: ${fragmentPath}`);
    continue;
  }
  const raw = fs.readFileSync(fragmentPath, 'utf8');
  const fragment = extractFragment(raw);
  const page = pageTemplate(article, fragment);
  const outPath = path.join(__dirname, `${article.slug}.html`);
  fs.writeFileSync(outPath, page, 'utf8');
  console.log(`✓ ${article.slug}.html`);
  generated++;
}

console.log(`\nGénéré ${generated}/${articles.length} pages dans blog/`);
