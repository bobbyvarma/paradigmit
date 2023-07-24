import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./website/header";
import Navbar from "./website/Navbar";
import Aboutus from "./website/Aboutus";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="aboutus" element={<Aboutus />} />
      </Routes>
    </div>
  );
};

export default Routing;
