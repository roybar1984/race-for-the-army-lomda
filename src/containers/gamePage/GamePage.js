import React, { useState, useEffect, useRef } from "react";
import "./GamePage.css";
import { Markup } from "interweave";

function GamePage(props) {
  return (
    <div className="game-page-container">
      <h1 className="game-title"> {props.title}</h1>
      <div className="text-container">
        <p className="text-paragrapgh">
          <Markup content={props.text} />
        </p>
        <div className="letter-container">
          <div className="letters-row top-row-letters">
            <input
              className="letter-input letter0"
              // value={value}
              // onChange={handelChange}
            />
            <input
              className="letter-input letter1"
              // value={value}
              // onChange={handelChange}
            />
            <input
              className="letter-input letter2"
              // value={value}
              // onChange={handelChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GamePage;
