import React from "react";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div className="block__content">
      <div className="Portfolio__grid">
        <div className="Portfolio__card">
          <p className="Portfolio__card-heading">Project 1</p>
        </div>
        <div className="Portfolio__card">
          <p className="Portfolio__card-heading">Project 2</p>
        </div>
        <div className="Portfolio__card">
          <p className="Portfolio__card-heading">Project 3</p>
        </div>
        <div className="Portfolio__card">
          <p className="Portfolio__card-heading">Project 4</p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
