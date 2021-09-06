import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/layout.css";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
