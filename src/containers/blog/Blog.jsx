import React from "react";
import Article from "../../components/article/Article";
// import { blog01, blog02, blog03, blog04, blog05 } from "./imports.js";
import blog01 from "../../assets/t1.jpg";
import blog02 from "../../assets/t2.jpg";
import blog03 from "../../assets/t3.jpg";
import blog04 from "../../assets/t4.jpg";
import blog05 from "../../assets/t5.jpg";
import "./blog.css";

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">Explore our Gallery</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Sep 26, 2022" text="Rara cup 2022" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article
          imgUrl={blog02}
          date="Sep 30, 2022"
          text="Inter college Kathmandu tournament"
        />
        <Article
          imgUrl={blog03}
          date="Sep 26, 2022"
          text="Gold Futsal cup 2022"
        />
        <Article imgUrl={blog04} date="Sep 26, 2021" text="Thulung cup 2022" />
        <Article imgUrl={blog05} date="Sep 26, 2022" text="LAU Cup 2022" />
      </div>
    </div>
  </div>
);

export default Blog;
