import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

const Button = ({ text, url }) => {
  return (
    <div className="button__large">
      <Link to={url} rel="norefferer">
        <div className="button__text"> {text} </div>
      </Link>
    </div>
  );
};

export default Button;
