import styles from "@/styles/Home.module.css";
import CustomHead from "../components/CustomHead";
import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarCheck,
  faFileCircleCheck,
  faCommentsDollar,
  faGavel,
} from "@fortawesome/free-solid-svg-icons";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <CustomHead
        pageSlug="/"
        title="Avocat Bucuresti | Alina Marin | Cabinet de avocat si insolventa"
        description="Consultanță, asistență și reprezentare pentru probleme juridice, de insolvență sau recuperare de creanțe în fața instanțelor și autorităților publice."
        keywords="Bucuresti, bucuresti, avocat, insolvență, recuperare creanțe, drept comercial, drept civil, dreptul muncii, dreptul familiei, procedura insolvenței, "
        pageURL="https://www.alinamarin.ro/"
        
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-FJ187MGHYC');
        `}
      </Script>
      
     
      <main className={`${styles.home_page}`}>
        {/* HERO=========== */}
        <Container fluid>
          <Row>
            <div className={`${styles.hero_section}`}>
              <picture>
                <source
                  // mobile
                  media="(max-width: 768px)"
                  srcSet="/assets/small-hero.webp"
                />
                <source
                  // desktop
                  media="(min-width: 769px)"
                  srcSet="/assets/large-hero.webp"
                />
                <Image
                  src="/assets/large-hero.webp"
                  alt="Carti si justitia cu balanța dreptății"
                  className={styles.hero_img}
                  priority
                  fill
                />
              </picture>

              <div className={styles.hero_overlay}></div>
              <Col
                className={`${styles.hero_content} d-flex flex-column justify-content-start align-items-start pb-5 slide ps-lg-4`}
              >
                <h1 className={`${styles.text_1} pb-3 pt-lg-2`}>ALINA MARIN</h1>
                <h1 className={`${styles.text_2} fs-3`}>
                  BIROU DE AVOCAT SI INSOLVENTA
                  <span className="fw-bold fs-3">
                    <br></br>
                    Bucuresti
                  </span>
                </h1>
                <Col md={5} className={`${styles.text_3} fst-italic fw-light`}>
                  &quot;Nu este o adevărată justiție acolo unde nu există
                  dreptate, iar dreptatea nu poate fi găsită acolo unde nu
                  există adevăr.&quot; - <span>Lucius Annaeus Seneca</span>
                </Col>
              </Col>
            </div>

            {/* small screens buttons*/}
            <Row className={`${styles.mobile_buttons} d-md-none g-0`}>
              <Col xs={6} className="px-0">
                <Link href="/contact">
                  <Button
                    className={`${styles.butt} btn btn-outline-dark type-button p-2 mb-1 btn-md me-1 w-100`}
                    aria-label="Programare"
                  >
                    <div className="d-flex flex-column align-items-center fs-6">
                      <span className="p-1">
                        <FontAwesomeIcon icon={faCalendarCheck} size="2x" />
                      </span>
                      Programare
                    </div>
                  </Button>
                </Link>
              </Col>
              <Col xs={6} className="px-0">
                <Link href="/contact">
                  <Button
                    className={`${styles.butt} btn btn-outline-dark type-button p-2 mb-1 btn-md me-1 w-100`}
                    aria-label="Cere o evaluare"
                  >
                    <div className="d-flex flex-column align-items-center">
                      <span className="p-1">
                        <FontAwesomeIcon icon={faFileCircleCheck} size="2x" />
                      </span>
                      Cere o evaluare
                    </div>
                  </Button>
                </Link>
              </Col>
            </Row>
            {/* horizontal buttons */}
            <Row
              className={`${styles.horizontal_buttons} d-none d-md-flex justify-content-center align-items-end w-100 h-100 g-0`}
            >
              <Col className="flex-grow-1">
                <Link href="/contact">
                  <Button
                    className={`${styles.butt} btn btn-outline-dark btn-lg type-button p-4 w-100`}
                    aria-label="Programare"
                  >
                    <span className="p-3">
                      <FontAwesomeIcon icon={faCalendarCheck} size="1x" />
                    </span>
                    Programare
                  </Button>
                </Link>
              </Col>
              <Col className="flex-grow-1">
                <Link href="/contact">
                  <Button
                    className={`${styles.butt} btn btn-lg btn-outline-dark type-button p-4 w-100`}
                    aria-label="Cere o evaluare"
                  >
                    <span className="p-3">
                      <FontAwesomeIcon icon={faFileCircleCheck} size="1x" />
                    </span>
                    Cere o evaluare
                  </Button>
                </Link>
              </Col>
              <Col className="flex-grow-1">
                <Link href="/informatii-utile">
                  <Button
                    className={`${styles.butt} btn btn-lg btn-outline-dark type-button p-4 w-100`}
                    aria-label="Onorarii"
                  >
                    <span className="p-3">
                      <FontAwesomeIcon icon={faCommentsDollar} size="1x" />
                    </span>
                    Onorarii
                  </Button>
                </Link>
              </Col>
            </Row>
          </Row>
        </Container>

        {/* INTRO======== */}
        <Container fluid className="py-4 px-lg-5 my-lg-2">
          <Row>
            <Col lg={7}>
              <div className="card-body">
                <h1 className="text-center pb-4 fs-2 mx-auto lh-base px-md-5 pt-2">
                  Va confruntați cu o problemă juridică sau de insolvență?
                </h1>

                <div>
                  <Image
                    src="/assets/law-justice.webp"
                    alt="Un ciocan, balanța dreptății și cărți de lege"
                    className="img-fluid d-none d-lg-none d-md-block  float-md-end ms-md-3"
                    width={300}
                    height={200}
                  />
                  <p className={`${styles.text} px-3 pb-4`}>
                    <span className={`${styles.first_letter} ps-2`}>C</span>
                    abinetul nostru de Avocat si Insolvență, condus de Alina
                    Marin, oferă consultanță, asistență și reprezentare pentru
                    probleme juridice sau de insolvență și recuperare de creanțe
                    în fața instanțelor și autorităților publice.
                    <br />
                    <span className={`${styles.first_letter} ps-2`}>V</span>rem
                    să fim alături de tine și să găsim cele mai bune soluții
                    pentru problemele tale menținând în același timp imaginea ta
                    impecabilă în lumea afacerilor.
                    <span></span>
                  </p>
                </div>
              </div>
            </Col>

            <Col
              md={5}
              xs={12}
              className="d-flex align-items-center justify-content-center"
            >
              <Image
                src="/assets/law-justice.webp"
                alt="a gavel, scales of justice, and law books"
                className="img-fluid pb-4 d-lg-block d-md-none"
                width={500}
                height={300}
              />
            </Col>
          </Row>
        </Container>

        {/* SERVICII========= */}
        <Container fluid className="pb-5">
          <Row>
            <div className={`${styles.services_section}  `}>
              <div className={styles.services_overlay}></div>
              <div
                className={`${styles.services_content} flex-column d-flex justify-content-center align-items-center mt-3`}
              >
                <h1
                  className={`${styles.services_title} lh-base text-center pb-2 pt-4 fs-2`}
                >
                  Domenii de activitate
                </h1>
                <Row className="mt-3 gx-3 flex-column flex-md-row">
                  <Col md={6}>
                    <h4 className={`${styles.services_title} text-center pb-5`}>
                      Cabinet de avocatură
                    </h4>
                    <div className="d-flex align-items-center">
                      <Image
                        src="/assets/barou.webp"
                        className="mx-auto d-block pb-4"
                        alt="Sigla Barou Bucuresti"
                        width={200}
                        height={200}
                        // layout="intrinsic"
                      />
                    </div>
                    <p className={`${styles.services_text} lh-lg pt-4 px-lg-5`}>
                      Asistență și reprezentare juridică în domenii de drept
                      comercial, înființări societăți, drept civil, dreptul
                      muncii, dreptul familiei, procedura insolvenței,
                      recuperări creanțe, drept administrativ, etc.
                    </p>
                    <div className="py-5 text-center">
                      <Link href="/avocatura">
                        <Button
                          variant="outline-dark"
                          className={`${styles.services_btn} mb-4 p-2 fs-5`}
                        >
                          Afla mai multe...
                        </Button>
                      </Link>
                    </div>
                  </Col>
                  <Col md={6}>
                    <h4 className={`${styles.services_title} text-center pb-5`}>
                      Cabinet de insolvență
                    </h4>
                    <div className="d-flex align-items-center">
                      <Image
                        src="/assets/unpir.webp"
                        className="mx-auto d-block pb-4"
                        alt="Sigla Unpir"
                        width={200}
                        height={200}
                        // layout="intrinsic"
                      />
                    </div>
                    <p
                      className={`${styles.services_text} lh-lg pt-4 px-2 px-lg-5`}
                    >
                      Servicii în etapa de preinsolvență, fuziuni și divizări
                      societăți comerciale, insolvență, restructurare și
                      reorganizare judiciară, faliment, lichidare judiciară și
                      administrativă, recuperări creanțe, evaluare și
                      valorificare active.
                    </p>
                    <div className="py-5 text-center">
                      <Link href="/insolventa">
                        <Button
                          variant="outline-dark"
                          className={`${styles.services_btn} mb-4 p-2 fs-5`}
                        >
                          Afla mai multe...
                        </Button>
                      </Link>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Row>
        </Container>

        {/* CINE SUNTEM======== */}
        <Container fluid className="px-lg-5 my-lg-2">
          <Row>
            <Col lg={7}>
              <div className="card-body">
                <h1
                  className={`${styles.main_titles} text-center pb-4 fs-2 mx-auto`}
                >
                  Cine suntem?
                </h1>

                <div>
                  <Image
                    src="/assets/about-us.webp"
                    className="img-fluid d-none d-lg-none d-md-block  float-md-end ms-md-3"
                    alt="Doua persoane la birou"
                    width={300}
                    height={200}
                  />

                  <p className="px-3 pb-4 raleway">
                    <span className={`${styles.first_letter} ps-2`}>V</span>om
                    fi partenerul dvs. în soluționarea într-un mod profesionist
                    a tuturor problemelor comerciale, fiscale, contractuale.
                    <br />
                    <span className={`${styles.first_letter} ps-2`}>S</span>
                    untem o echipă tânără de avocați, practicieni în insolvență
                    și economiști, specialiști în domeniul financiar-juridic, cu
                    o nouă viziune de abordare și soluționare a problemelor. Ne
                    recomandă experiența de peste 10 ani, profesionalismul și
                    seriozitatea.
                    <br />
                    <span className={`${styles.first_letter} ps-2`}>C</span>
                    oordonatorul Biroului de avocatură și insolvență, Marin
                    Alina este avocat de peste 15 ani, în domeniul comercial,
                    contractual etc. și practician în insolvență de 8 ani, cu
                    societăți salvate de insolvență, radiate, și/sau planuri de
                    reorganizare etc
                  </p>
                </div>
              </div>
            </Col>
            <Col
              sx={12}
              lg={5}
              className="d-flex align-items-center justify-content-center"
            >
              <Image
                src="/assets/about-us.webp"
                className="img-fluid d-lg-block d-md-none"
                alt="Doua persoane la birou"
                width={500}
                height={300}
              />
            </Col>
          </Row>
        </Container>

        {/*CE NE RECOMANDA========= */}
        <Container className={`${styles.recommendation} py-5 pt-lg-4`}>
          <div className="container d-flex flex-column justify-content-center align-items-center">
            <h1
              className={`${styles.main_titles} text-center pb-2 pb-lg-4 fs-2 mx-auto`}
            >
              Ce ne recomanda?
            </h1>
          </div>
          <Row className="mt-4 flex-column-reverse flex-md-row mb-3">
            <Col lg={4} md={{ span: 6, offset: 3 }} className="order-md-2 mt-5">
              <div
                className={`${styles.square} container d-flex flex-column justify-content-center align-items-center py-5 w-75 fw-bold`}
              >
                <div>
                  <FontAwesomeIcon icon={faGavel} size="2x" />
                </div>
                <div>10+</div>
                <div>ani de experiență</div>
              </div>
            </Col>
            <Col lg={5} md={12} className="order-md-1 pb-3 raleway">
              <ul className={`${styles.home_list}`}>
                <li>Experiență vastă în domeniu</li>
                <li>
                  Profesionalism ridicat și abordare orientată spre clienți.
                </li>
                <li>Implicare activă în proiecte și sprijinirea acestora.</li>
                <li>Comunicare directă și transparentă cu clienții.</li>
                <li>Angajament față de satisfacția clienților.</li>
                <li>
                  Furnizarea de solutii complete prin colaborarea cu alți
                  profesioniști.
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}
