import "./Portfolio.css";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Portfolio = () => {
  return (
    <div className="portfolio__block-content" id="Projects">
      <div className="portfolio__grid">
        <a
          className="portfolio__link"
          href="https://memeoplast.github.io/react-app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="portfolio__card">
            <div className="portfolio__card-img">
              <img
                className="portfolio__img"
                src="/assets/IS.jpg"
                alt="A preview of the Site InnovaSphere"
              ></img>
            </div>
            <div className="portfolio__card-text">
              <div className="portfolio__card-heading-container">
                <p className="portfolio__card-heading">InnovaSphere</p>
                <div className="portfolio__card-heading-underline"></div>
              </div>
              <p className="text__default">
                A website for a digital consulting company using react and plain
                CSS. It features a Dark Mode toggle react-router and a function
                contact form. Based on my own design.
              </p>
              <div className="portfolio__card-text-icons">
                {" "}
                <FontAwesomeIcon
                  className="icon__bg"
                  icon={faReact}
                  size="2xl"
                />
                <FontAwesomeIcon
                  className="icon__bg"
                  icon={faCss3Alt}
                  size="2xl"
                />
                <FontAwesomeIcon className="icon__bg" icon={faJs} size="2xl" />
              </div>
            </div>
          </div>
        </a>
        <a
          className="portfolio__link"
          href="https://memeoplast.github.io/odin-page1/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="portfolio__card">
            <div className="portfolio__card-img">
              <img
                className="portfolio__img"
                src="/assets/BackdropBliss.jpg"
                alt="A preview of the Site Backdrop Bliss"
              ></img>
            </div>
            <div className="portfolio__card-text">
              <div className="portfolio__card-heading-container">
                <p className="portfolio__card-heading">BackdropBliss</p>
                <div className="portfolio__card-heading-underline"></div>
              </div>
              <p className="text__default">
                Where it all began. This is me testing the waters of building
                websites. BackdropBliss is plain HTML5 and CSS. It marks the
                beginning of my learning journey and is terribly unresponive.{" "}
              </p>
              <div className="portfolio__card-text-icons">
                {" "}
                <FontAwesomeIcon
                  className="icon__bg"
                  icon={faHtml5}
                  size="2xl"
                />
                <FontAwesomeIcon
                  className="icon__bg"
                  icon={faCss3Alt}
                  size="2xl"
                />
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
