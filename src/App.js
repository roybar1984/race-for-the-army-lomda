import "./App.css";
import React, { useState, useEffect } from "react";
// import { gsap } from "gsap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OpeningPage from "./pages/openingPage/OpeningPage";
import IntroPage from "./pages/introPage/IntroPage";
import GamePage from "./pages/gamePage/GamePage";
import Data from "./data/text.json";

function App() {
  const [textIndex, setTextIndex] = useState(1);
  const [isHidden, setIsHidden] = useState("hidden");
  const [isPreMissionPages, setIsPreMissionPages] = useState(false);

  useEffect(() => {
    setIsHidden("hidden");
    setTextIndex(1);
    setIsPreMissionPages(false);
  }, []);
  return (
    <div
      className={`App ${isPreMissionPages && "mission1-background"}`}
      // className="App"
    >
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <OpeningPage
                Data={Data}
                isPreMissionPages={isPreMissionPages}
                setIsPreMissionPages={setIsPreMissionPages}
              />
            }
          ></Route>
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
                isPreMissionPages={isPreMissionPages}
                setIsPreMissionPages={setIsPreMissionPages}
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
                isPreMissionPages={isPreMissionPages}
                setIsPreMissionPages={setIsPreMissionPages}
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
