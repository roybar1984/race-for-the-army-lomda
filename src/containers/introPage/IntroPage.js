import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./IntroPage.css";
// import { gsap } from "gsap";
import SpeechBubble from "../../components/speechBubble/SpeechBubble";
import Character from "./../../components/character/Character";
// import { Markup } from "interweave";

function IntroPage(props) {
  useEffect(() => {
    props.setIsHidden("hidden");
    props.setTextIndex(1);
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
  console.log(navigate);

  const handleClickNext = (event) => {
    props.setTextIndex(props.textIndex + 1);
  };
  return (
    // {clickNum === props.maxClicksNum && (
    //   <div className="delay-show-btn">
    //     {props.isEventListener ? (
    //       <NextAndBackButtons back={props.back} next={props.next} />
    //     ) : (
    //       <Btn
    //         className="start-btn btns"
    //         page={props.page}
    //         setIsPlusBtnOver={setIsPlusBtnOver}
    //         handleClick={handleClickNext}
    //         buttonText="יאללה נתחיל"
    //       />
    //     )}
    //   </div>
    // )}
    <div className="bubble-container">
      {props.isHidden && <div className="black-div"></div>}
      <SpeechBubble
        text={props.Data[props.textIndex].bubbleText1}
        title={props.Data[props.textIndex].bubbleTitle}
        className={"top-bubble"}
      />

      {props.Data[props.textIndex].bubbleText2 && (
        <SpeechBubble
          text={props.Data[props.textIndex].bubbleText2}
          className={"bottom-bubble"}
        />
      )}
      {props.textIndex === 1 ? (
        <div className="next-btn" onClick={handleClickNext}></div>
      ) : (
        <button
          onClick={handleClickNext}
          // ref={openingBtn}
          className="btns start-lomda-btn"
        >
          לתחילת המירוץ
        </button>
      )}

      {/* <div className="next-btn" onClick={handleClickNext}></div> */}
      {/* <Button text={props.Data[1].btnText} /> */}
      <Character />
    </div>
  );
}

export default IntroPage;
