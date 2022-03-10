import React from "react";
import "./CloseBtn.css";

function CloseBtn(props) {
  return (
    <div>
      <svg
        className="close-hint-btn"
        onClick={props.handleShowHint}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 135 135"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <circle className="close-btn-fill" cx="67.5" cy="67.5" r="67.5" />
            <line
              className="close-btn-stroke"
              x1="37.9"
              y1="41.92"
              x2="97.1"
              y2="93.08"
            />
            <line
              className="close-btn-stroke"
              x1="97.1"
              y1="41.92"
              x2="37.9"
              y2="93.08"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default CloseBtn;
