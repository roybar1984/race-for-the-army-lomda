import "./App.css";
import React from "react";
import { gsap } from "gsap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import OpeningPage from "./containers/openingPage/OpeningPage";
import IntroPage from "./containers/introPage/IntroPage";
import Data from "./data/text.json";

function App() {
  return (
    <div className="App">
      <OpeningPage Data={Data} />
      {/* <Router>
        <Switch>
          <Route exact path="/">
            <OpeningPage Data={Data} />
          </Route>
          <Route exact path="/intro">
            <IntroPage Data={Data} />
          </Route>
        </Switch>
      </Router> */}
    </div>
  );
}

export default App;
