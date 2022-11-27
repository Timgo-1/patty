import React from "react";

export default function Nav(props) {
  return (
    <ul className={`nav ${(props.isShow) && 'nav-show'}`}>
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#product">Products</a>
      </li>
      <li>
        <a href="#order">Order</a>
      </li>
      <li>
        <a href="#about">About Us</a>
      </li>
    </ul>
  );
}
