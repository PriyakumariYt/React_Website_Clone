import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
// import "./Footer.css";

const Mainheader = () => {
  return (
    <>
      <Header/>
      <Outlet />
      <Footer />
    </>
  );
};

export default Mainheader;
