import React, { useState } from "react";
import "./InputField.css";

function InputField(props) {
  // const numOfFields = 9;
  const [isCorrect, setIsCorrect] = useState();
  const [isClicked, setIsClicked] = useState(false);

  const checkIfFinished = () => {
    let isAllTrue = true;
    props.answers.map((input, index) => {
      if (input.correct === false) {
        isAllTrue = false;
        props.setIsFinished(false);
      }
    });
    if (isAllTrue) {
      props.setIsFinished(true);
    }
  };

  const handleInputChange = (event) => {
    // const { maxLength, value, name } = event.target;
    // const [fieldName, fieldIndex] = name.split("-");

    //current answer for the current field
    let answer = event.target.value;
    setIsClicked(true);
    if (answer === "") {
      setIsClicked(false);
    }
    // props.setanswer(answer);

    //a copy of the users answers
    let newArrAnswers = [...props.answers];

    //changing the specific inputField answer
    newArrAnswers[props.id].inputText = answer;
    // props.setanswer(newArrAnswers);

    if (answer === props.arrLetters[props.id].answer) {
      //changing color of the input box
      setIsCorrect(true);

      //updating the users answer array
      newArrAnswers[props.id].correct = true;
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
      //changing color of the input box
      setIsCorrect(false);

      //updating the users answer array
      newArrAnswers[props.id].correct = false;
    }

    //update the external original state
    props.setanswer(newArrAnswers);
    checkIfFinished();

    // props.setIsFinished(true);
    // console.log("finished");
  };

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
        onChange={handleInputChange}
      />
    </>
  );
}

export default InputField;
