import React from "react";

export default function Box({ icon, text }) {
  return (
    <div className="box">
      <i className={icon}></i>
      <h3>{text}</h3>
      <p>
        Patty is all about people. Food is maybe the only universal thing 
        that really has the power to bring everyone together. No matter what 
        culture, everywhere around the world, people eat together.
      </p>
    </div>
  );
}
