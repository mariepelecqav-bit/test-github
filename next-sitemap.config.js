/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://blog.fees-de-lia.com',
  outDir: 'out',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'Claude-Web', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
    ],
  },
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
}
