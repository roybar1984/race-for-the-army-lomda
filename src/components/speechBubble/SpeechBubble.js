import React, { useState, useEffect } from "react";
import "./SpeechBubble.css";
// import { gsap } from "gsap";
import { Markup } from "interweave";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
// import TypeWriterEffect from "react-typewriter-effect";

function SpeechBubble(props) {
  console.log(props.textIndex);
  const [currText, setCurrText] = useState(props.text);

  useEffect(() => {
    setCurrText(props.text);
  }, [props.textIndex]);

  const animations = {
    initial: { opacity: 0, y: props.animationY },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0 },
  };
  return (
    // <motion.div
    //   variants={animations}
    //   initial="initial"
    //   animate="animate"
    //   exit="exit"
    //   transition={{ duration: 3 }}
    // >
    //   {children}
    // </motion.div>
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 5, delay: props.delay }}
      className={`speech-bubble ${props.className}`}
    >
      <p className="bubble-title">
        <Markup content={props.title} />
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

        <Markup content={props.text} />
      </div>
    </motion.div>
  );
}

export default SpeechBubble;
