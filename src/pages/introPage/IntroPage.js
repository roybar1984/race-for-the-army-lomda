import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./IntroPage.css";
// import { gsap } from "gsap";
import SpeechBubble from "../../components/speechBubble/SpeechBubble";
import Character from "../../components/character/Character";
import { Markup } from "interweave";
// import { Markup } from "interweave";

function IntroPage(props) {
  // const [isPreMissionPages, setIsPreMissionPages] = useState(false);

  useEffect(() => {
    props.setIsHidden("hidden");
    props.setTextIndex(1);

    props.setIsPreMissionPages(false);
  }, []);

  useEffect(() => {
    setTimeout(function () {
      props.setIsHidden((prevState) => {
        prevState = "";
      });
    }, props.wait);
  }, []);

  // const [textIndex, setTextIndex] = useState(1);
  const navigate = useNavigate();
  // let history = useHistory();
  // console.log(navigate);

  const handleClickNext = (event) => {
    //if clicked to start the game
    if (props.textIndex === 4) {
      navigate("/game", { replace: true });
      // setTimeout(navigate("./game", { replace: true }), 1000);
    }

    //if on the first pre-mission page
    if (props.textIndex === 2) {
      props.setIsPreMissionPages(true);
      // navigate("/game", { replace: true });
      // setTimeout(navigate("./game", { replace: true }), 1000);
    }
    if (props.textIndex < 4) {
      props.setTextIndex(props.textIndex + 1);
    }
  };

  const handleClickPrevText = (event) => {
    props.setTextIndex(3);
    navigate("/intro", { replace: true });
  };
  return (
    <div className="bubble-container">
      {props.isHidden && <div className="black-div"></div>}
      {props.isPreMissionPages && (
        <h1 className="mission-title">
          <Markup content={props.Data[props.textIndex].title} />
        </h1>
      )}
      <SpeechBubble
        text={props.Data[props.textIndex].bubbleText1}
        title={props.Data[props.textIndex].bubbleTitle}
        className={`top-bubble ${
          props.isPreMissionPages && "pre-mission-bubbles "
        }`}
        // className={"top-bubble"}
      />

      {props.Data[props.textIndex].bubbleText2 && (
        <SpeechBubble
          text={props.Data[props.textIndex].bubbleText2}
          className={`bottom-bubble ${
            props.isPreMissionPages && "pre-mission-bubbles "
          }`}
          // className={"bottom-bubble"}
        />
      )}
      {!props.Data[props.textIndex].btnText ? (
        <div className="next-btn" onClick={handleClickNext}></div>
      ) : (
        props.Data[props.textIndex].btnText && (
          <button
            onClick={handleClickNext}
            // ref={openingBtn}
            className={`btns start-lomda-btn ${
              props.isPreMissionPages && "start-mission-btn"
            }`}
          >
            {props.Data[props.textIndex].btnText}
          </button>
        )
      )}
      {props.isPreMissionPages && props.Data[props.textIndex].btnText2 && (
        <div className="back-to-explenation-btn" onClick={handleClickPrevText}>
          {" "}
          {props.Data[props.textIndex].btnText2}
        </div>
      )}

      {/* <div className="next-btn" onClick={handleClickNext}></div> */}
      {/* <Button text={props.Data[1].btnText} /> */}
      <Character
        isPreMissionPages={props.isPreMissionPages}
        textIndex={props.textIndex}
      />
    </div>
  );
}

export default IntroPage;
