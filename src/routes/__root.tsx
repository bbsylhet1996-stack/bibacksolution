import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'


import '../styles.css'

const siteName = 'Northstar SEO — Get found. Grow beyond.'
const siteDescription = 'SEO services for ambitious businesses in the USA, Canada, and beyond. Discover technical SEO, local search, content strategy, and a clear path to organic growth.'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: siteName,
      },
      {
        name: 'description',
        content: siteDescription,
      },
      {
        property: 'og:title',
        content: siteName,
      },
      {
        property: 'og:description',
        content: siteDescription,
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
    ],
    links: [
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap' },
      { rel: 'canonical', href: 'https://phenomenal-dragon-4199f4.netlify.app/' },
    ],
  }),
  notFoundComponent: () => (
    <main className="not-found"><span className="eyebrow">A SMALL DETOUR</span><h1>This page is off the map.</h1><p>Let’s get you back on the right path.</p><a className="button button-dark" href="/">Back to Northstar <span aria-hidden="true">↗</span></a></main>
  ),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Organization', name: 'Northstar SEO', url: 'https://phenomenal-dragon-4199f4.netlify.app/', description: siteDescription, areaServed: ['United States', 'Canada', 'Worldwide'], hasOfferCatalog: { '@type': 'OfferCatalog', name: 'SEO services', itemListElement: ['Local SEO', 'Technical SEO', 'Content and on-page SEO', 'International SEO'].map(name => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name } })) } }) }} />
        {children}
        <Scripts />
      </body>
    </html>
  )
}
