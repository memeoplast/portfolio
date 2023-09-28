import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
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
