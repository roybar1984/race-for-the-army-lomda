import React, { useState, useEffect, useRef } from "react";
import "./GamePage.css";
import { Markup } from "interweave";

function GamePage(props) {
  const arrAnswers = ["ב", "י", "ת", "ג", "ו", "ל", "ו", "מ", "ב"];

  const [ans0, setAns0] = useState("");
  const [ans1, setAns1] = useState("");
  const [ans2, setAns2] = useState("");
  const [ans3, setAns3] = useState("");
  const [ans4, setAns4] = useState("");
  const [ans5, setAns5] = useState("");
  const [ans6, setAns6] = useState("");
  const [ans7, setAns7] = useState("");
  const [ans8, setAns8] = useState("");

  // const [isCorrect, setIsCorrect] = "";

  // const handleChange = (id, event) => {
  //   // setValue(event.target.value);
  //   setAns[id](event.target.value);
  // };

  const handleChange0 = (event) => {
    setAns0(event.target.value);
    if (ans0 === arrAnswers[0]) {
      event.target.addClass = "correct";
    }
  };

  const handleChange1 = (event) => {
    setAns1(event.target.value);
  };

  const handleChange2 = (event) => {
    setAns2(event.target.value);
  };

  return (
    <div className="game-page-container">
      <h1 className="game-title">
        {" "}
        <Markup content={props.title} />
      </h1>
      <div className="text-container">
        <p className="text-paragrapgh">
          <Markup content={props.text} />
        </p>
      </div>
      <div className="letter-container">
        <div className="letters-row top-row-letters">
          <input
            // className={`letter-input letter0 ${
            //   isCorrect ? "correct" : "wrong"
            // }`}
            className="letter-input letter0"
            maxLength={1}
            value={ans0}
            id={0}
            onChange={handleChange0}
            // onChange={() => handleChange(0)}
          />
          <input
            className="letter-input letter1"
            maxLength={1}
            value={ans1}
            id={1}
            onChange={handleChange1}
            // onChange={() => handleChange(1)}
            // onChange={handelChange}
          />
          <input
            className="letter-input letter2"
            maxLength={1}
            value={ans2}
            id={2}
            // onChange={() => handleChange(2)}
            onChange={handleChange2}
            // onChange={handelChange}
          />
        </div>
        <div className="letters-row low-row-letters">
          <input
            className="letter-input letter3"
            maxLength={1}
            // value={ans3}
            id={3}
            // onChange={() => handleChange(3)}
            // onChange={handelChange}
          />
          <input
            className="letter-input letter4"
            maxLength={1}
            // value={ans4}
            id={4}
            // onChange={() => handleChange(4)}
            // onChange={handelChange}
          />
          <input
            className="letter-input letter5"
            maxLength={1}
            // value={ans5}
            id={5}
            // onChange={() => handleChange(5)}
            // onChange={handelChange}
          />
          <input
            className="letter-input letter6"
            maxLength={1}
            // value={ans6}
            // id={6}
            // onChange={() => handleChange(6)}
            // onChange={handelChange}
          />
          <input
            className="letter-input letter7"
            maxLength={1}
            // value={ans7}
            id={7}
            // onChange={() => handleChange(7)}
            // onChange={handelChange}
          />
          <input
            className="letter-input letter8"
            maxLength={1}
            // value={ans8}
            id={8}
            // onChange={() => handleChange(8)}
            // onChange={handelChange}
          />
        </div>
      </div>
    </div>
  );
}

export default GamePage;
