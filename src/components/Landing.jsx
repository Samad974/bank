import React from "react";
import { Cards } from "./Cards";
import { Loans } from "./Loans";
import { AccountSum } from "./AccountSum";
import { Home } from "./Home";
import { Nav } from "./Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const Landing = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/cards" element={<Cards />} />
          <Route path="/loans" element={<Loans />} />
          <Route path="accountsum" element={<AccountSum />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};
