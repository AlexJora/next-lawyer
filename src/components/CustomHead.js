import Head from "next/head";

export default function CustomHead({
  title,
  content,
  pageSlug,
  pageType = "website",
  ogImage = "https://www.alinamarin.ro/layout/og-image.png",
}) {
  const ogTitle = title;
  const pageURL = `https://www.alinamarin.ro/${pageSlug}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={content} />
      <link rel="canonical" href={pageURL} />
      <meta property="og:type" content={pageType} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={content} />
      <meta property="og:url" content={pageURL} />
      <meta property="og:image" content={ogImage} />
    </Head>
  );
}
