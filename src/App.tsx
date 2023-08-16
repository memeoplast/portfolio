import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Portfolio from "./Components/Portfolio/Portfolio";
import "./App.css";

function App() {
  return (
    <div className="block__content">
      <Header />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
