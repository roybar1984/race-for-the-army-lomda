import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./IntroPage.css";
// import { gsap } from "gsap";
import SpeechBubble from "../../components/speechBubble/SpeechBubble";
import Character from "../../components/character/Character";
import { Markup } from "interweave";
import AnimatedPage from "../../components/AnimatedPage";

function IntroPage(props) {
  const navigate = useNavigate();

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

  const handleClickNext = (event) => {
    //move to game if clicked to start on the last index
    if (props.textIndex === 4) {
      navigate("/game", { replace: true });
    }

    //if on the first pre-mission page
    if (props.textIndex === 2) {
      props.setIsPreMissionPages(true);
    }

    //increment the index if is not the last one
    if (props.textIndex < 4) {
      props.setTextIndex(props.textIndex + 1);
    }
  };

  const handleClickPrevText = (event) => {
    props.setTextIndex(3);
    navigate("/intro", { replace: true });
  };
  return (
    <AnimatedPage>
      <div className="bubble-container">
        {props.isHidden && <div className="black-div"></div>}
        {props.isPreMissionPages && (
          <h1 className="mission-title">
            <Markup content={props.Data[props.textIndex].title} />
          </h1>
        )}
        <SpeechBubble
          delay={2}
          animationY={220}
          textIndex={props.textIndex}
          text={props.Data[props.textIndex].bubbleText1}
          title={props.Data[props.textIndex].bubbleTitle}
          className={`top-bubble ${
            props.isPreMissionPages && "pre-mission-bubbles "
          }`}
        />

        {props.Data[props.textIndex].bubbleText2 && (
          <SpeechBubble
            delay={7}
            animationY={100}
            textIndex={props.textIndex}
            text={props.Data[props.textIndex].bubbleText2}
            className={`bottom-bubble ${
              props.isPreMissionPages && "pre-mission-bubbles "
            }`}
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
          <div
            className="back-to-explenation-btn"
            onClick={handleClickPrevText}
          >
            {" "}
            {props.Data[props.textIndex].btnText2}
          </div>
        )}

        <Character
          isPreMissionPages={props.isPreMissionPages}
          textIndex={props.textIndex}
        />
      </div>
    </AnimatedPage>
  );
}

export default IntroPage;
