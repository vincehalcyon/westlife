// const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const siteUrl = "https://halcyonagile.com.ph/";
module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    additionalSitemaps: [
      `${siteUrl}/sitemap-0.xml`,
    ],
    policies: [
      {
        userAgent: '*',
        disallow: ["/thank-you", "/forgot-password", "/login", "/preview"],
      },
    ]
  }
}