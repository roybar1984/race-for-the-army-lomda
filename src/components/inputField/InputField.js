import React, { useState } from "react";
import "./InputField.css";

function InputField(props) {
  // const numOfFields = 9;
  const [isCorrect, setIsCorrect] = useState();
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <input
        className={`letter-input  ${isCorrect && "correct"} ${
          isClicked && !isCorrect && "wrong"
        } ${!isClicked && isCorrect === "" && "letter-input"}`}
        maxLength={1}
        onClick={() => {
          props.handleShowQuestion(props.id);
          props.setIsInfoShowed(false);
        }}
        onChange={(event) => {
          // const { maxLength, value, name } = event.target;
          // const [fieldName, fieldIndex] = name.split("-");

          let answer = event.target.value;
          setIsClicked(true);
          if (answer === "") {
            setIsClicked(false);
          }
          props.setanswer(answer);

          if (answer === props.arrLetters[props.id].answer) {
            setIsCorrect(true);
            console.log("correct");
            // if (parseInt(fieldIndex, 10) < numOfFields) {
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
