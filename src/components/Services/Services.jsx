import React from "react";
import TitleSection from "../TitleSection/TitleSection";
import Box from "./Box/Box";
import "./Services.css";

export default function Services() {
  return (
    <article className="works">
      <TitleSection title="Trust Us" />
      <div className="works-Box">
        <Box icon="fas fa-hamburger" text="Great Experience" />
        <Box icon="fas fa-shipping-fast" text="Free Delivery" />
        <Box icon="fas fa-headset" text="24 Hour Support" />
      </div>
    </article>
  );
}
