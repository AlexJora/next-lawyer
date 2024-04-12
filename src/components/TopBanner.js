import styles from "../styles/TopBanner.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const TopBanner = () => {
  return (
    <div className={`${styles.banner} w-100 py-2`}>
      <div className="container">
        <div className="row d-sm-flex flex-column flex-md-row justify-content-between align-items-center">
          <div className="col col-md-3 col-sm-12 text-center mb-md-0">
            <FontAwesomeIcon icon={faLocationDot} className="pe-2" />
            Bucuresti
          </div>
          <div className="col col-md-5 col-sm-12 text-center mb-md-0">
            <FontAwesomeIcon icon={faEnvelope} className="banner-icon pe-2" />
            av_alinamarin@yahoo.com
          </div>
          <div className="col col-md-4 col-sm-12 text-center">
            <FontAwesomeIcon icon={faPhone} className="phone_icon pe-2" />{" "}
            +40769 935 716
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
