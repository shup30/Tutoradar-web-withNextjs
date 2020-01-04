import React, { Component } from "react";
import {
  singlePost,
  remove,
  like,
  unlike
} from "../../components/post/apiPost";
import Link from "next/link";
import { isAuthenticated } from "../../components/auth";
import Comment from "../../components/post/Comment";
import Layout from "../../components/layout";
import DefaultPost from "../../public/images/courses.png";
import Router, { withRouter } from "next/router";
import fetch from "isomorphic-unfetch";

class SinglePost extends Component {
  state = {
    post: "",
    redirectToHome: false,
    redirectToSignin: false,
    like: false,
    likes: 0,
    comments: []
  };

  static async getInitialProps({ query }) {
    const quota = query.postid;
    console.log("Quota:", query.postid);
    return { quota };
  }

  checkLike = likes => {
    const userId = isAuthenticated() && isAuthenticated().user._id;
    let match = likes.indexOf(userId) !== -1;
    return match;
  };

  componentDidMount = () => {
    const postId = this.props.quota;
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
    const postId = this.props.match.params.postId;
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

    const { like, likes, comments } = this.state;

    return (
      <div className="column">
        <img
          src={`${process.env.REACT_APP_API_URL}/post/photo/${post._id}`}
          alt={post.title}
          onError={i => (i.target.src = `${DefaultPost}`)}
          className="img-thunbnail"
          style={{
            height: "300px",
            width: "100%",
            objectFit: "cover"
          }}
        />

        <button onClick={this.likeToggle}>
          <i className="far fa-thumbs-up text-success bg-dark" />
          {likes} Like
        </button> &nbsp;
        <span className="button is-primary">
          <Link href={`/`}>
            <strong> Back to posts </strong>
          </Link>
        </span>
        &nbsp;
        {isAuthenticated().user &&
          isAuthenticated().user._id === post.postedBy._id && (
            <>
              <span className="button is-warning">
                <Link href={`/post/edit/${post._id}`}>
                  <strong> Update Post </strong>
                </Link>
              </span>
              &nbsp;
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
                <span className="button is-warning">
                  <Link href={`/post/edit/${post._id}`}>
                    <a> Update Post </a>
                  </Link>
                </span>
                &nbsp;
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
        <p className="column">{post.body}</p>
        <br />
      </div>
    );
  };

  render() {
    console.log("REnder Quota:", this.props.quota);
    const { post, redirectToHome, redirectToSignin } = this.state;

    if (redirectToHome) {
      Router.push("/");
    } else if (redirectToSignin) {
      Router.push("/signin");
    }

    return (
      <Layout>
        <section className="section">
          <div className="container">
            <h2 className="title">{post.title}</h2>

            {!post ? (
              <div className="hero">
                <h2>Loading...</h2>
              </div>
            ) : (
              this.renderPost(post)
            )}
          </div>
        </section>
      </Layout>
    );
  }
}

export default withRouter(SinglePost);
