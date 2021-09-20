import React from "react";
import "./Hemisphere.css";
import nothernPic from "./image/NorthernHemisphere.jpg";
import southernPic from "./image/SouthernHemisphere.jpg";

const hemisphereConfig = {
  Northern: {
    text: "it is northern hemisphere",
    picture: nothernPic,
  },
  Southern: {
    text: "it is southern hemisphere",
    picture: southernPic,
  },
};
const HemisphereDisplay = ({ latitude }) => {
  const hemisphere = latitude > 0 ? "Northern" : "Southern";
  const { text, picture } = hemisphereConfig[hemisphere];
  return (
    <div>
      <div className={hemisphere}>
        <div className="ui raised text container segment">
          <div className="image">
            <img src={picture} alt={text} />
          </div>
          <div className="ui teal bottom attached label">
            <h1>{text}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HemisphereDisplay;
