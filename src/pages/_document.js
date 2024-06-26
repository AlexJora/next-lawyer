import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ro">
    <Head>
      <meta charSet="UTF-8" key="charSet" />
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        key="robots"
      />
      <meta property="og:locale" content="ro" key="og:locale" />
      <meta property="og:image:width" content="920" key="og:image:width" />
      <meta property="og:image:height" content="470" key="og:image:height" />
      <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
      <meta
        property="alinamarin"
        content="Avocat Bucuresti | Cabinet de avocat si insolventa Alina Marin"
        key="alinamarin"
      />
      <meta
        name="keywords"
        content="Avocat Bucuresti | Cabinet de avocat si insolventa Alina Marin"
        key="keywords"
      />
      
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
  );
}
