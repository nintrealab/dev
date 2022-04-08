import Head from 'next/head';
import content from './frontaid.content.json';
export default function SEO() {
  return (
    <Head>

      <title>{content.title}</title>
      <meta name="thumbnail" content={content.image} />
      <meta property="og:image" content={content.image} />
      <meta property="og:image:type" content="image/png" />
      <meta name="datePublished" content={content.datePublished} />
      <meta name="dateModified" content={content.dateModified} />
      <meta name="author" type={content.author['@type']} content={content.author.name} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="preconnect" href={content.url}/>
      <link rel="search" type="application/opensearchdescription+xml" title={content.title} href="/sitemap.xml" />
      <link rel="apple-touch-icon" sizes="180x180" href={content.logo}/>
      <link rel="icon" type="image/png" sizes="32x32" href={content.logo}/>
      <link rel="icon" type="image/png" sizes="16x16" href={content.logo}/>
      <link rel="mask-icon" href={content.logo}/>
      <meta name="apple-mobile-web-app-title" content={content.title} />
      <meta name="application-name" content={content.title} />
      <meta name="theme-color" content="#ffffff" />
      <meta name="description" content={content.description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@info.sophat" />
      <meta name="twitter:title" content={content.title} />
      <meta name="twitter:description" content={content.description} />
      <meta name="twitter:creator" content="@info.sophat" />
      <meta name="twitter:image" content={content.image} />
      <meta name="og:image" content={content.image} />
      <meta name="og:image:secure_url" content={content.image} />
      <meta name="image" property="og:image" content={content.image} />
      <meta property="og:site_name" content={content.title} />
      <meta property="og:title" content={content.title} />
      <meta property="og:description" content={content.description} />
    </Head>
  );
}
