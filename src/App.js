import "./App.css";
import React, { useState, useEffect } from "react";
// import { gsap } from "gsap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OpeningPage from "./containers/openingPage/OpeningPage";
import IntroPage from "./containers/introPage/IntroPage";
import GamePage from "./containers/gamePage/GamePage";
import Data from "./data/text.json";

function App() {
  const [textIndex, setTextIndex] = useState(1);
  const [isHidden, setIsHidden] = useState("hidden");

  useEffect(() => {
    setIsHidden("hidden");
  }, []);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<OpeningPage Data={Data} />}></Route>
          <Route
            exact
            path="/intro"
            element={
              <IntroPage
                Data={Data}
                textIndex={textIndex}
                setTextIndex={setTextIndex}
                isHidden={isHidden}
                setIsHidden={setIsHidden}
                wait={800}
              />
            }
          ></Route>

          <Route
            exact
            path="/game"
            element={
              <GamePage
                Data={Data}
                title={Data[5].title}
                text={Data[5].text}
                finishText={Data[5].finishText}
              />
            }
          >
            {/* <IntroPage Data={Data} /> */}
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
