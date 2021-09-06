import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import "../styles/home.css";

const HomePage = () => {
  return (
    <Layout>
      <section className="home">
        <ul className="games">
          <li className="game">
            <h3>Floating Bubbles</h3>
            <p>50%</p>
            <Link to="/floating-bubbles">Play</Link>
          </li>
        </ul>
      </section>
    </Layout>
  );
};

export default HomePage;
