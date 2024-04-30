import Footer from "./Footer";
import Navbar from "./Navbar";
import Head from "next/head";

// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import "@fortawesome/fontawesome-svg-core/styles.css";
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; /* eslint-disable import/first */
import { Raleway, Marmelad } from "next/font/google";
const raleway_init = Raleway({
  weight: ["500"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
  variable: "--font-raleway",
});
const marmelad_init = Marmelad({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
  variable: "--font-marmelad",
});
const Layout = ({ children }) => {
  return (
    <div className={`${raleway_init.variable} ${marmelad_init.variable}`}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
