import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faAngleUp,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  const handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className={styles.footer}>
      <Container fluid className="py-4">
        <Row>
          {/* Logo Section */}
          <Col md={4} className="mx-auto text-center">
            <span>
              <Image
                src="/assets/logo.png"
                className={`${styles.logo_image} img-fluid me-1`}
                alt="scales of justice logo"
                width={50}
                height={50}
              />
              <Image
                src="/assets/component.png"
                className={`${styles.logo_text} img-fluid px-0`}
                alt="Alina Marin cabinet de avocatura si insolventa"
                width={150}
                height={100}
              />
            </span>
            <p className={`${styles.content} pt-3 px-3`}>
              Biroul nostru de avocatura si insolventa va poate ghida prin
              provocarile juridice si financiare. Suntem dedicați să vă protejăm
              interesele și să vă oferim soluții personalizate.
            </p>
          </Col>
          {/* Contact Section */}
          <Col md={4} className="text-center pt-1 pt-md-5 pt-lg-3">
            <h6 className="pb-2">CONTACT</h6>
            <div className="d-flex flex-column align-items-center justify-content-center">
              <div className="d-flex align-items-center justify-content-center">
                <span title="av_alinamarin@yahoo.com">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className={styles.contact_icon}
                  />
                </span>
                <span className="fw-light px-2">av_alinamarin@yahoo.com</span>
              </div>
              <div className="mt-3">
                <div className="d-flex align-items-center justify-content-center">
                  <span title="+40 (769) 935 716">
                    <FontAwesomeIcon
                      icon={faPhone}
                      className={styles.contact_icon}
                    />
                  </span>
                  <span className="fw-light px-2">+40 (769) 935 716</span>
                </div>
              </div>
              <div className="mt-3">
                <div className="d-flex align-items-center justify-content-center">
                  <span title="Bucuresti ROMANIA">
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className={styles.contact_icon}
                    />
                  </span>
                  <span className="fw-light px-2">Bucuresti ROMANIA</span>
                </div>
              </div>
            </div>
          </Col>

          {/* Program section */}
          <Col md={4} className="text-center pt-3 pt-md-5 pt-lg-3">
            <div>
              <h6 className="pb-2">PROGRAM</h6>
              <p className="fw-light">
                Luni – Vineri: 9AM – 5PM <br /> Sâmbătă – Duminică: Închis
              </p>
              <a href="./sitemap.xml">Sitemap</a>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Scroll to Top */}
      <div className={styles.scroll_top} onClick={handleScrollUp}>
        <FontAwesomeIcon icon={faAngleUp} size="2x" />
      </div>

      {/* Copyright */}
      <div className="bg-dark d-flex align-items-center justify-content-center">
        <hr />
        <p className={`${styles.copyright} mb-0`}>©2024 Avocat Alina Marin</p>
      </div>
    </footer>
  );
};

export default Footer;
