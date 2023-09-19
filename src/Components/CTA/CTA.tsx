import React from "react";
import Animation from "../Header/Animation";
import "./CTA.css";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <div className="block__CTA">
      <div className="cta__content">
        <div className="cta__text">
          <h1 className="heading__primary">Let's take off together!</h1>
          <h2 className="heading__secondary">
            Let us connect and work on exiting projects together!
          </h2>
        </div>

        <div className="cta__animation">
          <Animation />
        </div>
        <div className="cta__connect">
          <Link to="/Contact"> Let's Go! </Link>
        </div>
      </div>
    </div>
  );
};

export default CTA;
