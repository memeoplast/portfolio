import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  //   const [isHovered, setIsHovered] = useState(false);

  //   const handleHover = () => {
  //     setIsHovered(true);
  //   };

  //   const handleMouseLeave = () => {
  //     setIsHovered(false);
  //   };

  //   const targetHeight = 50;
  //   const overshoot = 5;
  //   const transitionDuration = 0.3;
  //   const finalHeight = targetHeight;

  //   const initialHeight = 15;
  //   //   isHovered
  //   //     ? targetHeight - overshoot
  //   //     : targetHeight + overshoot;

  //   const underlineStyle = {
  //     height: isHovered ? `${finalHeight}px` : `${initialHeight}px`,
  //     transition: `height ${transitionDuration}s ease`,
  //   };

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
                onClick={closeMenu}
              >
                <h2 className="heading__secondary">Home</h2>
              </Link>
            </li>
            <li className="navbar__list-item">
              <a className="navbar__link" href="#" onClick={closeMenu}>
                <h2 className="heading__secondary">About</h2>

                {/* <div
            className="navbar__link-underline"
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}
            style={underlineStyle}
          ></div> */}
              </a>
            </li>

            <li className="navbar__list-item">
              <a className="navbar__link" href="#" onClick={closeMenu}>
                <h2 className="heading__secondary">Projects</h2>

                {/* <div
            className="navbar__link-underline"
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}
            style={underlineStyle}
          ></div> */}
              </a>
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
