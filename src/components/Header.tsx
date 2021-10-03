import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <NavLink activeClassName="activeClass" to="/reactform">
        React form
      </NavLink>
      <NavLink activeClassName="activeClass" to="/material">
        Material ui
      </NavLink>
      <NavLink activeClassName="activeClass" to="/firebase">
        Firebase
      </NavLink>
    </header>
  );
};

export default Header;
