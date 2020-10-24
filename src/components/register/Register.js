import React, { Component } from "react";
import "./register.css";
import { Link } from "react-router-dom";

class Register extends Component {
  state = {
    password: "",
    email: "",
    profession: ""
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    alert("Registered successfully");
  };
  render() {
    return (
      <React.Fragment>
        <div className="register">
          <form className="register-form" onSubmit={this.handleSubmit}>
            <label className="label" for="email">
              Email-Id:
            </label>

            <input
              name="email"
              type="email"
              placeholder="Enter Email"
              id="email"
              required
              value={this.state.email}
              onChange={this.handleChange}
            />

            <br />

            <label className="label" for="profession">
              Profession:
            </label>
            <select
              name="profession"
              id="profession"
              onChange={this.handleChange}
            >
              <option value="teacher">Teacher</option>
              <option value="student">Student</option>
            </select>

            <br />

            <label className="label" for="password">
              Password:
            </label>
            <input
              name="password"
              type="password"
              placeholder="Enter Password"
              id="password"
              required
              value={this.state.password}
              onChange={this.handleChange}
            />
            <br />

            <button type="submit">Register</button>
          </form>
          <br />
          <Link to="/" className="text">
            <h2>Already registered?</h2>
          </Link>
          <br />
        </div>
      </React.Fragment>
    );
  }
}

export default Register;
