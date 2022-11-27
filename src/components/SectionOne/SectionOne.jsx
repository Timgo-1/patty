import React from "react";
import Button from "../Button/Button";
import "./SectionOne.css";

export default function SectionOne() {
  return (
    <section className="section">
      <div className="hamberger-image">
        <img src="images/product-1.png" alt="hamberger" />
      </div>
      <div className="section-one-bio">
        <h1>Love at First Bite.</h1>
        <p>
          Food is the ingredient that binds us together.
          Food is music to the body. Music is food to the heart.
          To live a full life, you have to fill your stomach first, thus
          add "PATTY" to your bucket list. I promise you won’t regret it.
        </p>
        <Button title="Show more" />
      </div>
    </section>
  );
}
