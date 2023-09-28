import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer__bg">
      <div className="footer__legal text__light">
        © Copyright {new Date().getFullYear()} All rights reserved
      </div>
      <div className="footer__socials">
        <a
          className="a__default"
          href="https://github.com/memeoplast"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/nico-geisler-54a6b5187/"
          target="_blank"
          rel="noreferrer"
          className="a__default"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
