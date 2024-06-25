import styles from "@/styles/Informatii-utile.module.css";
import CustomHead from "../components/CustomHead";
import Accordion from "react-bootstrap/Accordion";
import Script from "next/script";
const info = () => {
  return (
    <>
      <CustomHead
        pageSlug="/informatii-utile"
        title="Informatii utile | Cabinet de avocat si insolventa Alina Marin - Bucuresti"
        description="Cabinetul nostru de Avocat și Insolvență, condus de Alina Marin, oferă consultanță, asistență și reprezentare pentru probleme juridice sau de insolvență și recuperare de creanțe în fața instanțelor și autorităților publice."
        pageURL="https://www.alinamarin.ro/informatii-utile"
      />
        <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-FJ187MGHYC');
        `}
      </Script>

      <div className={styles.info}>
        <h1 className="text-center pt-5 fs-2 pb-lg-3">Informatii utile</h1>
        <Accordion
          defaultActiveKey={["0"]}
          alwaysOpen
          className="px-2 py-4 mx-4 px-lg-5 mx-lg-5"
        >
          {/* Onorariul */}
          <Accordion.Item className={styles.accordion_item} eventKey="0">
            <Accordion.Header className={`${styles.accordion_header}`}>
              ONORARIUL
            </Accordion.Header>
            <Accordion.Body className={styles.body}>
              <h5 className={`${styles.title} pt-3`}>Principiile Generale:</h5>
              <p>
                {" "}
                Onorariul avocatului se stabileste tinand cond de prevederile
                Statutului profesiei de avocat. Texte extrase din: Statut 2004 -
                Statut al profesiei de avocat, 25/09/2004 Publicat in Monitorul
                Oficial, Partea I nr. 45 din 13/01/2005 intrat in vigoare la
                data de 13 ianuarie 2005; Capitolul III Activitatea profesionala
                a avocatului; Sectiunea a 2-a Relatiile dintre avocat si client;
              </p>
              <h5 className={styles.title}>
                Onorarii pentru persoane juridice:
              </h5>
              <p>
                În stabilirea onorariilor pentru persoane juridice avem în
                vedere, pe lângă principiile prezentate mai jos, posibilitatea
                de a dezvolta modalităţile de plată a onorariilor sub diferite
                aspecte cum sunt:
              </p>
              <ul>
                <li>onorariul fix</li>
                <li>onorariul per ora</li>
                <li>onorariul fix de rezultat</li>
                <li>onorariul procentual de rezultat</li>
                <li>abonamentul lunar</li>
              </ul>
              <h5 className={styles.title}>Onorarii pentru persoane fizice:</h5>
              <p>
                In stabilirea onorariilor pentru persoane fizice cabinetul de
                avocatură promovează, în vederea stabilirii onorariului,
                principiul negocierii directe, principiu care are la bază
                urmatoarele criterii :
              </p>
              <ul>
                <li>
                  complexitatea cauzei şi nivelul de pregătire profesională al
                  avocatului care realizează activitatea;
                </li>
                <li>urgenţa activităţii;</li>
                <li>cauza si posibilităţile clienţilor;</li>
                <li> istoricul colaborarii cu clientul.</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          {/* Insolventa */}
          <Accordion.Item className={styles.accordion_item} eventKey="1">
            <Accordion.Header className={`${styles.accordion_header}`}>
              INSOLVENTA
            </Accordion.Header>
            <Accordion.Body className={styles.body}>
              <p>
                Insolventa este acea situatie in care societatea se afla in
                imposibilitatea de a-si mai plati datoriile catre diversi
                creditori – furnizori, ANAF sau banci.
              </p>
              <p>
                Legea 85/2014 o descrie ca fiind „o stare a patrimoniului
                debitorului care se caracterizeaza prin insuficienta fondurilor
                banesti disponibile pentru plata datoriilor certe, lichide si
                exigibile”.{" "}
              </p>
              <p>
                {" "}
                Insolventa, nu inseamna automat faliment,aceasta poate fi
                deschisa si in vederea reorganizarii societatii pe baza unui
                plan care poate conduce la redresarea afaceri si iesirea din
                insolventa.Doar in momentul in care reorganizarea da gres, se
                poate declansa falimentul.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          {/* Reorganizarea */}
          <Accordion.Item className={styles.accordion_item} eventKey="2">
            <Accordion.Header className={`${styles.accordion_header}`}>
              REORGANIZAREA
            </Accordion.Header>
            <Accordion.Body className={styles.body}>
              <p>
                Reoganizarea societatii inseamna redresarea acesteia sub umbrela
                Legii Insolventei.
              </p>

              <p>
                Scopul insolventei nu este de a ajunge la faliment si de a
                inchide societatea, ci de a o ajuta sa se redreseze dupa un plan
                stabilit. Practic, se va deschide o procedura de insolventa
                generala cu intentia de a reorganiza societatea dupa un plan de
                reorganizare. Potrivit dispozițiilor art. 5 pct. 54. din Legea
                nr. 85/2014, reorganizarea este „procedura ce se aplica
                debitorului in insolventa, persoana juridica, in vederea
                achitarii datoriilor acestuia, conform programului de plata a
                creanțelor.
              </p>

              <p>
                Planul de reorganizare presupune intocmirea, aprobarea,
                confirmarea, implementarea și respectarea unui plan, care poate
                sa prevada:
              </p>
              <ul>
                <li>
                  restructurarea operaționala si/sau financiara a debitorului;
                </li>
                <li>
                  restructurarea corporativa prin modificarea structurii de
                  capital social;
                </li>
                <li>
                  restrangerea activitații prin lichidarea parțiala sau totala a
                  activului din averea debitorului;
                </li>
              </ul>
              <p>
                Pentru aceasta procedura, importanta deosebita prezinta, pentru
                participanți, programul de plata a creanțelor.
              </p>
              <p>
                Creditorii trebuie sa cunoasca ce sume vor primi din creantele
                pe care le detin impotriva averii debitorului și cand li se vor
                plati pentru a‑si face propria analiza economica.
              </p>
              <p>
                Prin pct. 53. din art. 5 se definește programul de plata a
                creanțelor ca fiind „graficul de achitare a acestora mentionat
                in planul de reorganizare. Doar in cazul in care acest plan de
                reorganizare si salvare a societatii esueaza, se va trece la
                procedura de faliment.
              </p>
            </Accordion.Body>
          </Accordion.Item>

          {/* Falimentul */}
          <Accordion.Item className={styles.accordion_item} eventKey="3">
            <Accordion.Header className={`${styles.accordion_header}`}>
              FALIMENTUL
            </Accordion.Header>
            <Accordion.Body className={styles.body}>
              <p>
                Falimentul intervine ca o ultima solutie atunci cand redresarea
                si planul de reorganizare nu mai sunt posibile.
              </p>
              <p>
                Falimentul este a doua etapa a procedurii de insolventa care se
                aplica debitorului in vederea lichidarii averii acestuia pentru
                acoperirea pasivului, urmata de radierea debitorului din
                registrul in care este inmatriculat.
              </p>
              <p>
                Daca se constata ca nu exista bunuri in patrimoniul debitorului
                sau ca acestea sunt insuficiente pentru a acoperi cheltuielile
                administrative, se poate da o hotarare prin care se dispune
                radierea societatii.
              </p>
              <p>
                Prin hotararea prin care se decide intrarea in faliment,
                judecatorul-sindic va pronunta dizolvarea debitorului persoana
                juridica si va dispune:
              </p>
              <ul>
                <li>Ridicarea dreptului de administrare al debitorului;</li>
                <li>
                  Desemnarea unui lichidator juridic in cazul procedurii
                  generale;
                </li>
                <li>Lichidarea bunurilor din averea firmei;</li>
                <li>Radierea societatii.</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          {/* Dizolvarea */}
          <Accordion.Item className={styles.accordion_item} eventKey="4">
            <Accordion.Header className={`${styles.accordion_header}`}>
              DIZOLVAREA
            </Accordion.Header>
            <Accordion.Body className={styles.body}>
              <p>
                Inseamna incetarea a activității societatii comerciale, adica
                firma nu mai poate emite facturi pentru activitati prevazute în
                obiectului de activitate, ci se pregateste doar pentru
                lichidarea patrimoniului
              </p>
            </Accordion.Body>
          </Accordion.Item>

          {/* Lichidarea */}
          <Accordion.Item className={styles.accordion_item} eventKey="5">
            <Accordion.Header className={`${styles.accordion_header}`}>
              LICHIDAREA
            </Accordion.Header>
            <Accordion.Body className={styles.body}>
              <p>
                Lichidarea unei firme reprezinta totalitatea operatiunilor care
                au ca scop finalizarea operatiunilor comerciale aflate în curs
                la data dizolvarii societatii, transformarea bunurilor
                societatii in lichiditati, plata datoriilor acesteia, precum si
                impartirea activului net intre asociati. Dupa ramanerea
                definitiva a hotararii judecatoreşti de dizolvare, Oficiul
                National al Registrului Comertului, la cererea societatii,
                numeste, un lichidator judiciar inscris in Tabloul
                practicienilor in insolventa.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          {/* Radierea */}
          <Accordion.Item className={styles.accordion_item} eventKey="6">
            <Accordion.Header className={`${styles.accordion_header}`}>
              RADIEREA
            </Accordion.Header>
            <Accordion.Body className={styles.body}>
              <p>
                Radierea presupune incetarea deplina a capacitatii de folosinta
                a societatii comerciale. Un aspect de retinut, in cazul
                radierii, este ca aceasta nu presupune eliminarea inregistrarii
                anterioare, ci doar consemnarea incetarii activitatii sale.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          {/* Fuziunea */}
          <Accordion.Item className={styles.accordion_item} eventKey="7">
            <Accordion.Header className={`${styles.accordion_header}`}>
              FUZIUNEA
            </Accordion.Header>
            <Accordion.Body className={styles.body}>
              <p>
                Fuziunea este operatia prin care una sau mai multe societati
                sunt dizolvate fara a intra în lichidare si transfera
                totalitatea patrimoniului lor unei alte societati in schimbul
                repartizarii catre actionarii societatii.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          {/* Divizarea */}
          <Accordion.Item className={styles.accordion_item} eventKey="8">
            <Accordion.Header className={`${styles.accordion_header}`}>
              DIVIZAREA
            </Accordion.Header>
            <Accordion.Body className={styles.body}>
              <p>
                Divizarea este operatia prin care o societate, dupa ce este
                dizolvata fara a intra în lichidare, transfera mai multor
                societati totalitatea patrimoniului sau, in schimbul
                repartizarii catre actionarii societatii divizate de actiuni la
                societatile beneficiare.
              </p>
              <h5 className={styles.title}>
                Etapele procesului de Fuziune sau Divizare:
              </h5>
              <h6>Etapa 1</h6>
              <ul>
                <li>
                  Depunerea proiectului de fuziune și hotararea adunarii
                  generale a societatii participante la fuziune ( prin care se
                  renunță la examinarea proiectului){" "}
                </li>
              </ul>
              <h6>Etapa 2</h6>
              <ul>
                <li>
                  Hotararile adunarilor generale ale asociatilor fiecareia din
                  societatile participante privind aprobarea fuziunii
                </li>
                <li>
                  Actul constitutiv al societatii absorbante actualizat conform
                  modificarilor intervenite
                </li>
                <li>
                  Dovada publicarii in Monitorul Oficial al Proiectului de
                  fuziune.
                </li>
                <li>Situatia financiara de fuziune</li>
                <li>Informatii din cazierul fiscal </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
};

export default info;
