import React, { Component } from "react";
import { singlePost, remove, like, unlike } from "./apiPost";
import Link from "next/link";
import { isAuthenticated } from "../auth";
import Comment from "./Comment";
import Router, { withRouter } from "next/router";

class SinglePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: "",
      redirectToHome: false,
      redirectToSignin: false,
      like: false,
      likes: 0,
      comments: [],
      Que: ""
    };
  }

  checkLike = likes => {
    const userId = isAuthenticated() && isAuthenticated().user._id;
    let match = likes.indexOf(userId) !== -1;
    return match;
  };

  componentDidMount = () => {
    const { router } = this.props;
    console.log(router.query.postid);
    const postId = router.query.postid;
    console.log("Query:", postId);
    singlePost(postId).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        this.setState({
          post: data,
          likes: data.likes.length,
          like: this.checkLike(data.likes),
          comments: data.comments
        });
      }
    });
  };

  updateComments = comments => {
    this.setState({ comments });
  };

  likeToggle = () => {
    if (!isAuthenticated()) {
      this.setState({ redirectToSignin: true });
      return false;
    }
    let callApi = this.state.like ? unlike : like;
    const userId = isAuthenticated().user._id;
    const postId = this.state.post._id;
    const token = isAuthenticated().token;

    callApi(userId, token, postId).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        this.setState({
          like: !this.state.like,
          likes: data.likes.length
        });
      }
    });
  };

  deletePost = () => {
    const postId = this.props.Query;
    const token = isAuthenticated().token;
    remove(postId, token).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        this.setState({ redirectToHome: true });
      }
    });
  };

  deleteConfirmed = () => {
    let answer = window.confirm("Are you sure you want to delete your post?");
    if (answer) {
      this.deletePost();
    }
  };

  renderPost = post => {
    console.log(post);
    const posterId = post.postedBy ? `/user/${post.postedBy._id}` : "";
    const posterName = post.postedBy ? post.postedBy.name : " Unknown";

    const { like, likes } = this.state;

    return (
      <div className="column">
        <img
          src={post.thumbnailUrl}
          alt={post.title}
          onError={i => (i.target.src = "/images/Avatar.png")}
          className="img-thunbnail"
          style={{
            height: "300px",
            width: "100%",
            objectFit: "cover"
          }}
        />

        {like ? (
          <button onClick={this.likeToggle}>
            <i className="far fa-thumbs-up text-success bg-dark" />
            {likes} Like
          </button>
        ) : (
          <button onClick={this.likeToggle}>
            <i className="far fa-thumbs-down text-warning bg-dark" />
            {likes} Like
          </button>
        )}

        <p className="column">{post.body}</p>
        <br />
        <p className="font-italic">
          Posted by <Link href={`${posterId}`}>{posterName} </Link>
          on {new Date(post.created).toDateString()}
        </p>
        <div className="column">
          <span className="button is-primary">
            Back to postz
          </span>

          {isAuthenticated().user &&
            isAuthenticated().user._id === post.postedBy._id && (
              <>
                <Link
                  to={`/post/edit/${post._id}`}
                  className="button is-warning"
                >
                  <a>Update Post</a>
                </Link>
                <button
                  onClick={this.deleteConfirmed}
                  className="button is-danger"
                >
                  Delete Post
                </button>
              </>
            )}

          <div>
            {isAuthenticated().user && isAuthenticated().user.role === "admin" && (
              <div class="column">
                <div className="columns">
                  <h5 className="column">Admin</h5>
                  <p>Edit/Delete as an Admin</p>
                  <Link
                    to={`/post/edit/${post._id}`}
                    className="button is-warning"
                  >
                    <a>Update Post</a>
                  </Link>
                  <button
                    onClick={this.deleteConfirmed}
                    className="button is-raised is-danger"
                  >
                    Delete Post
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  render() {
    const { router } = this.props;
    console.log(router.query.postid);
    const { post, redirectToHome, redirectToSignin, comments } = this.state;

    if (redirectToHome) {
      return Router.push('/');
    } else if (redirectToSignin) {
      return Router.push('/signin');
    }

    return (
      <div className="container">
        <h2 className="title">{post.title}</h2>

        {!post ? (
          <div className="hero">
            <h2>Loading...</h2>
          </div>
        ) : (
          this.renderPost(post)
        )}

        <Comment
          postId={post._id}
          comments={comments.reverse()}
          updateComments={this.updateComments}
        />
      </div>
    );
  }
}

export default withRouter(SinglePost);
