import React from "react";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div className="Portfolio__block-content">
      <div className="Portfolio__grid">
        <div className="Portfolio__card">
          <div className="Portfolio__card-heading-container">
            <p className="Portfolio__card-heading">Project 1</p>
            <div className="Portfolio__card-heading-underline"></div>
          </div>
          <a
            className="Portfolio__link"
            href="https://memeoplast.github.io/odin-page1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="Portfolio__img"
              src="src/assets/Portfolio.jpg"
            ></img>
          </a>
        </div>
        <div className="Portfolio__card">
          <div className="Portfolio__card-heading-container">
            <p className="Portfolio__card-heading">Project 2</p>
            <div className="Portfolio__card-heading-underline"></div>
          </div>
          <a
            className="Portfolio__link"
            href="https://memeoplast.github.io/react-app/"
            target="_blank"
          >
            <img
              className="Portfolio__img"
              src="src/assets/Portfolio.jpg"
            ></img>
          </a>
        </div>
        <div className="Portfolio__card">
          <div className="Portfolio__card-heading-container">
            <p className="Portfolio__card-heading">Project 3</p>
            <div className="Portfolio__card-heading-underline"></div>
          </div>

          <a
            className="Portfolio__link"
            href="https://memeoplast.github.io/react-app/"
            target="_blank"
          >
            <img
              className="Portfolio__img"
              src="src/assets/Portfolio.jpg"
            ></img>
          </a>
        </div>
        <div className="Portfolio__card">
          <div className="Portfolio__card-heading-container">
            <p className="Portfolio__card-heading">Project 4</p>
            <div className="Portfolio__card-heading-underline"></div>
          </div>
          <a
            className="Portfolio__link"
            href="https://memeoplast.github.io/react-app/"
            target="_blank"
          >
            <img
              className="Portfolio__img"
              src="src/assets/Portfolio.jpg"
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
