import styles from "@/styles/Contact.module.css";
import CustomHead from "../components/CustomHead";
import ContactForm from "../components/ContactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import Script from "next/script";

export const Contact = () => {
  return (
    <>
      <CustomHead
        pageSlug="/contact"
        title="Contact | Avocat Bucuresti | Alina Marin"
        description="Contacteaza-ne pentru orice problema juridica cu care te confrunti. Oferim consultanta si reprezentare in diverse domenii legale. Locatie: Bucuresti, E-mail: av_alinamarin@yahoo.com, Telefon: +40769 935 716."
        pageURL="https://www.alinamarin.ro/contact"
      />
        <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-FJ187MGHYC');
        `}
      </Script>
      <div className={styles.contact_page}>
        <h1 className="text-center pt-5 fs-2 pb-lg-4">Contact</h1>
        <section>
          {/* contact info============ */}
          <div className="container-lg bg-light my-4 shadow">
            <div className="contact-info text-center py-5">
              <div className="row no-gutters">
                <div className="col-lg-3 col-md-6 col-12 border-end border-1">
                  <div className="contact-inner">
                    <div className="info-i">
                      <span>
                        <FontAwesomeIcon
                          icon={faLocationDot}
                          size="2x"
                          className={`${styles.icon} pb-3`}
                        />
                      </span>
                    </div>
                    <h5>Locatie:</h5>
                    <p>Bucuresti</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12 border-end border-1">
                  <div className="contact-inner">
                    <div className="info-i">
                      <span>
                        <FontAwesomeIcon
                          icon={faClock}
                          size="2x"
                          className={`${styles.icon} pb-3`}
                        />
                      </span>
                    </div>
                    <h5>Program:</h5>
                    <p>Luni – Vineri: 9 – 17</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12 border-end border-1">
                  <div className="contact-inner">
                    <div className="info-i">
                      <span>
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          size="2x"
                          className={`${styles.icon} pb-3`}
                        />
                      </span>
                    </div>
                    <h5>E-mail</h5>
                    <p>av_alinamarin@yahoo.com</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="contact-inner">
                    <div className="info-i">
                      <span>
                        <FontAwesomeIcon
                          icon={faPhone}
                          size="2x"
                          className={`${styles.icon} pb-3`}
                        />
                      </span>
                    </div>
                    <h5>Telefon</h5>
                    <p>+40769 935 716</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* contact form and text============ */}
          <div className="container-lg">
            <div className="row g-5 py-5">
              <div className="col-sm-6 order-sm-first ">
                <div className="contact-text d-flex flex-column ">
                  <h5 className="lh-base text-center pb-4 mt-md-5 pt-5">
                    Nu ezitati sa ne contactati
                  </h5>
                  <div className="px-3">
                    <p>
                      Suntem aici pentru a va oferi sprijinul nostru in toate
                      problemele legale cu care va confruntati.{" "}
                    </p>
                    <p>
                      Va rugam sa ne contactati completand formularul de mai jos
                      si vom fi bucurosi sa va oferim ajutorul nostru.
                    </p>
                    <p>
                      Vom prelua solicitarea dvs. si vom reveni in scurt timp
                      pentru mai multe detalii.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 ">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Contact;
