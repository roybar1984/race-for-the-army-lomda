import React from "react";
import "./IntroPage.css";
// import { gsap } from "gsap";
import SpeechBubble from "../../components/speechBubble/SpeechBubble";
import Character from "./../../components/character/Character";
// import { Markup } from "interweave";

function IntroPage(props) {
  return (
    <div className="bubble-container">
      <SpeechBubble
        text={props.Data[1].bubbleText1}
        title={props.Data[1].bubbleTitle}
        className={"top-bubble"}
      />
      <SpeechBubble
        text={props.Data[1].bubbleText2}
        className={"bottom-bubble"}
      />
      <div className="next-btn"></div>
      {/* <Button text={props.Data[1].btnText} /> */}
      <Character />
    </div>
  );
}

export default IntroPage;
