import React, { useEffect, useState } from "react";
import "./InputField.css";

function InputField(props) {
  // const numOfFields = 9;
  const [isCorrect, setIsCorrect] = useState("");

  useEffect(() => {
    console.log(isCorrect);
  }, []);
  return (
    <>
      <input
        className={
          `letter-input letter${props.id} ${isCorrect && "correct"} ${
            !isCorrect && "wrong"
          } ${isCorrect === "" && "letter-input"}`
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
          // const { maxLength, value, name } = event.target;
          // const [fieldName, fieldIndex] = name.split("-");

          let answer = event.target.value;
          props.setanswer(answer);
          if (answer === props.arrLetters[props.id].answer) {
            setIsCorrect(true);
            console.log("correct");
            // if (parseInt(fieldIndex, 10) < numOfFields) {
            //   console.log(fieldIndex);
            //   // Get the next input field
            //   const nextSibling = document.querySelector(
            //     `input[name=ssn-${parseInt(fieldIndex, 10) + 1}]`
            //   );

            //   // If found, focus the next field
            //   if (nextSibling !== null) {
            //     nextSibling.focus();
            //   }
            // }
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
