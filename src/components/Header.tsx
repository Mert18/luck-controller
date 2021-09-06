import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div>
        <Link to="/">Luck Controller</Link>
      </div>

      <ul>
        <Link to="/">Home</Link>
        <p>Games</p>
        <Link to="/contribution">Contributing</Link>
      </ul>
    </header>
  );
};

export default Header;
