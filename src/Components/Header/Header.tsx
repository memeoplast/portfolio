import { React, useEffect, useState } from "react";
import "./Header.css";
// import Animation from "./Animation";

const Header = () => {
  const [cubeWidth, setCubeWidth] = useState(null);

  useEffect(() => {
    const headerElement = document.getElementById("header");
    const blockHeaderHeight = window.getComputedStyle(headerElement).height;
    const calculatedCubeWidth = (parseFloat(blockHeaderHeight) * 2) / 3;
    setCubeWidth(calculatedCubeWidth);
  }, []);

  return (
    <div className="block__header" id="header">
      <div className="Header__lead-bg" style={{ width: cubeWidth }}>
        <div className="Header__lead">
          <h1 className="heading__primary">Hi 👋</h1>
          <div className="Header__Link-container">
            <h1 className="heading__primary">I'm</h1>
            <a className="Header__link" href="#">
              <h1 className="heading__primary">Nico </h1>
              <div className="hero__underline"></div>
            </a>
          </div>
        </div>
      </div>
      <div className="Header__lead-bg" style={{ width: cubeWidth }}>
        <div className="Header__lead">
          <h1 className="heading__primary">Hi 👋</h1>
          <div className="Header__Link-container">
            <h1 className="heading__primary">I'm</h1>
            <a className="Header__link" href="#">
              <h1 className="heading__primary">Nico </h1>
              <div className="hero__underline"></div>
            </a>
          </div>
        </div>
      </div>

      {/* <div className="Header__animation">
        <Animation />
      </div> */}
    </div>
  );
};

export default Header;
