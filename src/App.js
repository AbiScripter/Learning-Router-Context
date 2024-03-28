import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeContext } from "./Context/ThemeContext";
import { useContext } from "react";

function App() {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div
      className={
        isDarkMode
          ? `app-wrapper app-wrapper-dark`
          : `app-wrapper app-wrapper-light`
      }
    >
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
