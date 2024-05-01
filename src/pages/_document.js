import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ro">
      <Head>
        {/* Character, robots, and OG image */}
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.PNG" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta property="og:locale" content="ro" />
        <meta property="og:image:width" content="920" />
        <meta property="og:image:height" content="470" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Site name and keywords */}
        <meta
          property="alinamarin"
          content="Avocat Bucuresti | Cabinet de avocat si insolventa Alina Marin"
        />
        <meta
          name="keywords"
          content="Avocat Bucuresti | Cabinet de avocat si insolventa Alina Marin"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
