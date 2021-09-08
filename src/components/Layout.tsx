import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ListOfGames from "./ListOfGames";
import "../styles/layout.css";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <ListOfGames />
      <Footer />
    </>
  );
};

export default Layout;
