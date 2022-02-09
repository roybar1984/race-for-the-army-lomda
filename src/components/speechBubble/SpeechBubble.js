import React, { useEffect, useRef } from "react";
import "./SpeechBubble.css";
import { gsap } from "gsap";
import { Markup } from "interweave";

function SpeechBubble(props) {
  return (
    <p className="speech-bubble">
      <Markup content={props.text} />
    </p>
  );
}

export default SpeechBubble;
