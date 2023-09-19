import React, { Children } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";
import "./App.css";
import { Outlet } from "react-router";

function App() {
  return (
    <div className="app block__content">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
