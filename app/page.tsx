import { articles } from '@/lib/articles'

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <h1 className="hero-title">
            <span className="spk s1" aria-hidden="true">✨</span>
            <span className="spk s2" aria-hidden="true">🧚‍♀️</span>
            <span className="spk s3" aria-hidden="true">✨</span>
            Tes essais avec l&apos;IA sont décevants<br />
            pendant que d&apos;autres cartonnent&nbsp;?
          </h1>
          <p className="hero-sub">
            Je t&apos;aide à passer de spectatrice à celle qui maîtrise des usages IA concrets
            et les transforme en services à vendre.
          </p>
          <div className="hero-btns">
            <a
              href="https://www.fees-de-lia.com/catalogue"
              className="btn btn-primary"
              target="_blank"
              rel="noopener"
            >
              Recevoir le catalogue gratuit
            </a>
            <a href="#articles" className="btn btn-secondary">
              Lire le blog ↓
            </a>
          </div>
        </div>
      </section>

      {/* ARTICLES */}
      <section className="articles-section" id="articles">
        <div className="section-inner">
          <h2 className="section-title">Articles récents</h2>
          <div className="articles-grid">
            {articles.map((article) => (
              <article key={article.slug} className="card">
                <span className="card-tag">{article.tag}</span>
                <h3 className="card-title">
                  <a href={`/blog/${article.slug}`}>{article.title}</a>
                </h3>
                <p className="card-desc">{article.desc}</p>
                <a href={`/blog/${article.slug}`} className="card-link">
                  Lire l&apos;article →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAS DE PAGE */}
      <section className="footer-cta">
        <div className="footer-cta-inner">
          <span className="footer-cta-emoji" aria-hidden="true">🧚‍♀️</span>
          <h2>Reçois le catalogue des services IA prêts à vendre</h2>
          <p>
            Des usages concrets, une méthode qui marche et des services
            que tu peux proposer dès maintenant.
          </p>
          <a
            href="https://www.fees-de-lia.com/catalogue"
            className="btn btn-primary"
            target="_blank"
            rel="noopener"
          >
            Recevoir le catalogue gratuit
          </a>
        </div>
      </section>
    </>
  )
}
