import React from "react";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div className="portfolio__block-content">
      <div className="portfolio__grid">
        <div className="portfolio__card">
          <div className="portfolio__card-heading-container">
            <p className="portfolio__card-heading">Project 1</p>
            <div className="portfolio__card-heading-underline"></div>
          </div>
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
        <div className="portfolio__card">
          <div className="portfolio__card-heading-container">
            <p className="portfolio__card-heading">Project 2</p>
            <div className="portfolio__card-heading-underline"></div>
          </div>
          <a
            className="portfolio__link"
            href="https://memeoplast.github.io/react-app/"
            target="_blank"
          >
            <img
              className="portfolio__img"
              src="src/assets/Portfolio.jpg"
            ></img>
          </a>
        </div>
        <div className="portfolio__card">
          <div className="portfolio__card-heading-container">
            <p className="portfolio__card-heading">Project 3</p>
            <div className="portfolio__card-heading-underline"></div>
          </div>

          <a
            className="portfolio__link"
            href="https://memeoplast.github.io/react-app/"
            target="_blank"
          >
            <img
              className="portfolio__img"
              src="src/assets/Portfolio.jpg"
            ></img>
          </a>
        </div>
        <div className="portfolio__card">
          <div className="portfolio__card-heading-container">
            <p className="portfolio__card-heading">Project 4</p>
            <div className="portfolio__card-heading-underline"></div>
          </div>
          <a
            className="portfolio__link"
            href="https://memeoplast.github.io/react-app/"
            target="_blank"
          >
            <img
              className="portfolio__img"
              src="src/assets/Portfolio.jpg"
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
