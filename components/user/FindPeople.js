import React, { Component } from "react";
import { findPeople, follow } from "./apiUser";
import DefaultAvatar from "../images/Avatar.png";
import Link from "next/link";
import { isAuthenticated } from "../auth";

export default class FindPeople extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      error: "",
      open: false
    };
  }

  componentDidMount() {
    const userId = isAuthenticated().user._id;
    const token = isAuthenticated().token;

    findPeople(userId, token).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        this.setState({ users: data });
      }
    });
  }

  clickFollow = (user, i) => {
    const userId = isAuthenticated().user._id;
    const token = isAuthenticated().token;

    follow(userId, token, user._id).then(data => {
      if (data.error) {
        this.setState({ error: data.error });
      } else {
        let toFollow = this.state.users;
        toFollow.splice(i, 1);
        this.setState({
          users: toFollow,
          open: true,
          followMessage: `Following ${user.name}`
        });
      }
    });
  };

  renderUsers = users => (
    <div className="columns">
      {users.map((user, i) => (
        <div className="card" key={i}>
          <img
            style={{ height: "200px", width: "auto" }}
            className="img-thumbnail"
            src={`${process.env.REACT_APP_API_URL}/user/photo/${user._id}`}
            onError={i => (i.target.src = `${DefaultAvatar}`)}
            alt={user.name}
          />
          <div className="card-body">
            <h5 className="card-title">{user.name}</h5>
            <p className="card-text">{user.email}</p>
            <Link
              href={`/user/${user._id}`}
              className="button is-raised is-primary"
            >
             <a> View Profile </a>
            </Link>

            <button
              onClick={() => this.clickFollow(user, i)}
              className="button is-raised is-info"
            >
              Follow
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  render() {
    const { users, open, followMessage } = this.state;
    return (
      <div className="container">
        <h2 className="title">Find People</h2>

        {open && <div className="notification is-success">{followMessage}</div>}

        {this.renderUsers(users)}
      </div>
    );
  }
}
