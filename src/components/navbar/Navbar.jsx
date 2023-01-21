import React from "react";
import { useState } from "react";
import "./navbar.css";
import logo from "../../assets/logoF.png";
// import logo from "../../assets/GPT-3.svg";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

//BEM -> Block element modifier

const Menu = () => {
  return (
    <>
      <p>
        <a href="#home">Home</a>
      </p>

      <p>
        <a href="#wgpt3">About Us</a>
      </p>

      <p>
        <a href="#possibility">Booking</a>
      </p>

      <p>
        <a href="#features">Prices</a>
      </p>
      <p>
        <a href="#blogs">Gallery</a>
      </p>
    </>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <Menu />
              <div className="gpt3__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
