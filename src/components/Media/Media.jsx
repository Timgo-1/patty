import React from "react";
import TitleSection from "../TitleSection/TitleSection";
import "./Media.css";

export default function Media() {
  return (
    <div className="media">
      <TitleSection title="Follow Us on Social Networks" />
      <div className="social-media">
        <a href="#">
          <span className="fab fa-instagram"></span>
        </a>
        <a href="#">
          <span className="fab fa-telegram-plane"></span>
        </a>
        <a href="#">
          <span className="fab fa-twitter"></span>
        </a>
        <a href="#">
          <span className="fab fa-whatsapp"></span>
        </a>
      </div>
    </div>
  );
}
