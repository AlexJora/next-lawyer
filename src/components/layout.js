import Footer from "./Footer";
import Navbar from "./Navbar";

// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import "@fortawesome/fontawesome-svg-core/styles.css";
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; /* eslint-disable import/first */
// FONTS
import { Archivo, Marmelad } from "next/font/google";
export const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  weight: ["200", "400", "500", "600"],
  variable: "--font-archivo",
});

export const marmelad = Marmelad({
  subsets: ["latin"],
  style: ["normal"],
  display: "swap",
  weight: ["400"],
  variable: "--font-marmelad",
});

const Layout = ({ children }) => {
  return (
    <main className={`${archivo.variable} ${marmelad.variable} font-sans`}>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
