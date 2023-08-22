import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faPython,
} from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <div className="block__header">
      <div className="header__content">
        <div className="header__lead-bg">
          <div className="header__lead">
            <h1 className="heading__primary">Hi 👋 I'm Nico</h1>
            <p className="text__hero">
              I'm a passionate frond-end developer based in Austria. Some more
              text will go here eventually.
            </p>
          </div>
        </div>
        <div className="header__img-container"></div>
      </div>

      <div className="header__subcontent">
        <p className="header__skills">Stack </p>
        <div className="header__icons">
          <ul className="header__icons-list">
            <li className="header__icons-list-item">
              <FontAwesomeIcon icon={faHtml5} size="2xl" />
            </li>
            <li className="header__icons-list-item">
              <FontAwesomeIcon icon={faCss3Alt} size="2xl" />
            </li>
            <li className="header__icons-list-item">
              <FontAwesomeIcon icon={faJs} size="2xl" />
            </li>
            <li className="header__icons-list-item">
              <FontAwesomeIcon icon={faReact} size="2xl" />
            </li>
            <li className="header__icons-list-item">
              <FontAwesomeIcon icon={faPython} size="2xl" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
