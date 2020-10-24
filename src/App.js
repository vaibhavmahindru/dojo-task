import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LandingPage from "./components/landingPage/LandingPage";
import First from "./First";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={First} />
        <Route path="/success" exact component={LandingPage} />
      </Switch>
    </Router>
  );
}

export default App;
