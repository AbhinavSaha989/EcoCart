import React from "react";
import { Route , Routes } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import GreenHeader from "./components/GreenHeader";
import GreenNavbar from "./components/GreenNavbar";
import GreenHome from "./components/GreenHome";
import GreenChain from "./components/greenChain";
import ProductDetails from "./components/ProductDetails";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={[<Header />, <Navbar />, <Home />, <Footer />]}
      />
      <Route
        path="/dashboard"
        element={[<GreenHeader />, <GreenNavbar />, <Dashboard />, <Footer />]}
      />
      <Route
        path="/ecocart"
        element={[<GreenHeader />, <GreenNavbar />, <GreenHome />, <Footer />]}
      />
      <Route path="/green-chain" element = {[<Header />, <Navbar />, <GreenChain /> ,<Footer />]} />
      <Route
        path="/product/:id"
        element={[<GreenHeader />, <GreenNavbar />, <ProductDetails />, <Footer />]}
      />
    </Routes>
  );
};

export default App;
