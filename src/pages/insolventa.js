import styles from "@/styles/Insolventa.module.css";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Container, Card, Button, Row, Col } from "react-bootstrap";

const Insolventa = () => {
  return (
    <>
      <Head>
        <title>
          Servicii de Insolventa | Avocat Bucuresti | Cabinet de avocat si
          insolventa Alina Marin
        </title>
        <link rel="canonical" href="https://alinamarin.ro/insolventa" />
        <meta
          name="description"
          content="Oferim servicii de consultanță și reprezentare în procedurile de insolvență, inclusiv lichidare judiciara, redactare de cereri de deschidere a procedurii de insolventa, analiză a societatilor debitoare, infiintare societati, recuperare de creante, consultanta juridica și asistenta în aplicarea și executarea reglementarilor legale."
        />
      </Head>
      <Container fluid className={styles.insolvancy_page}>
        <Row>
          <Col className="px-0">
            <Image
              src="/assets/insolvency.webp"
              alt="insolvency banner"
              className={`${styles.img_top}`}
              sizes="100vw"
              width={0}
              height={0}
            />
          </Col>
        </Row>

        <Row className="align-items-center justify-content-center">
          <Col>
            <h1
              className={`${styles.main_titles} lh-base text-center pt-5 pb-2 fs-2 px-2`}
            >
              Servicii de consultanță și reprezentare în insolvență
            </h1>
            <h5 className={`${styles.subtitle} lh-base text-center px-3 pb-5`}>
              Oferim asistență specializată în procedurile de insolvență, de la
              evaluarea opțiunilor disponibile și până la finalizarea procesului
            </h5>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col>
            <Card className={styles.card}>
              <Card.Body>
                <div className={`${styles.card_text} pe-1 pe-md-3 pt-4`}>
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
                        className={`${styles.insolvency_button} mx-auto px-3 py-2 w-50`}
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
