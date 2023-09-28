import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./Navbar.css";

interface ScrollToSection {
  id: string;
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const history = useNavigate();

  const handleScrollToElement = ({ id }: ScrollToSection) => {
    setTimeout(() => {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
  };

  const handleNavLinkClick = (id: string) => {
    history(`/#${id}`);
    closeMenu();
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

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <Link
          to="/"
          rel="noreferrer"
          onClick={() => {
            handleScrollToElement({ id: "Home" });
            closeMenu();
          }}
        >
          <h2 className="heading__secondary">NMG.CODES</h2>
        </Link>
      </div>
      <div className={`navbar__content ${isMenuOpen ? "navbar--open" : ""}`}>
        <div className="navbar__links-container">
          <ul className="navbar__list">
            <li className="navbar__list-item">
              <Link
                className="navbar__link"
                to="/#Home"
                rel="noreferrer"
                onClick={() => {
                  handleNavLinkClick("Home");
                }}
              >
                <h2 className="heading__secondary">Home</h2>
              </Link>
            </li>
            <li className="navbar__list-item">
              <Link
                className="navbar__link"
                to="/#About"
                rel="noreferrer"
                onClick={() => {
                  handleNavLinkClick("About");
                }}
              >
                <h2 className="heading__secondary">About</h2>
              </Link>
            </li>

            <li className="navbar__list-item">
              <Link
                className="navbar__link"
                to="/#Projects"
                rel="noreferrer"
                onClick={() => {
                  handleNavLinkClick("Projects");
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
                onClick={() => {
                  handleNavLinkClick("Contact");
                }}
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
