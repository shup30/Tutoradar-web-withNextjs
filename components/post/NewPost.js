import React, { Component } from "react";
import { isAuthenticated } from "../auth";
import { create } from "./apiPost";
import Link from "next/link";

class NewPost extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      body: "",
      url: "",
      category: "",
      postType: "",
      photo: "",
      freeOrPaid: "",
      error: "",
      user: {},
      fileSize: 0,
      loading: false,
      redirectToProfile: false
    };
  }

  componentDidMount() {
    this.postData = new FormData();
    this.setState({ user: isAuthenticated().user });
  }

  isValid = () => {
    const { title, body, url, fileSize } = this.state;
    if (fileSize > 100000) {
      this.setState({
        error: "File size should be less than 100kb",
        loading: false
      });
      return false;
    }
    if (title.length === 0 || body.length === 0) {
      this.setState({ error: "All fields are required", loading: false });
      return false;
    }
    if (
      !/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(
        url
      )
    ) {
      this.setState({
        error: "A valid Url is required",
        loading: false
      });
      return false;
    }
    return true;
  };

  handleChange = name => event => {
    this.setState({ error: "" });
    const value = name === "photo" ? event.target.files[0] : event.target.value;

    const fileSize = name === "photo" ? event.target.files[0].size : 0;
    this.postData.set(name, value);
    this.setState({ [name]: value, fileSize });
  };

  clickSubmit = event => {
    event.preventDefault();
    this.setState({ loading: true });

    if (this.isValid()) {
      const userId = isAuthenticated().user._id;
      const token = isAuthenticated().token;

      create(userId, token, this.postData).then(data => {
        if (data.error) this.setState({ error: data.error });
        else {
          this.setState({
            loading: false,
            title: "",
            body: "",
            url: "",
            category: "Web Development",
            postType: "",
            freeOrPaid: "",
            redirectToProfile: true
          });
        }
      });
    }
  };

  newPostForm = (title, body, url) => (
    <form id="postform">
      <div className="field" style={{ textAlign: "center" }}>
      <h1 className="title is-2 is-capitalized" style={{fontFamily: 'Roboto'}}>Create a new Resource</h1>
        <hr></hr>
        <label className="label">URL</label>
        <input
          onChange={this.handleChange("url")}
          type="text"
          className="input is-link"
          value={url}
          placeholder="Url Link for resource"
        />
      </div>


      <div className="field" style={{ textAlign: "center" }}>
        <label className="label">Resource Title</label>
        <input
          onChange={this.handleChange("title")}
          type="text"
          placeholder="Type a Title for Resource"
          className="input is-link"
          value={title}
        />
      </div>

      <br />

      <div className="field" style={{ textAlign: "center" }}>
        <label className="label">Body</label>
        <textarea
          onChange={this.handleChange("body")}
          type="text"
          className="input is-link is-large"
          value={body}
        />
      </div>

      <br />

      <div className="field" style={{ textAlign: "center" }}>
        <label className="label">Photo</label>

        <div className="file">
          <label className="file-label">
            <input
              onChange={this.handleChange("photo")}
              type="file"
              accept="image/*"
              className="file-input"
            />
            <span class="file-cta">
              <span class="file-icon">
                <i class="fas fa-upload"></i>
              </span>
              <span class="file-label">Choose a file…</span>
            </span>
          </label>
        </div>
      </div>

      <br />

      <div className="field" style={{ textAlign: "center" }}>
        <label className="label">Category</label>
        <div class="control">
          <div class="select is-info">
            <select
              value={this.state.category}
              onChange={this.handleChange("category")}
            >
              <option>Select option</option>
              <option>Web Development</option>
              <option>Designing</option>
              <option>Engineering</option>
            </select>
          </div>
        </div>
      </div>

      <br />

      <div className="field" style={{ textAlign: "center" }}>
        <label className="label">Resource Type</label>
        <div className="control">
          <label className="radio">
            <input
              type="radio"
              name="answer"
              value="Video"
              onChange={this.handleChange("postType")}
            ></input>
            Video
          </label>
          <label className="radio">
            <input
              type="radio"
              name="answer"
              value="Book"
              onChange={this.handleChange("postType")}
            ></input>
            Book
          </label>
          <label className="radio">
            <input
              type="radio"
              name="answer"
              value="Article"
              onChange={this.handleChange("postType")}
            ></input>
            Article/Blog-Post
          </label>
          <label className="radio">
            <input
              type="radio"
              name="answer"
              value="App"
              onChange={this.handleChange("postType")}
            ></input>
            App
          </label>
        </div>
      </div>

      <div className="field" style={{ textAlign: "center" }}>
        <label className="label">Is it Free Or Paid</label>
        <div className="control">
          <label className="radio">
            <input
              type="radio"
              name="answer"
              value="Free"
              onChange={this.handleChange("freeOrPaid")}
            ></input>
            Free
          </label>
          <label className="radio">
            <input
              type="radio"
              name="answer"
              value="Paid"
              onChange={this.handleChange("freeOrPaid")}
            ></input>
            Paid
          </label>
        </div>
      </div>

      <br/>
      <div className="field" style={{ textAlign: "center" }}>
        <button
          onClick={this.clickSubmit}
          className="button is-outlined is-link"
        >
          Upload Post
        </button>
      </div>
    </form>
  );

  render() {
    const {
      title,
      body,
      category,
      postType,
      freeOrPaid,
      url,
      photo,
      user,
      error,
      loading,
      redirectToProfile
    } = this.state;

    if (redirectToProfile) {
      return <Link href={`/user/${user._id}`} />;
    }

    return (
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
              <div className="hero">
                <h2>Loading...</h2>
              </div>
            ) : (
              ""
            )}

            {this.newPostForm(title, body, url, category, photo, postType, freeOrPaid)}
          </div>
        </div>
      </div>
    );
  }
}

export default NewPost;
