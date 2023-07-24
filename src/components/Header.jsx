import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h2>Devmountain Eatery</h2>
      <nav className="list">
        <NavLink
          to=""
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          Home
        </NavLink>
        <NavLink
          to="newRecipe"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          Add Recipe
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
