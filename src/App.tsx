import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Portfolio from "./Components/Portfolio/Portfolio";
import "./App.css";

function App() {
  return (
    <div className="app block__content">
      <Navbar />
      <Header />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
