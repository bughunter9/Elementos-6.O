import React from "react";
import Headroom from "react-headroom";
import "./Header.css";

function Header() {
  return (
    <Headroom>
    <header className="header">
      <a href="" className="logo">
        <span className="grey-color"> &lt;</span>
        <span className="logo-name">ELEMENTOS 6.O</span>
        <span className="grey-color">/&gt;</span>
      </a>
      <input className="menu-btn" type="checkbox" id="menu-btn" /> 
      <label
        className="menu-icon"
        htmlFor="menu-btn"
        style={{ color: "white" }}
      >
        <span className="navicon"></span>
      </label>
      <ul className="menu">
        <li>
          <h3 className="text1">Home</h3>
        </li>
        <li>
            <h3 className="text2">Events</h3>
        </li>
        <li>
            <h3 className="text3">Contacts</h3>
        </li>
      </ul>
    </header>
  </Headroom>
);
}
export default Header;

