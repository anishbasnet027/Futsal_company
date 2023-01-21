import React from "react";
import Feature from "../../components/feature/Feature";
import "./features.css";

const featuresData = [
  {
    title: "Medical Facility",
    text: "We offer full-service medical facility for our players. Our medical team is staffed by experienced and licensed professionals who are dedicated to providing the highest level of care and treatment to our players. Whether you're dealing with an injury or just need to get checked out, our medical facility has you covered. With our comprehensive medical services, you can focus on what you do best - playing futsal",
  },
  {
    title: "Hygience Canteen",
    text: "we also offer a hygienic canteen for our players, staff and visitors. Our canteen is fully equipped with modern facilities and staffed by experienced professionals who are dedicated to providing delicious and nutritious food in a clean and safe environment. Whether you're looking for a quick snack or a full meal, our canteen has something for everyone. With our focus on hygiene, you can enjoy your food with peace of mind. Come and refuel with us after a game or training!",
  },
  {
    title: "Professional Kit",
    text: "we also offer professional futsal kits for our players. Our kits are made of high-quality materials and designed to provide maximum comfort and performance on the field. Whether you're looking for a complete kit or just need to replace a few items, we have everything you need to look and feel like a pro. Our kits are also available for purchase, so you can take your team's look and performance to the next level. Sign up now and gear up with us!",
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">We offer booking from 6am to 6pm</h1>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
