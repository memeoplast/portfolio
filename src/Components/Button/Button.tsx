import { Link } from "react-router-dom";
import "./Button.css";

interface Props {
  text: string;
  url: string;
}

const Button = ({ text, url }: Props) => {
  return (
    <div className="button__large">
      <Link to={url} rel="norefferer">
        <div className="button__text"> {text} </div>
      </Link>
    </div>
  );
};

export default Button;
