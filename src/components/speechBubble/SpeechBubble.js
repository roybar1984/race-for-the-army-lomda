import React, { useState, useEffect, useRef } from "react";
import "./SpeechBubble.css";
import { Markup } from "interweave";
import { gsap } from "gsap";
// import TypeWriterEffect from "react-typewriter-effect";

function SpeechBubble(props) {
  const { text, animationY, duration, delay, textIndex, title, className } =
    props;
  const bubbleRef = useRef();
  const [currText, setCurrText] = useState(text);

  useEffect(() => {
    setCurrText(text);

    gsap.from(bubbleRef.current, {
      opacity: 0,
      y: animationY,
      duration: duration,
      delay: delay,
      ease: "sine",
    });
  }, [textIndex]);

  // const animations = {
  //   initial: { opacity: 0, y: props.animationY },
  //   animate: { opacity: 1, y: 0 },
  //   exit: { opacity: 0 },
  // };
  return (
    <div ref={bubbleRef} className={`speech-bubble ${className}`}>
      <p className="bubble-title">
        <Markup content={title} />
      </p>

      <div className="bubble-text">
        {/* <Typewriter
          options={{
            autoStart: true,
            delay: 75,
          }}
          typeSpeed={100}
          onInit={(typewriter) => {
            typewriter.typeString(currText).start();
          }}
        /> */}
        {/* {props.textIndex === 2 ? (
          <Typewriter
            options={{
              autoStart: true,
              delay: 40,
            }}
            typeSpeed={100}
            onInit={(typewriter) => {
              typewriter.typeString(props.text).pauseFor(1000).start();
            }}
          />
        ) : (
          <Typewriter
            options={{
              autoStart: true,
              delay: 40,
            }}
            typeSpeed={100}
            onInit={(typewriter) => {
              typewriter.typeString(props.text).pauseFor(9000).start();
            }}
          />
        )} */}

        <Markup content={currText} />
      </div>
    </div>
  );
}

export default SpeechBubble;
