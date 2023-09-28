import { useEffect } from "react";
import Animation from "../Header/Animation";
import "./CTA.css";
import { Link, useNavigate } from "react-router-dom";
interface ScrollToSection {
  id: string;
}

const CTA = () => {
  const history = useNavigate();

  const handleScrollToElement = ({ id }: ScrollToSection) => {
    setTimeout(() => {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
  };

  const handleNavLinkClick = (id: string) => {
    history(`/#${id}`);
    handleScrollToElement({ id });
  };

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.slice(1));
        element?.scrollIntoView({ behavior: "smooth" });
      }, 0);
    }
  }, []);
  return (
    <div className="block__CTA">
      <div className="cta__content">
        <div className="cta__text">
          <h1 className="heading__primary">Let's take off together!</h1>
          <h2 className="heading__secondary">
            Let us connect and work on exiting projects!
          </h2>
        </div>

        <div className="cta__animation">
          <Animation />
        </div>
        <div className="cta__connect">
          <Link
            to="/Contact#Contact"
            rel="noreferrer"
            onClick={() => {
              handleNavLinkClick("Contact");
            }}
          >
            <p className="cta__button-text">Let's Go!</p>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CTA;
