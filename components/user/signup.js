import React, { Component } from "react";
import { signup } from "../auth";
import Link from "next/link";

export default class Signup extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      error: "",
      open: false
    };
  }

  handleChange = name => event => {
    this.setState({ error: "" });
    this.setState({ [name]: event.target.value });
  };

  clickSubmit = event => {
    event.preventDefault();
    const { name, email, password } = this.state;
    const user = {
      name,
      email,
      password
    };
    signup(user).then(data => {
      if (data.error) this.setState({ error: data.error });
      else
        this.setState({
          error: "",
          name: "",
          email: "",
          password: "",
          open: true
        });
    });
  };

  signupForm = (name, email, password) => (
    <form id="signupform">
      <h2 className="title">SIGN UP</h2>
      <hr />
      <div className="field">
        <label className="label">Name</label>
        <input
          onChange={this.handleChange("name")}
          type="text"
          className="input"
          value={name}
        ></input>
      </div>
      <div className="field">
        <label className="label">Email</label>
        <input
          onChange={this.handleChange("email")}
          type="email"
          className="input"
          value={email}
        ></input>
      </div>
      <div className="field">
        <label className="label">Password</label>
        <input
          onChange={this.handleChange("password")}
          type="password"
          className="input"
          value={password}
        ></input>
      </div>
      <br />
      <div className="field">
        <button onClick={this.clickSubmit} className="button is-primary">
          Submit
        </button>
      </div>
    </form>
  );

  render() {
    const { name, email, password, error, open } = this.state;
    return (
      <div className="section">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-half">
              <div className="spacer">
                <br></br>
              </div>
              <div
                className="notification is-danger"
                style={{ display: error ? "" : "none" }}
              >
                {error}
              </div>
              <div
                className="notification is-info"
                style={{ display: open ? "" : "none" }}
              >
                New Account is Successfully Created. Please{" "}
                <Link href="/signin">
                  <a>Sign in</a>
                </Link>
              </div>
              {this.signupForm(name, email, password)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
