import React from "react";
import { Route , Routes } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import GreenChain from "./components/greenChain";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={[<Header />, <Navbar />, <Home />, <Footer />]}
      />
      <Route path="/green-chain" element = {[<Header />, <Navbar />, <GreenChain /> ,<Footer />]} />
    </Routes>
  );
};

export default App;
