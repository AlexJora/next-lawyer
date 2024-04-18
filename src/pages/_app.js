import { SpeedInsights } from "@vercel/speed-insights/next";
import Layout from "@/components/layout";
import "@/styles/globals.css";
import Head from "next/head";
import Script from "next/script";
import { useEffect } from "react";

import "bootstrap/dist/css/bootstrap.css";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <Component {...pageProps} />
        <SpeedInsights />
      </Layout>
    </>
  );
}
