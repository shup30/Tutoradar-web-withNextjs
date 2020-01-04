import React, { Component } from "react";
import { follow, unfollow } from "./apiUser";

class FollowProfileButton extends Component {
  followClick = () => {
    this.props.onButtonClick(follow);
  };

  unfollowClick = () => {
    this.props.onButtonClick(unfollow);
  };

  render() {
    return (
      <div className="d-inline-block">
        {!this.props.following ? (
          <button
            onClick={this.followClick}
            className="button is-success is-raised"
          >
            Follow
          </button>
        ) : (
          <button
            onClick={this.unfollowClick}
            className="button is-warning is-raised"
          >
            UnFollow
          </button>
        )}
      </div>
    );
  }
}

export default FollowProfileButton;
