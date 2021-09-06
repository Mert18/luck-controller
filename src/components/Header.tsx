import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [hamburger, setHamburger] = useState(false);

  const handleHamburger = () => {
    setHamburger(!hamburger);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Luck Controller</Link>
      </div>
      <div className="right">
        <ul className="navbar">
          <Link to="/">Home</Link>
          <p>Games</p>
          <Link to="/contribution">Contributing</Link>
        </ul>

        <div className="github">
          <a
            href="https://github.com/Mert18/luck-controller"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
      </div>

      <div className="hamburger" onClick={handleHamburger}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      {hamburger && (
        <div className="hamburger-menu">
          <ul className="hamburger-menu-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contribution">Contribution</Link>
            </li>
            <li>
              <a href="https://github.com/Mert18/luck-controller">Github</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
