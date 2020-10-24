import React, { Component } from "react";
import "./landingPage.css";
class LandingPage extends Component {
  state = {};
  render() {
    return (
      <div className="landing-page">
        <h1>{"Welcome user " + this.props.location.state.email}</h1>
      </div>
    );
  }
}

export default LandingPage;
