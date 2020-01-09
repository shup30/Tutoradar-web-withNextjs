import React, { Component } from "react";
import { isAuthenticated } from "../../components/auth";
import Link from "next/link";
import Router, { withRouter } from "next/router";
import { read } from "../../components/user/apiUser";
import DefaultProfile from "../../public/images/courses.png";
import DeleteUser from "../../components/user/DeleteUser";
import FollowProfileButton from "../../components/user/FollowProfileButton";
import ProfileTabs from "../../components/user/ProfileTabs";
import { listByUser } from "../../components/post/apiPost";
import Layout from "../../components/layout";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      redirectToSignin: false,
      error: "",
      posts: []
    };
  }

  static async getInitialProps({ query }) {
    const queryparam = query.userid;
    console.log("Userquery:", query.userid);
    return { queryparam };
  }

  // check follow

  init = userId => {
    console.log("userId:", userId);
    const token = isAuthenticated().token;
    console.log("token:", token);
    read(userId, token).then(data => {
      if (data.error) {
        this.setState({ redirectToSignin: true });
      } else {
        this.setState({ user: data });
        this.loadPosts(data._id);
      }
    });
  };

  loadPosts = userId => {
    const token = isAuthenticated().token;
    listByUser(userId, token).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        this.setState({ posts: data });
      }
    });
  };

  componentDidMount() {
    const userId = this.props.queryparam;
    this.init(userId);
  }

  render() {
    const { redirectToSignin, user, posts } = this.state;

    const photoUrl = user._id
      ? `${process.env.REACT_APP_API_URL}/user/photo/${
          user._id
        }?${new Date().getTime()}`
      : DefaultProfile;

    if (redirectToSignin) {
      Router.push("/signin");
    }
    return (
      <Layout>
        <div className="container">
          <h2 className="title is-2">Profile</h2>
          <div className="columns">
            <div className="column">
              <img
                style={{ height: "200px", width: "auto" }}
                className="img-thumbnail"
                src={photoUrl}
                onError={i => (i.target.src = `${DefaultProfile}`)}
                alt={user.name}
              />
            </div>

            <div className="columns">
              <div className="lead">
                <p>Hello {user.name}</p>
                <p>Email: {user.email}</p>
                <p>{`Joined ${new Date(user.created).toDateString()}`}</p>
              </div>

              {isAuthenticated().user &&
              isAuthenticated().user._id === user._id ? (
                <div className="column">
                  <span className="button is-info">
                    <Link href={`/post/create`}>
                      <a> Create Post </a>
                    </Link>
                  </span>
                  <span className="button is-info">
                    <Link href={`/user/edit/${user._id}`}>
                      <a>Edit Profile</a>
                    </Link>
                  </span>
                  <DeleteUser userId={user._id} />
                </div>
              ) : (
                <div>
                  <p>Nothing</p>
                </div>
              )}

              <div>
                {isAuthenticated().user &&
                  isAuthenticated().user.role === "admin" && (
                    <div class="card">
                      <div className="card-body">
                        <h5 className="card-title">Admin</h5>
                        <p className="title is-6">Edit/Delete as an Admin</p>
                        <Link
                          className="buttonn is-success"
                          href={`/user/edit/${user._id}`}
                        >
                          <a> Edit Profile </a>
                        </Link>
                        {/*<DeleteUser userId={user._id} />*/}
                        <DeleteUser />
                      </div>
                    </div>
                  )}
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <hr />
              <p className="subtitle is-6">{user.about}</p>
              <hr />

              <ProfileTabs posts={posts} />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default withRouter(Profile);
