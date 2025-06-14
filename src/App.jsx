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

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={[<Header />, <Navbar />, <Home />, <Footer />]}
      />
      <Route path="/dashboard" element={[<Header/>, <Navbar />, <Dashboard />, <Footer />]} />
      <Route
        path="/ecocart"
        element={[<GreenHeader />, <GreenNavbar />, <GreenHome />, <Footer />]}
      />
    </Routes>
  );
};

export default App;
