import Head from "next/head";

export default function CustomHead({
  title,
  description,
  keywords,
  pageSlug,
  pageType = "website",
  ogImage = "https://www.alinamarin.ro/layout/og-image.png",
}) {
  const pageURL = `https://www.alinamarin.ro${pageSlug}`;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} key="description" />
      <meta name="keywords" content={keywords} key="keywords" />
      <meta name="robots" content="index, follow" key="robots" />
      <meta name="googlebot" content="index, follow" key="googlebot" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" key="viewport" />
      <meta charSet="utf-8" key="charSet" />
      <meta property="og:site_name" content="Cabinet de avocat si insolventa Alina Marin - Bucuresti" key="og:site_name" />
      <meta property="og:locale" content="ro" key="og:locale" />
      <meta property="og:title" content={title} key="og:title" />
      <meta property="og:description" content={description} key="og:description" />
      <meta property="og:type" content="website" key="og:type" />
      <meta property="og:url" content={pageURL} key="og:url" />
      <meta property="og:image" content={ogImage} key="og:image" />
      <meta property="og:image:alt" content="Cabinet de avocat si insolventa Alina Marin" key="og:image:alt" />
      <meta property="og:image:type" content="image/png" key="og:image:type" />
      <meta property="og:image:width" content="1200" key="og:image:width" />
      <meta property="og:image:height" content="630" key="og:image:height" />
      
    </Head>
  );
}
