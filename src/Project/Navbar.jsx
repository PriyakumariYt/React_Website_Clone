import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Project/Home";
import About from "../Project/About";
import Contact from "../Project/Contact";
import Service from "../Project/Service";
import MainHeader from "../Project/MainHeader";
const Navbar = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainHeader />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="*" element={<Error />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Navbar
