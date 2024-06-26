import styles from "@/styles/Insolventa.module.css";
import CustomHead from "../components/CustomHead";
import Link from "next/link";
import Image from "next/image";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import Script from "next/script";

const Insolventa = () => {
  return (
    <>
      <CustomHead
        pageSlug="/insolventa"
        title="Avocat Insolventa Bucuresti | Lichidare Judiciara | Alina Marin"
        description="Cabinetul nostru oferă asistență specializată în procedurile de insolvență, acoperind toate etapele de la evaluarea opțiunilor disponibile până la finalizarea procesului. Oferim servicii precum lichidarea judiciară, redactarea cererilor de deschidere a procedurii de insolvență, reprezentarea în instanță, și consultanță în modificarea capitalului social și alte operațiuni societare."
        keywords="insolventa Bucuresti, procedura insolventei, avocat insolventa, lichidare judiciara, recuperare creante, reorganizare judiciara, consultanta insolventa, avocat drept comercial, faliment, lichidator judiciar"
        pageURL="https://www.alinamarin.ro/insolventa"
         
      />
        <Script id="google-analytics" strategy="afterInteractive">-
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-FJ187MGHYC');
        `}
      </Script>
      <Container fluid className={styles.insolvency_page}>
        <Row>
          <Col className={styles.img_wrapper}>
            <Image
              src="/assets/insolvency.webp"
              alt="Persoana care face calcule"
              className={`${styles.img_top}`}
              sizes="100vw"
              fill
              priority
            />
          </Col>
        </Row>

        <Row className="align-items-center justify-content-center">
          <Col>
            <h1 className=" lh-base text-center pt-5 pb-2 px-2">
              Servicii de insolvență
            </h1>
            <h2 className={`${styles.subtitle} lh-base text-center px-3 pb-5`}>
              Oferim asistență specializată în procedurile de insolvență, de la
              evaluarea opțiunilor disponibile și până la finalizarea procesului
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col>
            <Card className={styles.card}>
              <Card.Body>
                <div
                  className={`${styles.card_text} pe-1 px-lg-5 px-md-3 pt-4`}
                >
                  <ul className={`${styles.insolvency_list} pt-3`}>
                    <li>Lichidare judiciara / procedura falimentului;</li>
                    <br></br>
                    <li>
                      Redactare actiuni avand ca obiect cereri de deschidere a
                      procedurii de insolventa si reprezentarea clientului in
                      fata instantelor de judecata, pentru debitorii
                      comunicati/aprobat de UAT;
                    </li>
                    <br></br>
                    <li>
                      Intocmirea unei situatii de analiză a societatilor
                      debitoare prin verificare recom si buletinul procedurilor
                      de insolventa (exista abonament BPI), scopul verificarii
                      fiind de a identifica societatile care au intrat in
                      procedura insolventei.
                    </li>
                    <br></br>
                    <li>Infiintare Societati, filiale, puncte de lucru.</li>
                    <br></br>
                    <li>
                      Modificarea capitalului social, conversia creantelor in
                      actiuni, analiza cerintelor legale privind fuziunea,
                      desfiintarea, divizarea, dizolvarea societatilor;
                    </li>
                    <br></br>
                    <li>
                      Contracte comerciale si rezolvarea tuturor problemelor
                      contractuale
                    </li>
                    <br></br>
                    <li>
                      Recuperarea de creante:
                      <br></br>Notificari, Somatii de plata, Cerere cu valoare
                      redusa
                      <br></br>Declaratii de creanta
                      <br></br>Reprezentarea clientilor atat in fata instantelor
                      de judecata de drept comun, cat si in fata instantelor
                      specializate
                    </li>
                    <br></br>
                    <li>
                      Intocmire de rapoarte lunare privind activitatea
                      desfasurata
                    </li>
                    <br></br>
                    <li>
                      Analiza, intocmire si avizare raspunsuri catre petenti.
                    </li>
                    <br></br>
                    <li>
                      Analiza, intocmire si avizare notificari/adrese catre
                      persoane fizice/persoane juridice.
                    </li>
                    <br></br>
                    <li>
                      Analiza si avizare de alte acte juridice cu conotatie
                      juridica.
                    </li>
                    <br></br>
                    <li>
                      Redactare de cereri precum si orice alte documente
                      specifice activitatii avocatului.
                    </li>
                    <br></br>
                    <li>
                      Consultanta si asistenta juridica privitoare la modul de
                      aplicare si executare a reglementarilor legale .
                    </li>
                  </ul>

                  <div className="py-5">
                    <Link href="/contact" className={styles.link}>
                      <Button
                        className={`${styles.insolvency_button} mx-auto px-md-3 py-md-3 fs-6  py-3 w-50`}
                        type="button"
                        variant="outline-dark"
                        aria-label="Cere o evaluare"
                      >
                        Cere o evaluare
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Insolventa;
