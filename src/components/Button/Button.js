import React from "react";
import "./Button.css";
import { AnimatePresence, motion } from "framer-motion";

function Button(props) {
  const btnAnimations = {
    initial: { opacity: 0, visibility: "hidden" },
    animate: { opacity: 1, visibility: "visible" },
    exit: { opacity: 0, visibility: "hidden" },
  };
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        variants={btnAnimations}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 1.5, delay: 5 }}
        className={`next-btn ${props.textIndex === 3 && "next-btn-higher "}`}
        onClick={props.handleClickNext}
      >
        {" "}
      </motion.div>
    </AnimatePresence>
  );
}

export default Button;
