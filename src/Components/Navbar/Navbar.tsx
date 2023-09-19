import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const handleScrollToElement = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="navbar">
      <div className="navbar__logo">
        <Link to="/">
          <h2 className="heading__secondary">NMG.CODES</h2>
        </Link>
      </div>
      <div className={`navbar__content ${isMenuOpen ? "navbar--open" : ""}`}>
        <div className="navbar__links-container">
          <ul className="navbar__list">
            <li className="navbar__list-item">
              <Link
                className="navbar__link"
                to="/"
                rel="noreferrer"
                onClick={() => {
                  handleScrollToElement("");
                  closeMenu();
                }}
              >
                <h2 className="heading__secondary">Home</h2>
              </Link>
            </li>
            <li className="navbar__list-item">
              <Link
                className="navbar__link"
                to="/"
                rel="noreferrer"
                onClick={() => {
                  handleScrollToElement("About");
                  closeMenu();
                }}
              >
                <h2 className="heading__secondary">About</h2>
              </Link>
            </li>

            <li className="navbar__list-item">
              <Link
                className="navbar__link"
                to="/"
                rel="noreferrer"
                onClick={() => {
                  handleScrollToElement("Projects");
                  closeMenu();
                }}
              >
                <h2 className="heading__secondary">Projects</h2>
              </Link>
            </li>

            <li className="navbar__list-item">
              <Link
                className="navbar__link"
                to="/Contact"
                rel="noreferrer"
                onClick={closeMenu}
              >
                {" "}
                <h2 className="heading__secondary">Contact</h2>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar__hamburger-menu">
        {isMenuOpen ? (
          <RiCloseLine
            color="ec6974"
            size={27}
            onClick={() => setIsMenuOpen(false)}
          />
        ) : (
          <RiMenu3Line
            color="ec6974"
            size={27}
            onClick={() => setIsMenuOpen(true)}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
