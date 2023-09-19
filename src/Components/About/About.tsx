import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about__content">
      <div className="about__content-img">
        <img className="about__img" src="src/assets/office.jpg"></img>
      </div>

      <div className="about__content-text">
        <h2 className="about__heading">About</h2>
        <h2 className="about__heading-chapter">I love to Lorem</h2>
        <div className="text__default">
          I'm a passionate self-taught front-end Developer. I love creating
          user-friendly and beautiful web-apps that create value for users and
          clients alike. Prior, I did my BA in international business in Berlin
          and worked in new-work consulting with a focus on data-migrations.
        </div>
      </div>
    </div>
  );
};

export default About;
