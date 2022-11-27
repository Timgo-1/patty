import React from "react";
import Button from "../Button/Button";
import TitleSection from "../TitleSection/TitleSection";
import Input from "./Input/Input";
import "./Order.css";

export default function Order() {
  return (
    <section className="order" id="order">
      <TitleSection title="Order" />
      <div className="bottom-order">
        <div className="order-img">
          <img src="images/order-img.png" alt="order" />
        </div>
        <div className="input-order">
          <div className="inputs-wrap-box">
            <Input type="text" text="Name" />
            <Input type="email" text="Email" />
            <Input type="number" text="Mobile Number" />
            <Input type="text" text="Food Name" />
          </div>
          <textarea cols="30" rows="10" placeholder="Address"></textarea>
        </div>
      </div>
      <Button title="Order" />
    </section>
  );
}
