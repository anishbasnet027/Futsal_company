import React from "react";
import "./WhatGPT.css";
import Feature from "../../components/feature/Feature";

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="FUTSAL WORLD"
          text="Whether you're a seasoned veteran or a newcomer to the sport, we have something for everyone, including leagues, tournaments, and clinics. Our state-of-the-art facilities and experienced staff ensure that every player has the best possible experience. Join us today and discover the thrill of futsal!"
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">WE OFFER MORE THAN YOU IMAGINE</h1>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Tournaments"
          text="We specialize in organizing and hosting top-notch futsal tournaments for players of all ages and skill levels. Our tournaments feature competitive play, experienced referees, and a wide variety of divisions to ensure that every player has the best possible experience. Whether you're looking to test your skills against the best in the area or simply looking for a fun and exciting way to spend your weekends, we have the perfect tournament for you. Sign up today and experience the thrill of futsal competition!"
        />
        <Feature
          title="Training"
          text="We also offer training for players of all ages and skill levels. Our experienced and knowledgeable coaches provide expert instruction on all aspects of the game, from basic skills and techniques to advanced strategies and tactics. We pride ourselves on providing a fun, safe and inclusive environment for players to improve their skills and reach their full potential. Whether you're looking to take your game to the next level or simply want to learn more about this exciting sport, we have the perfect training program for you. Sign up now and start your journey to becoming a futsal pro!"
        />
        <Feature
          title="Matches"
          text="We also offer regular futsal matches for players of all ages and skill levels. Our matches are held at our state-of-the-art facilities and feature experienced referees and a wide variety of divisions to ensure a fair and competitive game. Whether you're a seasoned veteran or just starting out, we have something for everyone. Join us and experience the thrill of futsal competition in a safe and fun environment. Sign up now and get ready to play!"
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
