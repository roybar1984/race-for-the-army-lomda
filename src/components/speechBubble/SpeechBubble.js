import React from "react";
import "./SpeechBubble.css";
// import { gsap } from "gsap";
import { Markup } from "interweave";

function SpeechBubble(props) {
  return (
    <div className={`speech-bubble ${props.className}`}>
      <p className="bubble-title">
        <Markup content={props.title} />
      </p>
      <p className="bubble-text">
        <Markup content={props.text} />
      </p>
    </div>
  );
}

export default SpeechBubble;
