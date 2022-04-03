import React, { useEffect, useRef } from "react";
import "./OpeningPage.css";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";
import AnimatedPage from "../../components/AnimatedPage";

function OpeningPage(props) {
  const navigate = useNavigate();

  const titlesContainerRef = useRef(null);
  const title1 = useRef(null);
  const title2 = useRef(null);
  const openingBtn = useRef(null);

  useEffect(() => {
    const openingAnimationTl = gsap.timeline();
    openingAnimationTl
      .from(title1.current, {
        opacity: 0,
        scale: 0,
        ease: "back",
        duration: 1.5,
      })
      .from(
        title2.current,
        {
          opacity: 0,
          scale: 0,
          ease: "sine",
          duration: 1.5,
        },
        "-=0.3"
      )
      .from(
        titlesContainerRef.current,
        {
          y: 70,
          ease: "sine",
          duration: 1,
        },
        ">"
      )
      .from(
        openingBtn.current,
        {
          opacity: 0,
          ease: "sine",
          duration: 3,
        },
        "+=0.3"
      );
  }, []);

  useEffect(() => {
    props.setIsPreMissionPages(false);
    props.setIsStarted(false);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function handleStartLomda(event) {
    //if the btn is vissible move to the rellevant page
    if (event.target.style.opacity > 0.3) {
      props.setIsStarted(true);
      setTimeout(navigate("./intro"), 1000);
    }
  }

  return (
    <AnimatedPage>
      <>
        <div ref={titlesContainerRef} className="titles-container">
          <h1 ref={title1} className="opening-titles opening-title1">
            מציון לציונות
          </h1>
          <h3 ref={title2} className="opening-titles opening-title2">
            המירוץ לצה״ל
          </h3>
        </div>
        <button
          onClick={handleStartLomda}
          ref={openingBtn}
          className="btns start-lomda-btn"
        >
          בואו נתחיל
        </button>
      </>
    </AnimatedPage>
  );
}

export default OpeningPage;
