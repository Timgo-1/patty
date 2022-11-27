import React from "react";
import Button from "../Button/Button";
import IconAbout from "./IconAbout/IconAbout";
import "./About.css";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="image">
        <img src="images/product-4.png" alt="about" />
      </div>
      <div className="content">
        <img src="images/title-img.png" alt="title" />
        <h3 className="title">Stepping into the Utopia of Hamburgers</h3>
        <p>
        There’s nothing cut out about Patty. Not our Hamburgers. Not our kin and our sandwiches. 
        Also, unquestionably not the manner in which we live. Around here, we don’t make do with anything 
        short of food we’re glad to serve. Furthermore, we don’t simply check-in. Not when we can likewise 
        turn into our best, make companions, and have some good times while we’re grinding away. We’re the 
        fast-food organization that lives unpacked.{" "}
        </p>
        <div className="icons">
          <IconAbout title="The Price is Right" />
          <IconAbout title="Excellent Service" />
          <IconAbout title="Fresh Food" />
          <IconAbout title="Baked Bread" />
          <IconAbout title="Natural Cheese" />
          <IconAbout title="Vegetable and Non-Vegetable" />
        </div>
        <Button title="Read more" />
      </div>
    </section>
  );
}
