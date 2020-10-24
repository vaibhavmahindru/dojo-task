import React, { Component } from "react";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./components/landingPage/LandingPage";
class First extends Component {
  state = {};
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/success" exact component={LandingPage} />
        </Switch>
        <Switch>
          <div className="App">
            <div className="card">
              <div className="content">
                <Route path="/" exact component={Login} />
                <Route path="/register" exact component={Register} />
              </div>
            </div>
          </div>
        </Switch>
      </Router>
    );
  }
}

export default First;
