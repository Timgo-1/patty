import React from "react";
import Button from "../../Button/Button";

export default function Card({ image }) {
  return (
    <div className="item-card swiper-slide">
      <img src={image} alt="card" />
      <p className="name">Cheeseburger</p>
      <p className="price">€35</p>
      <Button title="Order" />
    </div>
  );
}
