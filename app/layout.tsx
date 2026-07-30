import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://blog.fees-de-lia.com'),
  title: {
    default: "Blog LES FÉES DE L'IA — Usages IA concrets pour freelances",
    template: "%s | LES FÉES DE L'IA",
  },
  description:
    "Passe de spectatrice à celle qui maîtrise des usages IA concrets et les transforme en services à vendre. Le blog de LES FÉES DE L'IA.",
  openGraph: {
    siteName: "LES FÉES DE L'IA",
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Chau+Philomene+One&family=Poppins:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <header className="nav-bar">
          <div className="nav-inner">
            <a href="/" className="logo">
              LES FÉES DE L&apos;IA <span aria-hidden="true">✨</span>
            </a>
            <nav aria-label="Navigation principale">
              <ul className="nav-links">
                <li><a href="/#articles">Blog</a></li>
                <li>
                  <a
                    href="https://www.fees-de-lia.com/catalogue"
                    className="nav-btn"
                    target="_blank"
                    rel="noopener"
                  >
                    Catalogue gratuit
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        {children}

        <footer className="site-footer">
          <p className="footer-brand">LES FÉES DE L&apos;IA</p>
          <p className="footer-copy">&copy; 2026 LES FÉES DE L&apos;IA. Tous droits réservés.</p>
        </footer>
      </body>
    </html>
  )
}
