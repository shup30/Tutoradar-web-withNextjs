import React, { Component } from "react";
import Router from "next/router";
import { signin, authenticate } from "../auth";

export default class Signin extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      error: "",
      redirectToReferer: false,
      loading: false
    };
  }

  handleChange = name => event => {
    this.setState({ error: "" });
    this.setState({ [name]: event.target.value });
  };

  clickSubmit = event => {
    event.preventDefault();
    this.setState({ loading: true });
    const { email, password } = this.state;
    const user = {
      email,
      password
    };
    signin(user).then(data => {
      if (data.error) {
        this.setState({ error: data.error, loading: false });
      } else {
        //authenticate the user
        authenticate(data, () => {
          this.setState({ redirectToReferer: true });
        });
        //redirect
      }
    });
  };

  signinForm = (email, password) => (
    <form id="signinform">
      <h2 className="title">SIGN IN</h2>
      <hr />
      <div className="field">
        <label className="label">Email</label>
        <input
          onChange={this.handleChange("email")}
          type="email"
          className="input"
          value={email}
        ></input>
      </div>
      <br />
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
        <button
          onClick={this.clickSubmit}
          className="button is-raised is-primary"
        >
          Submit
        </button>
      </div>
    </form>
  );

  render() {
    const { email, password, error, redirectToReferer, loading } = this.state;

    if (redirectToReferer) {
      Router.push("/");
    }

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
              {loading ? (
                <div className="hero-body">
                  <h2>Loading...</h2>
                </div>
              ) : (
                ""
              )}
              {this.signinForm(email, password)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
