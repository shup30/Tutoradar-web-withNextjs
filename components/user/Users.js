import React, { Component } from "react";
import { list } from "./apiUser";
import DefaultAvatar from "../../images/Avatar.png";
import Link from "next/link";

export default class Users extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    list().then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        this.setState({ users: data });
      }
    });
  }

  renderUsers = users => (
    <div className="columns">
      {users.map((user, i) => (
        <div class="card" style={{ margin: "5px" }} key={i}>
          <img
            className="card-img"
            src={`${process.env.REACT_APP_API_URL}/user/photo/${user._id}`}
            onError={i => (i.target.src = `${DefaultAvatar}`)}
            alt={user.name}
            style={{ width: "100%", height: "15vw", objectFit: "cover" }}
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
          </div>
        </div>
      ))}
    </div>
  );

  render() {
    const { users } = this.state;
    return (
      <div className="container">
        <h2 className="title"> Users </h2>
        {this.renderUsers(users)}
      </div>
    );
  }
}
