import React, { Component } from "react";
import { singlePost, remove, like, unlike } from "./apiPost";
import { isAuthenticated } from "../auth";
import { FiThumbsUp } from "react-icons/fi";
import Router from "next/router";

class likeup extends Component {
  constructor() {
    super();
    this.state = {
      post: "",
      like: false,
      likes: 0,
      redirectToHome: false,
      redirectToSignin: false
    };
  }

  checkLike = likes => {
    const userId = isAuthenticated() && isAuthenticated().user._id;
    let match = likes.indexOf(userId) !== -1;
    return match;
  };

  componentDidMount = () => {
    console.log(this.props.post._id);
    const postId = this.props.post._id;
    singlePost(postId).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        this.setState({
          post: data,
          likes: data.likes.length,
          like: this.checkLike(data.likes)
        });
      }
    });
  };

  likeToggle = id => {
    if (!isAuthenticated()) {
      this.setState({ redirectToSignin: true });
      return false;
    }
    let callApi = this.state.like ? unlike : like;
    const userId = isAuthenticated().user._id;
    const postId = id;
    console.log("Liketoggle:", postId);
    const token = isAuthenticated().token;

    callApi(userId, token, postId)
      .then(data => {
        if (data.error) {
          console.log(data.error);
        } else {
          this.setState({
            like: !this.state.like,
            likes: data.likes.length
          });
        }
      })
      .then(window.location.reload());
  };

  render() {
    const { _id, likes } = this.props.post;
    const { like, redirectToSignin } = this.state;
    console.log("DD:", _id, likes);
    if (redirectToSignin) {
      Router.push("/signin");
    } else {
      return (
        <div className="likebox">
          {like ? (
            <span
              style={{ cursor: "pointer" }}
              onClick={() => this.likeToggle(_id)}
            >
              <FiThumbsUp /> &nbsp;
              {likes.length}
            </span>
          ) : (
            <span
              style={{ cursor: "pointer" }}
              onClick={() => this.likeToggle(_id)}
            >
              <FiThumbsUp />
              &nbsp; {likes.length}
            </span>
          )}
        </div>
      );
    }
  }
}

export default likeup;
