import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./IntroPage.css";
// import { gsap } from "gsap";
import SpeechBubble from "../../components/speechBubble/SpeechBubble";
import Character from "../../components/character/Character";
import { Markup } from "interweave";
import AnimatedPage from "../../components/AnimatedPage";
import { motion } from "framer-motion";

function IntroPage(props) {
  const btnAnimations = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const navigate = useNavigate();

  useEffect(() => {
    props.setIsHidden("hidden");
    props.setTextIndex(1);
    props.setIsPreMissionPages(false);
    props.setIsStarted(true);

    setTimeout(function () {
      props.setIsHidden((prevState) => {
        prevState = "";
      });
    }, props.wait);

    return () => {
      props.setIsPreMissionPages(false);
      props.setIsStarted(true);
    };
  }, []);

  const handleClickNext = (event) => {
    //if the btn is vissible move to the rellevant page
    if (event.target.style.opacity > 0.3) {
      //move to game if clicked to start on the last index
      if (props.textIndex === 4) {
        navigate("/game", { replace: true });
      }

      //if on the first pre-mission page
      if (props.textIndex === 2) {
        props.setIsPreMissionPages(true);
        props.setIsHidden("hidden");

        setTimeout(function () {
          props.setIsHidden((prevState) => {
            prevState = "";
          });
        }, props.wait);
      }

      //increment the index if is not the last one
      if (props.textIndex < 4) {
        props.setTextIndex(props.textIndex + 1);
      }
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
        {/* {!props.isPreMissionPages && (
            <h1 className="mission-title">ברוכים הבאים למירוץ לצה״לֹ</h1>
          )} */}
        <SpeechBubble
          delay={1}
          duration={3}
          animationY={220}
          textIndex={props.textIndex}
          text={props.Data[props.textIndex].bubbleText1}
          title={props.Data[props.textIndex].bubbleTitle}
          className={`top-bubble 
          ${props.textIndex !== 2 && "top-speech-bubble "}
          ${props.isPreMissionPages && "pre-mission-bubbles "}`}
        />

        {props.Data[props.textIndex].bubbleText2 && (
          <SpeechBubble
            delay={5}
            duration={2}
            animationY={80}
            textIndex={props.textIndex}
            text={props.Data[props.textIndex].bubbleText2}
            className={`bottom-bubble ${
              props.isPreMissionPages && "pre-mission-bubbles "
            }`}
          />
        )}
        {!props.Data[props.textIndex].btnText ? (
          <motion.div
            variants={btnAnimations}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 2, delay: 9 }}
            className="next-btn"
            onClick={handleClickNext}
          >
            {" "}
          </motion.div>
        ) : (
          props.Data[props.textIndex].btnText && (
            <motion.button
              onClick={handleClickNext}
              // ref={openingBtn}
              className={`btns start-lomda-btn 
              ${props.isPreMissionPages && "start-mission-btn"} ${
                props.textIndex === 2 && "start-first-point-btn"
              }`}
              variants={btnAnimations}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 2, delay: 6.5 }}
            >
              {props.Data[props.textIndex].btnText}
            </motion.button>
          )
        )}
        {props.isPreMissionPages && props.Data[props.textIndex].btnText2 && (
          <motion.div
            variants={btnAnimations}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 2, delay: 6.5 }}
            className="back-to-explenation-btn"
            onClick={handleClickPrevText}
          >
            {" "}
            {props.Data[props.textIndex].btnText2}
          </motion.div>
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
