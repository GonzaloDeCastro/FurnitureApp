import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Section from "../Section/Section";

import { Sidebar } from "../Sidebar/Sidebar";

export const Layout = ({ children }) => {
  return (
    <div className="container__auth__main">
      <div className="containerLayout">
        <Header />
        <div className="containerSideSection">
          <Sidebar />
          <Section container={children} />
        </div>
      </div>
      <Footer />
    </div>
  );
};
