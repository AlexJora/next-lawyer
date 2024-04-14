import styles from "@/styles/Home.module.css";
import Head from "next/head";
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

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Avocat Bucuresti | Cabinet de avocat si insolventa Alina Marin
        </title>
        <meta
          name="description"
          content="Cabinetul nostru de Avocat și Insolvență, condus de Alina Marin, oferă consultanță, asistență și reprezentare pentru probleme juridice sau de insolvență și recuperare de creanțe în fața instanțelor și autorităților publice."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.PNG" />
      </Head>

      <main className={styles.home_page}>
        {/* HERO=========== */}
        <Container fluid>
          <Row>
            <div className={`${styles.hero_section}`}>
              <div className={styles.hero_overlay}></div>
              <div
                className={`${styles.hero_content} d-flex flex-column justify-content-start align-items-start pt-6 slide`}
              >
                <div className={`${styles.text_1} fs-2 pb-3`}>ALINA MARIN</div>
                <div className={`${styles.text_2} fs-4`}>
                  BIROU DE AVOCATURA SI INSOLVENTA
                  <span className="fw-bold">
                    <br></br> Bucuresti{" "}
                  </span>
                </div>
                <Col md={7} className={`${styles.text_3} fst-italic fw-light`}>
                  "Nu este o adevărată justiție acolo unde nu există dreptate,
                  iar dreptatea nu poate fi găsită acolo unde nu există adevăr."
                  - <span>Lucius Annaeus Seneca.</span>
                </Col>
              </div>

              {/* horizontal buttons */}
              <div
                className={`${styles.horizontal_buttons} d-none d-md-flex justify-content-center align-items-end w-100 h-100`}
              >
                <div className="col flex-grow-1">
                  <Link href="/contact">
                    <Button
                      className={`${styles.butt} btn btn-outline-dark btn-lg  type-button p-4 w-100`}
                      aria-label="Programare"
                    >
                      <span className="p-3">
                        <FontAwesomeIcon icon={faCalendarCheck} size="2x" />
                      </span>
                      Programare
                    </Button>
                  </Link>
                </div>
                <div className="col flex-grow-1">
                  <Link href="/contact">
                    <Button
                      className={`${styles.butt} btn btn-lg btn-outline-dark type-button p-4 w-100`}
                      aria-label="Cere o evaluare"
                    >
                      <span className="p-3">
                        <FontAwesomeIcon icon={faFileCircleCheck} size="2x" />
                      </span>
                      Cere o evaluare
                    </Button>
                  </Link>
                </div>
                <div className="col flex-grow-1">
                  <Link href="/informatii-utile">
                    <Button
                      className={`${styles.butt} btn btn-lg btn-outline-dark type-button p-4 w-100`}
                      aria-label="Onorarii"
                    >
                      <span className="p-3">
                        <FontAwesomeIcon icon={faCommentsDollar} size="2x" />
                      </span>
                      Onorarii
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* small screens buttons*/}
            <div
              className={`${styles.mobile_buttons} d-md-none d-flex justify-content-between pt-2`}
            >
              <Link href="/contact">
                <Button
                  className={`${styles.butt} btn btn-outline-dark type-button p-2 mb-1 btn-md me-1`}
                  aria-label="Programare"
                >
                  <span className="p-3">
                    <FontAwesomeIcon icon={faCalendarCheck} />
                  </span>
                  Programare
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  className={`${styles.butt} btn btn-outline-dark type-button p-2 mb-1 btn-md me-1`}
                  aria-label="Cere o evaluare"
                >
                  <span className="p-3">
                    <FontAwesomeIcon icon={faFileCircleCheck} />
                  </span>
                  Cere o evaluare
                </Button>
              </Link>
              <Link href="/informatii-utile">
                <Button
                  className={`${styles.butt} btn btn-outline-dark type-button p-2 btn-md`}
                  aria-label="Onorarii"
                >
                  <span className="p-3">
                    <FontAwesomeIcon icon={faCommentsDollar} />
                  </span>
                  Onorarii
                </Button>
              </Link>
            </div>
          </Row>
        </Container>

        {/* INTRO======== */}
        <Container fluid className="py-5 px-lg-5 my-lg-2">
          <Row>
            <Col md={7} xs={12}>
              <div className="card-body">
                <h1
                  className={`${styles.main_titles} pt-5 pt-md-0 text-center pb-4 fs-3 mx-auto lh-base`}
                >
                  Va confruntați cu o problemă juridică sau de insolvență?
                </h1>

                <div className={`${styles.text_separator}`}>
                  <p className={`${styles.text} px-3 pb-4`}>
                    <span className={`${styles.first_letter} ps-2`}>C</span>
                    abinetul nostru de Avocatură Insolvență, condus de Alina
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
                className="img-fluid d-block pb-4"
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
                  className={`${styles.services_title} lh-base text-center pb-3 pt-4 fs-3`}
                >
                  Domenii de activitate
                </h1>
                <Row className="mt-3 gx-3 flex-column flex-md-row">
                  <Col md={6}>
                    <h5 className={`${styles.services_title} text-center pb-5`}>
                      Cabinet de avocatură
                    </h5>
                    <div className="d-flex align-items-center">
                      <Image
                        src="/assets/barou.webp"
                        className="img-fluid mx-auto d-block rounded-2 pb-4"
                        alt="sigla barou Bucuresti"
                        width={170}
                        height={170}
                      />
                    </div>
                    <p className={`${styles.services_text} pt-4 px-lg-5`}>
                      Asistență și reprezentare juridică în domenii de drept
                      comercial, înființări societăți, drept civil, dreptul
                      muncii, dreptul familiei, procedura insolvenței,
                      recuperări creanțe, drept administrativ, etc.
                    </p>
                    <div className="py-5 text-center">
                      <Link href="/avocatura">
                        <Button
                          variant="outline-dark"
                          className={`${styles.services_btn} mb-4`}
                        >
                          Afla mai multe...
                        </Button>
                      </Link>
                    </div>
                  </Col>
                  <Col md={6}>
                    <h5 className={`${styles.services_title} text-center pb-5`}>
                      Cabinet de insolvență
                    </h5>
                    <div className="d-flex align-items-center">
                      <Image
                        src="/assets/unpir.webp"
                        className="img-fluid mx-auto d-block rounded-2 mb-4"
                        alt="sigla unpir"
                        width={170}
                        height={170}
                      />
                    </div>
                    <p className={`${styles.services_text} pt-4 px-2 px-lg-5`}>
                      Servicii în etapa de preinsolvență, fuziuni și divizări
                      societăți comerciale, insolvență, restructurare și
                      reorganizare judiciară, faliment, lichidare judiciară și
                      administrativă, recuperări creanțe, evaluare și
                      valorificare active.
                    </p>
                    <div className="py-3 text-center">
                      <Link href="/insolventa">
                        <Button
                          variant="outline-dark"
                          className={`${styles.services_btn} mb-4`}
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
            <Col xs={12} lg={7}>
              <div className="card-body">
                <h1
                  className={`${styles.main_titles} text-center pb-4 fs-3 mx-auto`}
                >
                  Cine suntem?
                </h1>

                <div className={`${styles.text_separator}`}>
                  <Image
                    src="/assets/about-us.webp"
                    className="img-fluid d-none d-lg-none d-md-block  float-md-end ms-md-3"
                    alt="two persons at a desk"
                    width={300}
                    height={200}
                  />

                  <p className="px-3 pb-4">
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
                alt="two persons at a desk"
                width={500}
                height={300}
              />
            </Col>
          </Row>
        </Container>

        {/*CE NE RECOMANDA========= */}
        <Container className={`${styles.recommendation} py-5`}>
          <div className="container d-flex flex-column justify-content-center align-items-center">
            <h1
              className={`${styles.main_titles} text-center pb-2 pb-lg-4 fs-3 mx-auto`}
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
            <Col lg={5} md={12} className="order-md-1 pb-3">
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
