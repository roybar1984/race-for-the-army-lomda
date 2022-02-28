import React, { useEffect, useState } from "react";
import "./InputField.css";

function InputField(props) {
  const [isCorrect, setIsCorrect] = useState("");

  useEffect(() => {
    console.log("changed");
  }, [isCorrect]);
  useEffect(() => {
    console.log(isCorrect);
  }, []);
  return (
    <>
      <input
        className={
          `letter-input letter${props.id} ${isCorrect && "correct"}  `
          // ${!isCorrect && "wrong"}
          // `
          // ${isCorrect ? "correct" :` !isCorrect ? "wrong" : "letter-input"`}
          // `
        }
        maxLength={1}
        onClick={() => {
          props.handleShowQuestion(props.id);
          props.setIsInfoShowed(false);
        }}
        onChange={(event) => {
          let answer = event.target.value;
          props.setanswer(answer);
          console.log(event.target.value);
          console.log(props.arrLetters[props.id].answer);
          if (answer === props.arrLetters[props.id].answer) {
            setIsCorrect(true);
            console.log("correct");
          } else {
            setIsCorrect(false);
            console.log("wrong");
          }
        }}
        // value={ans0}
        // onChange={handleChange0}
        // onChange={() => handleChange(0)}
      />
    </>
  );
}

export default InputField;
