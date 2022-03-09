import React, { useEffect, useRef } from "react";
import "./OpeningPage.css";
import { gsap } from "gsap";
// import Button from "../../components/Button/Button";
// import { Markup } from "interweave";
import { useNavigate } from "react-router-dom";
import AnimatedPage from "../../components/AnimatedPage";

function OpeningPage(props) {
  const navigate = useNavigate();

  const titlesContainerRef = useRef(null);
  const title1 = useRef(null);
  const title2 = useRef(null);
  const openingBtn = useRef(null);

  useEffect(() => {
    props.setIsPreMissionPages(false);
    props.setIsStarted(false);
  }, []);

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
          duration: 1.7,
        },
        "-=0.5"
      )
      .from(
        titlesContainerRef.current,
        {
          y: 70,
          ease: "sine",
          duration: 1.5,
        },
        ">"
      )
      .from(
        openingBtn.current,
        {
          opacity: 0,
          ease: "sine",
          duration: 2,
        },
        "+=0.5"
      );
  }, []);

  function handleStartLomda(event) {
    // navigate('/home');
    props.setIsStarted(true);
    setTimeout(navigate("./intro"), 1000);
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
        {/* <Link to={"/intro"}> */}
        <button
          onClick={handleStartLomda}
          ref={openingBtn}
          className="btns start-lomda-btn"
        >
          בואו נתחיל
        </button>
        {/* </Link> */}
        {/* <Button ref={openingBtn} /> */}
      </>
    </AnimatedPage>
  );
}

export default OpeningPage;
