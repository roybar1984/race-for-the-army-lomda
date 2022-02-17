import React, { useState, useEffect, useRef } from "react";
import "./GamePage.css";
import { Markup } from "interweave";

function GamePage(props) {
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
        <div className="letters-row low-row-letters">
          <input
            className="letter-input letter3"
            // value={value}
            // onChange={handelChange}
          />
          <input
            className="letter-input letter4"
            // value={value}
            // onChange={handelChange}
          />
          <input
            className="letter-input letter5"
            // value={value}
            // onChange={handelChange}
          />
          <input
            className="letter-input letter6"
            // value={value}
            // onChange={handelChange}
          />
          <input
            className="letter-input letter7"
            // value={value}
            // onChange={handelChange}
          />
          <input
            className="letter-input letter8"
            // value={value}
            // onChange={handelChange}
          />
        </div>
      </div>
    </div>
  );
}

export default GamePage;
