import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="btn-box">
        <a href="#product">
          <button className="btn">Products</button>
        </a>
        <a href="#about">
          <button className="btn">Services</button>
        </a>
        <a href="#order">
          <button className="btn">Order</button>
        </a>
        <a href="#comment">
          <button className="btn">Comments</button>
        </a>
        <a href="#galery">
          <button className="btn">Gallery</button>
        </a>
      </div>
      <p className="author">&copy; 2022 Patty, All rights reserved.</p>
    </footer>
  );
}
