import React from "react";

const SingleComponent = ({ name, image, date, text }) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img src={image} alt="profilepicture" />
      </a>
      <div className="content">
        <a href="/" className="author">
          {name}
        </a>
        <div className="metadata">
          <span className="date">{date}</span>
        </div>
        <div className="text">{text}</div>
      </div>
    </div>
  );
};

export default SingleComponent;
