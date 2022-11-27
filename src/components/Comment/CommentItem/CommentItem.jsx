import React from "react";

export default function CommentItem({ image }) {
  return (
    <div className="comment-item">
      <img src={image} alt="" />
      <div className="icon-box">
        <span className="fa fa-star"></span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star-o"></span>
      </div>
      <p>
        Laughter is brightest where food is best, and Patty 
        is definitely, that place.
        {" "}
      </p>
    </div>
  );
}
