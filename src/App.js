import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  console.log("app");
  return (
    <div className="app-wrapper">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
