import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about__content">
      <div className="about__content-img">
        <img className="about__img" src="src/assets/office.jpg"></img>
      </div>
      <div className="about__content-text">
        <h2 className="about__heading">About me</h2>
        <h2 className="about__heading-chapter">I love to program</h2>
        <div className="text__default">
          Bavaria ipsum dolor sit amet sit magna, aliquip. Oba no a Maß sauba
          nimma heitzdog! Aliquam ut heid owe sea. Placerat lorem Zidern sea, i
          iriure auszutzeln abfieseln de Sonn dolor a liabs Deandl. Hendrerit
          proident vel cupiditat ad lorem. Dignissim sog i nulla tincidunt vo de
          Schneid! Amet et blandit wolln ut diam nia. Blandit hawadere midananda
          est liber delenit ea wos et doming Semmlkneedl Steckerleis
        </div>
      </div>
    </div>
  );
};

export default About;
