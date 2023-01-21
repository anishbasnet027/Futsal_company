import React from "react";
import "./header.css";
import people from "../../assets/google.png";
import ai from "../../assets/futbal.jpg";

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">WELCOME, to FUTSAL WORLD</h1>
        <p>
          Your premier destination for all things futsal! We are dedicated to
          providing a fun, safe, and competitive environment for players of all
          skill levels to enjoy the fast-paced and exciting game of futsal.
        </p>

        <div className="gpt3__header-content__input">
          {/* <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button> */}
        </div>

        {/* <div className="gpt3__header-content__people">
          <img src={people} />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div> */}
      </div>

      <div className="gpt3__header-image">
        <img src={ai} />
      </div>
    </div>
  );
};

export default Header;
