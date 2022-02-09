import React, { useEffect, useRef } from "react";
import "./IntroPage.css";
import { gsap } from "gsap";
import SpeechBubble from "../../components/speechBubble/SpeechBubble";
import { Markup } from "interweave";

function IntroPage(props) {
  return (
    <div className="bubble-container">
      <SpeechBubble text={props.Data[1].bubbleText1} />
      <SpeechBubble text={props.Data[1].bubbleText2} />
    </div>
  );
}

export default IntroPage;
