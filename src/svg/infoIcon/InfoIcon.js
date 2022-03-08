import React from "react";
import "./InfoIcon.css";

function InfoIcon(props) {
  return (
    <div>
      <svg
        onClick={() => props.setIsInfoShowed(true)}
        className="info-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 135 135"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <circle className="info-background" cx="67.5" cy="67.5" r="67.5" />
            <circle className="info-white " cx="67.5" cy="26.5" r="12.5" />
            <line
              className="info-sign"
              x1="67.5"
              y1="59.5"
              x2="67.5"
              y2="109.5"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default InfoIcon;
