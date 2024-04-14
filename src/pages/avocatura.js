import styles from "@/styles/Avocatura.module.css";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGavel,
  faScaleBalanced,
  faTruck,
  faPeopleLine,
  faBriefcase,
  faScroll,
} from "@fortawesome/free-solid-svg-icons";

const Avocatura = () => {
  return (
    <>
     <Head>
     <title>
            Servicii de Avocatura | Avocat Bucuresti | Cabinet de avocat si
            insolventa Alina Marin
          </title>
          <link rel="canonical" href="https://alinamarin.ro/avocatura" />
          <meta
            name="description"
            content="Oferim consultanță juridică și asistență specializată într-o serie de arii de practică, inclusiv drept civil, penal, executare silită, dreptul familiei, dreptul muncii, dreptul comercial și societar."
          />
      </Head>
      <main className={styles.avocatura}>
        <div>
          <div className="pt-2 text-center">
            <h1
              className={`${styles.main_titles} lh-base text-center pb-1 pb-2 pt-5 fs-2`}
            >
              Servicii complete de avocatura
            </h1>
            <h5 className={`${styles.subtitle} lh-base text-center px-3 pb-4`}>
              Oferim consultanță juridică și asistență specializată într-o serie
              de arii de practică
            </h5>
          </div>
          <div className="row g-5 px-3 pt-4 ">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className={`${styles.card} h-100`}>
                <div
                  className={`${styles.civil} ${styles.dinamic_look} card-img-top`}
                >
                  <div className={styles.overlay}></div>
                </div>
                <div className={`${styles.body} card-body text-center py-4`}>
                  <FontAwesomeIcon
                    icon={faScaleBalanced}
                    className={`${styles.law_icon} pb-4`}
                    size="2x"
                  />
                  <h6 className="text-light card-title pb-4">DREPT CIVIL</h6>
                  <p className="card-text px-3">
                    Servicii de consultanță juridică, asistare și reprezentare
                    în fața instanțelor de judecată, redactare cereri de chemare
                    în judecată. Vă ajutăm să rezolvați rapid problema juridică.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className={`${styles.card} h-100`}>
                <div
                  className={`${styles.criminal} ${styles.dinamic_look} card-img-top`}
                >
                  <div className={styles.overlay}></div>
                </div>
                <div className={`${styles.body} card-body text-center py-4`}>
                  <FontAwesomeIcon
                    icon={faGavel}
                    className={`${styles.law_icon} pb-4`}
                    size="2x"
                  />
                  <h6 className="text-light card-title pb-4">DREPT PENAL</h6>
                  <p className="card-text px-3">
                    Asistență și reprezentare juridică în fața organelor de
                    urmărire penală și în fața instanțelor de judecată,
                    redactare cereri și plângeri împotriva măsurilor și actelor
                    de urmărire penală, redactare cerere de reabilitare.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className={`${styles.card} h-100`}>
                <div
                  className={`${styles.executare}  ${styles.dinamic_look} card-img-top`}
                >
                  <div className={styles.overlay}></div>
                </div>
                <div className={`${styles.body} card-body text-center py-4`}>
                  <FontAwesomeIcon
                    icon={faTruck}
                    size="2x"
                    className={`${styles.law_icon} pb-4`}
                  />
                  <h6 className="text-light card-title pb-4">
                    EXECUTARE SILITA
                  </h6>
                  <p className="card-text px-3">
                    În materia executării silite, serviciile oferite sunt
                    indiferent de calitatea pe care o aveți în această procedură
                    – debitor sau creditor. Pasivitatea poate avea consecințe
                    deosebit de grave în această materie, atât pentru creditor,
                    cât și pentru debitor.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className={`${styles.card} h-100`}>
                <div
                  className={`${styles.family}  ${styles.dinamic_look} card-img-top`}
                >
                  <div className={styles.overlay}></div>
                </div>
                <div className={`${styles.body} card-body text-center py-4`}>
                  <FontAwesomeIcon
                    icon={faPeopleLine}
                    size="2x"
                    className={`${styles.law_icon} pb-4`}
                  />
                  <h6 className="text-light card-title pb-4">
                    DREPTUL FAMILIEI - DIVORT SI PARTAJ
                  </h6>
                  <p className="card-text px-3">
                    Servicii de asistare și reprezentare juridică în procesele
                    de divorț, partaj, exercitarea autorității părintești,
                    pensie de întreținere, program de vizită minor.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className={`${styles.card} h-100`}>
                <div
                  className={`${styles.labor}  ${styles.dinamic_look} card-img-top`}
                >
                  <div className={styles.overlay}></div>
                </div>
                <div className={`${styles.body} card-body text-center py-4`}>
                  <FontAwesomeIcon
                    icon={faBriefcase}
                    size="2x"
                    className={`${styles.law_icon} pb-4`}
                  />
                  <h6 className="text-light card-title pb-4">DREPTUL MUNCII</h6>
                  <p className="card-text px-3">
                    Oferim servicii de avocatură profesionale, concretizate prin
                    redactarea contestației împotriva deciziei de concediere,
                    împotriva deciziei de sancționare disciplinară, obligarea
                    angajatorului la plata drepturilor de natură salarială,
                    elaborarea de opinii juridice în dreptul muncii.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className={`${styles.card} h-100`}>
                <div
                  className={`${styles.business}  ${styles.dinamic_look} card-img-top`}
                >
                  <div className={styles.overlay}></div>
                </div>
                <div className={`${styles.body} card-body text-center py-4`}>
                  <FontAwesomeIcon
                    icon={faScroll}
                    size="2x"
                    className={`${styles.law_icon} pb-4`}
                  />
                  <h6 className="text-light card-title pb-4">
                    DREPTUL COMERCIAL SI SOCIETAR
                  </h6>
                  <p className="card-text px-3">
                    Înființări societăți comerciale la Registrul Comerțului,
                    schimbare sediu social, înființare/radiere punct de lucru,
                    redactare acte constitutive, hotărâri ale adunării generale
                    a asociațiilor.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container py-4 ">
            <p className={`${styles.more_services} py-4 px-3`}>
              Alte domenii de activitate în care vă oferim consultanță, asistare
              și reprezentare în fața instanțelor de judecată sau a altor
              instituții ale statului: RECUPERARE CREANTE, PENSII SI ALTE
              DREPTURI DE ASIGURARI SOCIALE, ASOCIAȚII DE PROPRIETARI, PLÂNGERI
              CONTRAVENȚIONALE AMENZI, DESPĂGUBIRI ACCIDENTE AUTO, redactare de
              cereri precum si orice alte documente specifice activitatii.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};
export default Avocatura;
