export interface Article {
  slug: string
  title: string
  desc: string
  image: string
  date: string
  tag: string
}

// Sorted by date descending (newest first)
export const articles: Article[] = [
  {
    slug: 'prompt-plan-professionnel-3-ans',
    title: "Construis ton plan professionnel à 3 ans avec ce prompt IA",
    desc: "Jalons annuels, objectifs trimestriels, un seul indicateur mensuel et des plans B intégrés. Simple, actionnable, sans tableau de bord.",
    image: 'image-plan-3-ans.png',
    date: '2026-09-16',
    tag: 'Prompts IA',
  },
  {
    slug: 'prompt-audit-malt',
    title: "Fais auditer ton profil Malt par Claude : le prompt sans complaisance",
    desc: "Claude lit ton profil Malt comme une cliente sceptique et identifie les failles qui font fuir — avec des reformulations prêtes à copier-coller.",
    image: 'image-audit-malt.png',
    date: '2026-09-09',
    tag: 'Prompts IA',
  },
  {
    slug: '6-prompts-community-management-ia',
    title: "Les 6 prompts qui remplacent ton community manager",
    desc: "Stratégie, calendrier 30 jours, accroches virales, engagement : 6 prompts complets pour gérer tes réseaux sans CM. Prêts à copier.",
    image: 'image-6-prompts-cm.png',
    date: '2026-09-02',
    tag: 'IA pour les réseaux sociaux',
  },
  {
    slug: 'photo-pro-ia-prompt',
    title: "Ta photo de profil pro en version studio : le prompt à coller dans ton IA",
    desc: "Ce prompt transforme n'importe quelle photo en portrait de studio professionnel. À coller dans ChatGPT ou Gemini avec ta photo.",
    image: 'image-photo-pro.png',
    date: '2026-08-26',
    tag: 'Prompts IA',
  },
  {
    slug: 'prompt-photos-realistes-gemini',
    title: "10 photos IA réalistes avec Gemini : le prompt qui les génère toutes",
    desc: "Génère 10 photos réalistes de la même personne dans 10 décors différents — même visage, mêmes couleurs, ambiances totalement différentes.",
    image: 'image-photos-gemini.png',
    date: '2026-08-19',
    tag: 'Prompts IA',
  },
  {
    slug: 'debrief-hebdo-extension-claude',
    title: "Debrief hebdo automatique avec l'extension Claude : ton rapport client rédigé en 30 secondes",
    desc: "L'extension Claude lit le dashboard Systèmio de ton client, extrait les KPIs et te rédige un debrief prêt à envoyer. En moins de 2 minutes.",
    image: 'image-debrief-hebdo.png',
    date: '2026-08-07',
    tag: "Gagner du temps avec l'IA",
  },
  {
    slug: 'suivi-budget-automatique-claude-notion',
    title: "Suivi budget automatisé avec Claude et Notion : fini la saisie manuelle",
    desc: "Claude surveille tes emails Systèmio, extrait chaque paiement et remplit ta base Notion. Ton CA en temps réel, sans lever le petit doigt.",
    image: 'image-suivi-budget.png',
    date: '2026-07-31',
    tag: "Gagner du temps avec l'IA",
  },
  {
    slug: 'monter-video-avec-claude',
    title: "Monter ses vidéos avec l'IA : fini les heures devant la timeline",
    desc: "Ce skill IA coupe, assemble et structure tes vidéos automatiquement. Ce qui prenait 2 à 3 heures se fait en quelques minutes, sans logiciel complexe.",
    image: 'image-monter-video-claude.png',
    date: '2026-07-29',
    tag: "Gagner du temps avec l'IA",
  },
  {
    slug: 'erreur-ia-google',
    title: "L'IA de Google peut se tromper : comment garder un oeil critique sur tes recherches",
    desc: "Google affiche des réponses IA qui peuvent être fausses. 3 réflexes simples pour ne plus publier une info erronée sans le savoir.",
    image: 'image-erreur-ia-google.png',
    date: '2026-07-27',
    tag: "Comprendre l'IA",
  },
  {
    slug: 'avatar-ia-prompt',
    title: "Crée ton avatar IA en quelques minutes : le prompt qui change ta présence en ligne",
    desc: "Un prompt simple pour générer une version IA de toi — photo de profil pro, visuel cohérent pour tes réseaux, sans session photo.",
    image: 'image-avatar-mini-toi.png',
    date: '2026-07-15',
    tag: 'Prompts IA',
  },
]

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug)
}
