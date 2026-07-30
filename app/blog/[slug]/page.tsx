import { notFound } from 'next/navigation'
import { readFileSync } from 'fs'
import { join } from 'path'
import type { Metadata } from 'next'
import { articles, getArticleBySlug } from '@/lib/articles'

interface Props {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) return {}

  return {
    title: article.title,
    description: article.desc,
    openGraph: {
      title: article.title,
      description: article.desc,
      type: 'article',
      publishedTime: article.date,
      images: [`/blog/images/${article.image}`],
    },
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) notFound()

  const fragmentPath = join(process.cwd(), 'content', 'blog', `${slug}.html`)
  let html = ''
  try {
    html = readFileSync(fragmentPath, 'utf8')
  } catch {
    notFound()
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.desc,
    image: `https://blog.fees-de-lia.com/blog/images/${article.image}`,
    datePublished: article.date,
    dateModified: article.date,
    author: { '@type': 'Organization', name: "LES FÉES DE L'IA" },
    publisher: { '@type': 'Organization', name: "LES FÉES DE L'IA" },
    url: `https://blog.fees-de-lia.com/blog/${slug}`,
    inLanguage: 'fr',
    isAccessibleForFree: true,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main
        className="article-page-main"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </>
  )
}
