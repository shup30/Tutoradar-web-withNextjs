import React, { Component } from "react";
import { singlePost, remove, like, unlike } from "./apiPost";
import Link from "next/link";
import { isAuthenticated } from "../auth";
import DefaultPost from "../../public/images/cou3.jpg";
import Router, { withRouter } from "next/router";

class SinglePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: "",
      redirectToHome: false,
      redirectToBack: false,
      redirectToSignin: false,
      like: false,
      likes: 0,
      comments: []
    };
  }

  // static async getInitialProps(ctx) {
  //   const res = await fetch('https://api.github.com/repos/zeit/next.js')
  //   const json = await res.json()
  //   return { stars: json.stargazers_count }
  // }

  // static async getInitialProps(context) {
  //   const { postid } = context.router.query;
  //   console.log(postid);
  //   return { postid };
  // }

  checkLike = likes => {
    const userId = isAuthenticated() && isAuthenticated().user._id;
    let match = likes.indexOf(userId) !== -1;
    return match;
  };

  componentDidMount() {
    const postId = this.props.PostId;
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
  }

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
    const postId = this.props.quota;
    const token = isAuthenticated().token;
    remove(postId, token).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        this.setState({ redirectToBack: true });
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
          className="img-thumbnail"
          style={{
            height: "300px",
            width: "100%",
            objectFit: "cover"
          }}
        />
        &nbsp;
        <span id="like-button" onClick={this.likeToggle}>
          <i className="far fa-thumbs-up text-success bg-dark" />
          {likes} Like
        </span>
        &nbsp;
        <span className="button is-primary" onClick={() => Router.back()}>
          <strong> Back to posts </strong>
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
        <div>
          <h4 className="raw"> Description: </h4>
          <p className="column">{post.body}</p>
        </div>
        <br />
      </div>
    );
  };

  render() {
    console.log(
      "Render Quota:",
      this.props.postId,
      this.props.router.query.postid,
      this.props.quota
    );
    console.log("initial Props Quota:", this.props);
    const { postId } = this.props;
    const {
      post,
      redirectToHome,
      redirectToSignin,
      redirectToBack
    } = this.state;

    if (redirectToHome) {
      Router.push("/");
    } else if (redirectToSignin) {
      Router.push("/signin");
    } else if (redirectToBack) {
      Router.back();
    }
    return (
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
    );
  }
}

export default withRouter(SinglePost);

// static async getInitialProps({ query }) {
//   const quota = query.postid;
//   console.log("Quota:", query.postid);
//   return { quota };
// }

//   static async getInitialProps() {
//     const quota = props.postId;
//     console.log("Quota:", this.props.quota);
//     return { quota };
//   }

// componentWillReceiveProps(nextProps) {
//   if(!_isEqual(nextProps, this.state)){
//       this.setState(nextProps);
//   }
// }

// static getDerivedStateFromProps(props, state) {
//   if (props.postId != state.ispost) {
//     return {
//       ispost: props.postId
//     };
//   }
//   return null;
// }

//   callpostapi = () => {
//     const postId = this.props.postId;
//     console.log("poStId:", postId);
//     singlePost(postId).then(data => {
//       if (data.error) {
//         console.log(data.error);
//       } else {
//         this.setState({
//           post: data,
//           likes: data.likes.length,
//           like: this.checkLike(data.likes)
//         });
//       }
//     });
//   };

//   static getDerivedStateFromProps(props, state) {
//     return { idpost: props.postId };
//   }
