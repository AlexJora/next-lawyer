import TopBanner from "../components/TopBanner";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
const config = { activeClass: "active" };
import styles from "../styles/Navbar.module.css";
const Navbar = () => {
  const pathname = usePathname();
  return (
    <>
      <div className={styles.nav}>
        <TopBanner />
        <nav
          className={`${styles.slide_in} navbar navbar-dark w-100 navbar-expand-md`}
        >
          <div className="container-xxl">
            {/* logo */}
            <div className="navbar-brand">
              <Link href="/">
                <span>
                  <Image
                    src="/assets/logo.png"
                    className={`${styles.logo_image} img-fluid`}
                    alt="scales of justice logo"
                    width={70}
                    height={70}
                  />
                  <Image
                    src="/assets/component.png"
                    className={`${styles.logo_text} img-fluid px-0`}
                    alt="Alina Marin cabinet de avocatura si insolventa"
                    width={200}
                    height={100}
                  />
                </span>
              </Link>
            </div>
            {/* toggle button for mobile nav */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#main-nav"
              aria-controls="main-nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            {/* navbar links  */}
            <div
              className="collapse navbar-collapse justify-content-end align-center"
              id="main-nav"
            >
              <ul className="navbar-nav me-5 me-md-2">
                <li className="nav-item mx-3 mb-2">
                  <Link
                    href="/"
                    className={`${styles.link} ${
                      pathname === "/" ? styles.active : ""
                    }`}
                  >
                    Acasa
                  </Link>
                </li>
                <li className="nav-item mx-3 mb-2">
                  <Link
                    href="/avocatura"
                    className={`${styles.link} ${
                      pathname === "/avocatura" ? styles.active : ""
                    }`}
                  >
                    Avocatura
                  </Link>
                </li>
                <li className="nav-item mx-3 mb-2">
                  <Link
                    href="/insolventa"
                    className={`${styles.link} ${
                      pathname === "/insolventa" ? styles.active : ""
                    }`}
                  >
                    Insolventa
                  </Link>
                </li>
                <li className="nav-item mx-3 mb-2">
                  <Link
                    href="/informatii-utile"
                    className={`${styles.link} ${
                      pathname === "/informatii-utile" ? styles.active : ""
                    }`}
                  >
                    Informatii utile
                  </Link>
                </li>
                <li className="nav-item mx-3 mb-2">
                  <Link
                    href="/contact"
                    className={`${styles.link} ${
                      pathname === "/contact" ? styles.active : ""
                    }`}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
