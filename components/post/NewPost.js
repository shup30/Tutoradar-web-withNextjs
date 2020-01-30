import React, { Component } from "react";
import { isAuthenticated } from "../auth";
import { create } from "./apiPost";
import { FaUpload } from "react-icons/fa";
import Router from "next/router";

class NewPost extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      body: "",
      url: "",
      category: "",
      subcategory: "",
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
            subcategory: "",
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
        <h1 className="title is-2 is-capitalized">Create a new Resource</h1>
        <label className="label">URL</label>
        <input
          onChange={this.handleChange("url")}
          type="text"
          className="input"
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
          className="input"
          value={title}
        />
      </div>

      <br />

      <div className="field" style={{ textAlign: "center" }}>
        <label className="label">Description</label>
        <textarea
          onChange={this.handleChange("body")}
          type="text"
          className="textarea is-large"
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
            <span className="file-cta">
              <span className="file-icon">
                <FaUpload />
              </span>
              <span className="file-label">Choose a file…</span>
            </span>
          </label>
        </div>
      </div>

      <br />

      <div className="field" style={{ textAlign: "center" }}>
        <label className="label">Category</label>
        <div className="control">
          <div className="select is-info">
            <select
              value={this.state.category}
              onChange={this.handleChange("category")}
            >
              <option>Select option</option>
              <option>Programming</option>
              <option>Designing</option>
              <option>Engineering</option>
            </select>
          </div>
        </div>
      </div>

      {this.state.category == "Programming" ? (
        <div className="field" style={{ textAlign: "center" }}>
          <label className="label">Sub Category</label>
          <div className="control">
            <div className="select is-info">
              <select
                value={this.state.subcategory}
                onChange={this.handleChange("subcategory")}
              >
                <option>Select option</option>
                <option>Python</option>
                <option>Javascript</option>
                <option>Php</option>
              </select>
            </div>
          </div>
        </div>
      ) : this.state.category == "Designing" ? (
        <div className="field" style={{ textAlign: "center" }}>
          <label className="label">Sub Category</label>
          <div className="control">
            <div className="select is-info">
              <select
                value={this.state.subcategory}
                onChange={this.handleChange("subcategory")}
              >
                <option>Select option</option>
                <option>Adobe Photoshop</option>
                <option>Figma</option>
                <option>Lightroom</option>
              </select>
            </div>
          </div>
        </div>
      ) : (
        <div className="field" style={{ textAlign: "center" }}>
          <label className="label">Sub Category</label>
          <div className="control">
            <div className="select is-info">
              <select
                value={this.state.subcategory}
                onChange={this.handleChange("subcategory")}
              >
                <option>Select Category First</option>
              </select>
            </div>
          </div>
        </div>
      )}

      <br />

      <div className="field" style={{ textAlign: "center" }}>
        <label className="label">Resource Type</label>
        <div className="control">
          <label className="radio">
            <input
              type="radio"
              name="resource"
              value="Video"
              onChange={this.handleChange("postType")}
            ></input>
            &nbsp; Video
          </label>
          &nbsp;&nbsp;
          <label className="radio">
            <input
              type="radio"
              name="resource"
              value="Book"
              onChange={this.handleChange("postType")}
            ></input>
            &nbsp; Book
          </label>
          &nbsp;&nbsp;&nbsp;
          <label className="radio">
            <input
              type="radio"
              name="resource"
              value="Article"
              onChange={this.handleChange("postType")}
            ></input>
            &nbsp; Article/Blog-Post
          </label>
          &nbsp;&nbsp;&nbsp;
          <label className="radio">
            <input
              type="radio"
              name="resource"
              value="App"
              onChange={this.handleChange("postType")}
            ></input>
            &nbsp; App
          </label>
        </div>
      </div>

      <div className="field" style={{ textAlign: "center" }}>
        <label className="label">Is It Free Or Paid</label>
        <div className="control">
          <label className="radio">
            <input
              type="radio"
              name="fop"
              value="Free"
              onChange={this.handleChange("freeOrPaid")}
            ></input>
            &nbsp; Free
          </label>{" "}
          &nbsp;&nbsp;&nbsp;
          <label className="radio">
            <input
              type="radio"
              name="fop"
              value="Paid"
              onChange={this.handleChange("freeOrPaid")}
            ></input>
            &nbsp; Paid
          </label>
        </div>
      </div>

      <br />
      <div className="field" style={{ textAlign: "center" }}>
        <button
          onClick={this.clickSubmit}
          className="button is-outlined is-link"
        >
          <strong>Upload Post</strong>
        </button>
      </div>
    </form>
  );

  render() {
    const {
      title,
      body,
      category,
      subcategory,
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
      Router.push(`/user/${user._id}`);
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

            {this.newPostForm(
              title,
              body,
              url,
              category,
              subcategory,
              photo,
              postType,
              freeOrPaid
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default NewPost;
