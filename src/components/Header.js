import React from "react";
import Headroom from "react-headroom";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Headroom>
    <header className="header">
      <Link to='/' style={{ textDecoration: 'none' }}>
        <a href="" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">ELEMENTOS 6.O</span>
          <span className="grey-color">/&gt;</span>
        </a>
      </Link>
      <input className="menu-btn" type="checkbox" id="menu-btn" /> 
      <label
        className="menu-icon"
        htmlFor="menu-btn"
        style={{ color: "white" }}
      >
        <span className="navicon"></span>
      </label>
      <ul className="menu">
        <Link to='/' style={{ textDecoration: 'none' }}>
            <li>
              <h3 className="text1">Home</h3>
            </li>
        </Link>
        <Link to='/timeline' style={{ textDecoration: 'none' }}>
            <li>
                <h3 className="text2">Events</h3>
            </li>
        </Link>
        <Link to='/contact' style={{ textDecoration: 'none' }}>
            <li>
                <h3 className="text3">Contact Us</h3>
            </li>
        </Link>
      </ul>
    </header>
  </Headroom>
);
}
export default Header;

