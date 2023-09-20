import React from "react";
import "./Portfolio.css";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Portfolio = () => {
  return (
    <div className="portfolio__block-content" id="Projects">
      <div className="portfolio__grid">
        <div className="portfolio__card">
          <div className="portfolio__card-img">
            <a
              className="portfolio__link"
              href="https://memeoplast.github.io/react-app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="portfolio__img" src="src/assets/IS.jpg"></img>
            </a>
          </div>
          <div className="portfolio__card-text">
            <div className="portfolio__card-heading-container">
              <p className="portfolio__card-heading">InnovaSphere</p>
              <div className="portfolio__card-heading-underline"></div>
            </div>
            <p className="text__default">
              A website for a digital consulting company using react and plain
              CSS. It features a Dark-Mode toggle react-router and a function
              contact form. Based on my own design.
            </p>
            <div className="portfolio__card-text-icons">
              {" "}
              <FontAwesomeIcon className="icon__bg" icon={faReact} size="2xl" />
              <FontAwesomeIcon
                className="icon__bg"
                icon={faCss3Alt}
                size="2xl"
              />
            </div>
          </div>
        </div>
        <div className="portfolio__card">
          <div className="portfolio__card-img">
            <a
              className="portfolio__link"
              href="https://memeoplast.github.io/odin-page1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="portfolio__img"
                src="src/assets/BackdropBliss.jpg"
              ></img>
            </a>
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
              <FontAwesomeIcon className="icon__bg" icon={faHtml5} size="2xl" />
              <FontAwesomeIcon
                className="icon__bg"
                icon={faCss3Alt}
                size="2xl"
              />
            </div>
          </div>
        </div>
        {/* <div className="portfolio__card">
          <div className="portfolio__card-img">
            <a
              className="portfolio__link"
              href="https://memeoplast.github.io/odin-page1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="portfolio__img"
                src="src/assets/Portfolio.jpg"
              ></img>
            </a>
          </div>
          <div className="portfolio__card-text">
            <div className="portfolio__card-heading-container">
              <p className="portfolio__card-heading">InnovaSphere</p>
              <div className="portfolio__card-heading-underline"></div>
            </div>
            <p className="text__default">
              A website for a digital consulting company using react and plain
              CSS. Design by me. Some more text will go here eventually.
            </p>
            <div className="portfolio__card-text-icons">
              {" "}
              <FontAwesomeIcon className="icon__bg" icon={faReact} size="2xl" />
              <FontAwesomeIcon
                className="icon__bg"
                icon={faCss3Alt}
                size="2xl"
              />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Portfolio;
