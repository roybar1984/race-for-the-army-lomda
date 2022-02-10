import "./App.css";
import React from "react";
import { gsap } from "gsap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import OpeningPage from "./containers/openingPage/OpeningPage";
import IntroPage from "./containers/introPage/IntroPage";
import Data from "./data/text.json";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<OpeningPage Data={Data} />}>
            {/* <OpeningPage Data={Data} /> */}
          </Route>
          <Route exact path="/intro" element={<IntroPage Data={Data} />}>
            {/* <IntroPage Data={Data} /> */}
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
