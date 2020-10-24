import React, { Component } from "react";
import "./login.css";
import { Link, Redirect } from "react-router-dom";
import teacherDetails from "../../teacherDetails";
import studentDetails from "../../studentDetails";
class Login extends Component {
  constructor(props) {
    super(props);

    let loggedIn = false;

    this.state = {
      teacherDetails: teacherDetails,
      studentDetails: studentDetails,
      loggedIn,
      password: "",
      email: "",
      profession: ""
    };
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.profession === "teacher") {
      this.state.teacherDetails.map(item => {
        if (
          this.state.password === item.password &&
          this.state.email === item.email
        ) {
          this.setState({
            loggedIn: true
          });
        } else {
          alert("Invalid Id or Password");
        }
      });
    } else {
      this.state.studentDetails.map(item => {
        if (
          this.state.password === item.password &&
          this.state.email === item.email
        ) {
          this.setState({
            loggedIn: true
          });
        } else {
          alert("Invalid Id or Password");
        }
      });
    }
  };

  render() {
    if (this.state.loggedIn) {
      return (
        <Redirect
          to={{
            pathname: "/success",
            state: { email: this.state.email }
          }}
        />
      );
    }
    return (
      <React.Fragment>
        <div className="login">
          <form className="login-form" onSubmit={this.handleSubmit}>
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
              <option value="" selected disabled hidden>
                Choose here
              </option>
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

            <button type="submit">Login</button>
          </form>

          <br />
          <Link to="/register" className="text">
            <h2>Not registered yet?</h2>
          </Link>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
