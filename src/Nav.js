import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
function Nav() {
  const navStyle = {
    color: "white",
  };
  return (
    <div className="App">
      <nav>
        <h3>Get Books</h3>
        <ul className="nav-links">
          <Link style={navStyle} to="/about">
            <li>About</li>
          </Link>
          <Link style={navStyle} to="/example">
            <li>MyChart</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
export default Nav;
