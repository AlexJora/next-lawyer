import TopBanner from "../components/TopBanner";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
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
                    className={`${styles.logo_image}`}
                    alt="scales of justice logo"
                    width={70}
                    height={70}
                  />
                  <Image
                    src="/assets/component.png"
                    className={`${styles.logo_text} px-0`}
                    alt="Alina Marin cabinet de avocatura si insolventa"
                    width={200}
                    height={50}
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
              <ul className="navbar-nav me-5 pe-2 pt-4">
                <li className="nav-item mx-3 pb-4 fw-bolder">
                  <Link
                    href="/"
                    className={`${styles.link} ${
                      pathname === "/" ? styles.active : ""
                    }`}
                  >
                    ACASA
                  </Link>
                </li>
                <li className="nav-item mx-3 pb-4 fw-bold">
                  <Link
                    href="/avocatura"
                    className={`${styles.link} ${
                      pathname === "/avocatura" ? styles.active : ""
                    }`}
                  >
                    AVOCATURA
                  </Link>
                </li>
                <li className="nav-item mx-3 pb-4 fw-bold">
                  <Link
                    href="/insolventa"
                    className={`${styles.link} ${
                      pathname === "/insolventa" ? styles.active : ""
                    }`}
                  >
                    INSOLVENTA
                  </Link>
                </li>
                <li className="nav-item mx-3 pb-4 fw-bold">
                  <Link
                    href="/informatii-utile"
                    className={`${styles.link} ${
                      pathname === "/informatii-utile" ? styles.active : ""
                    }`}
                  >
                    INFORMATII UTILE
                  </Link>
                </li>
                <li className="nav-item mx-3 pb-4 fw-bold">
                  <Link
                    href="/contact"
                    className={`${styles.link} ${
                      pathname === "/contact" ? styles.active : ""
                    }`}
                  >
                    CONTACT
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
