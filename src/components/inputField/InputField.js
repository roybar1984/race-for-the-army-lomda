import React from "react";
import "./InputField.css";

function InputField(props) {
  return (
    <>
      <input
        // className={`letter-input letter0 ${
        //   isCorrect ? "correct" : "wrong"
        // }`}
        className="letter-input"
        maxLength={1}
        // value={ans0}
        id={0}
        // onChange={handleChange0}
        // onChange={() => handleChange(0)}
      />
    </>
  );
}

export default InputField;
