import React from "react";
import "./IntroPage.css";
// import { gsap } from "gsap";
import SpeechBubble from "../../components/speechBubble/SpeechBubble";
// import { Markup } from "interweave";

function IntroPage(props) {
  return (
    <div className="bubble-container">
      <SpeechBubble
        text={props.Data[1].bubbleText1}
        title={props.Data[1].bubbleTitle}
      />
      <SpeechBubble text={props.Data[1].bubbleText2} />
      <div className="next-btn"></div>
      {/* <Button text={props.Data[1].btnText} /> */}
    </div>
  );
}

export default IntroPage;
