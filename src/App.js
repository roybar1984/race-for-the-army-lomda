import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OpeningPage from "./pages/openingPage/OpeningPage";
import IntroPage from "./pages/introPage/IntroPage";
import GamePage from "./pages/gamePage/GamePage";
import Data from "./data/text.json";
import { AnimatePresence } from "framer-motion";

function App() {
  // const location = useLocation();
  const [textIndex, setTextIndex] = useState(1);
  const [isHidden, setIsHidden] = useState("hidden");
  const [isPreMissionPages, setIsPreMissionPages] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    setIsHidden("hidden");
    setTextIndex(1);
    setIsPreMissionPages(false);
    setIsStarted(false);
    return () => {
      setIsPreMissionPages(false);
      setIsStarted(true);
    };
  }, []);

  // const location = useLocation();
  return (
    <div
      className={`App ${isStarted && "before-mission-background"} ${
        isPreMissionPages && "mission1-background"
      }`}
      // className="App"
    >
      <Router>
        <AnimatePresence exitBeforeEnter initial={false}>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <OpeningPage
                  Data={Data}
                  isPreMissionPages={isPreMissionPages}
                  setIsPreMissionPages={setIsPreMissionPages}
                  isStarted={setIsStarted}
                  setIsStarted={setIsStarted}
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
                  isStarted={isStarted}
                  setIsStarted={setIsStarted}
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
        </AnimatePresence>
      </Router>
    </div>
  );
}

export default App;
