import React from "react";
import { NavLink } from "react-router-dom";
import Switcher from "./Switcher";

const Header = () => {
  return (
    <div className="header">
      <ul>
        <li>
          <NavLink to="/" className="navlink">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="navlink">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="navlink">
            Contact
          </NavLink>
        </li>

        <li>
          <NavLink to="/user" className="navlink">
            User
          </NavLink>
        </li>
      </ul>
      <Switcher />
    </div>
  );
};

export default Header;
