import React, { Component } from "react";
import Link from "next/link";
import RenderPost from "./renderPost";

class Posts extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      posts: [],
      originalPosts: [],
      page: 1,
      App_toggle: false,
      Free_toggle: false,
      Paid_toggle: false,
      cat: "",
      fop: "",
      ptq: "",
      exceptVideo: "",
      exceptApp: "",
      exceptBook: ""
    };
  }

  componentDidMount() {
    this.setState({
      title: this.props.title,
      image: this.props.image,
    });
    this.loadPosts(
      this.state.page,
      this.props.cat,
      this.state.fop,
      this.state.ptq
    );
    console.log("title:", this.state.title);
  }

  loadMore = number => {
    this.setState({ page: this.state.page + number });
    this.loadPosts(this.state.page + number);
  };

  loadLess = number => {
    this.setState({ page: this.state.page - number });
    this.loadPosts(this.state.page - number);
  };

  loadPosts = (page, cat, fop, ptq) => {
    console.log(page, cat, fop, ptq);
    const { list } = this.props;
    list(page, cat, fop, ptq).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        this.setState({ posts: data, originalPosts: data });
      }
    });
  };

  FilterChangeFree = async () => {
    if (!this.state.Free_toggle) {
      await this.setState({
        fop: "Free",
        Free_toggle: true
      });
      this.loadPosts(
        this.state.page,
        this.props.cat,
        this.state.fop,
        this.state.ptq
      );
    } else {
      await this.setState({
        fop: "",
        Free_toggle: false
      });
      this.loadPosts(
        this.state.page,
        this.props.cat,
        this.state.fop,
        this.state.ptq
      );
    }
  };

  FilterChangePaid = async () => {
    if (!this.state.Paid_toggle) {
      await this.setState({
        fop: "Paid",
        Paid_toggle: true
      });
      this.loadPosts(
        this.state.page,
        this.props.cat,
        this.state.fop,
        this.state.ptq
      );
    } else {
      await this.setState({
        fop: "",
        Paid_toggle: false
      });
      this.loadPosts(
        this.state.page,
        this.props.cat,
        this.state.fop,
        this.state.ptq
      );
    }
  };

  ptqChangeApp = async () => {
    if (!this.state.App_toggle) {
      await this.setState({
        ptq: "App",
        App_toggle: true,
        exceptApp: "is-hidden"
      });
      this.loadPosts(
        this.state.page,
        this.props.cat,
        this.state.fop,
        this.state.ptq
      );
    } else {
      await this.setState({
        ptq: "",
        App_toggle: false,
        exceptApp: ""
      });
      this.loadPosts(
        this.state.page,
        this.props.cat,
        this.state.fop,
        this.state.ptq
      );
    }
  };

  ptqChangeVideo = async () => {
    if (!this.state.vid_toggle) {
      await this.setState({
        ptq: "Video",
        vid_toggle: true,
        exceptVideo: "is-hidden"
      });
      this.loadPosts(
        this.state.page,
        this.props.cat,
        this.state.fop,
        this.state.ptq
      );
    } else {
      await this.setState({
        ptq: "",
        vid_toggle: false,
        exceptVideo: ""
      });
      this.loadPosts(
        this.state.page,
        this.props.cat,
        this.state.fop,
        this.state.ptq
      );
    }
  };

  ptqChangeBook = async () => {
    if (!this.state.book_toggle) {
      await this.setState({
        ptq: "Book",
        book_toggle: true,
        exceptBook: "is-hidden"
      });
      this.loadPosts(
        this.state.page,
        this.props.cat,
        this.state.fop,
        this.state.ptq
      );
    } else {
      await this.setState({
        ptq: "",
        book_toggle: false,
        exceptBook: ""
      });
      this.loadPosts(
        this.state.page,
        this.props.cat,
        this.state.fop,
        this.state.ptq
      );
    }
  };

  render() {
    console.log(this.props);
    const {
      posts,
      page,
      title,
      exceptVideo,
      exceptApp,
      exceptBook
    } = this.state;
    return (
      <React.Fragment>
        <div className="container">
          <div className="columns">
            <section className="section">
              <div className="column">
                <nav
                  className="breadcrumb has-arrow-separator is-medium"
                  aria-label="breadcrumbs"
                >
                  <ul>
                    <li>
                      <Link href="/">
                        <strong>Home</strong>
                      </Link>
                    </li>
                    <li>
                      <Link href="/programming">
                        <strong>Programming</strong>
                      </Link>
                    </li>
                    &nbsp;
                    <li className="is-active">
                      <Link href="#">
                        <strong> {this.props.bread} </strong>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </section>
          </div>
          <div className="columns is-mobile" id="shadow-column">
            <div className="column is-1 is-hidden-mobile">
              <span>
                <img
                  src={`../../images/${this.props.image}`}
                  alt={this.props.alt}
                  width="200"
                  height="200"
                />
              </span>
            </div>
            <div className="column is-8">
              <h2
                className="title is-3 is-pulled-left"
                style={{
                  color: "#000",
                  fontWeight: "500"
                }}
              >
                {!posts.length
                  ? "No more posts!"
                  : `The Best ${title} Courses and Tutorials`}
              </h2>
              <p className="text-content is-pulled-left">
                Find the best {title} courses and Tutorials online from
                tutorials submitted and voted by our community. We help you find
                the best {title} courses, tutorials and other related resources.
              </p>
            </div>
            <div className="column is-3 is-hidden-tablet">
              <img
                src={`../../images/${this.props.image}`}
                alt={this.props.alt}
                width="200"
                height="200"
              />
              <br />
            </div>
          </div>
          <div className="columns">
            <div className="column is-9">
              <div className="column">
                <div className="list">
                  <div className="list-header">
                    <h5 style={{ fontWeight: "700", fontSize: "1.25em" }}>
                      Top {title} Courses
                    </h5>
                  </div>
                  <RenderPost postz={posts} />
                </div>
              </div>
              <br></br>
              <br></br>
              <div className="column">
                <div className="columns is-centered">
                  <div className="column is-half">
                    <nav
                      className="pagination is-block"
                      role="navigation"
                      aria-label="pagination"
                    >
                      {page > 1 ? (
                        <button
                          className="button is-black is-outlined pagination-next"
                          id="next-button"
                          onClick={() => this.loadLess(1)}
                        >
                          <strong> Previous </strong>
                        </button>
                      ) : (
                        " "
                      )}
                      {posts.length ? (
                        <button
                          className="button is-dark is-outlined pagination-next"
                          id="next-button"
                          onClick={() => this.loadMore(1)}
                        >
                          <strong> Next Page </strong>
                        </button>
                      ) : (
                        ""
                      )}
                    </nav>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-3 is-hidden-mobile">
              <section>
                <br />
                <div className="panel is-info">
                  <p className="panel-heading">Filter Courses</p>
                  <p className="panel-sub">Type</p>
                  <label className={`panel-block`}>
                    <input
                      type="checkbox"
                      name="App"
                      onClick={this.FilterChangeFree}
                    />
                    Free
                  </label>
                  <label className="panel-block">
                    <input
                      type="checkbox"
                      name="App"
                      onClick={this.FilterChangePaid}
                    />
                    Paid
                  </label>
                  <p className="panel-sub">Medium</p>
                  <label className={`panel-block ${exceptBook} ${exceptApp}`}>
                    <input
                      type="checkbox"
                      name="Video"
                      onClick={this.ptqChangeVideo}
                    />
                    Video
                  </label>
                  <label className={`panel-block ${exceptBook} ${exceptVideo}`}>
                    <input
                      type="checkbox"
                      name="App"
                      onClick={this.ptqChangeApp}
                    />
                    App
                  </label>
                  <label className={`panel-block ${exceptVideo} ${exceptApp}`}>
                    <input
                      type="checkbox"
                      name="Book"
                      onClick={this.ptqChangeBook}
                    />
                    Book
                  </label>
                  <p className="panel-sub">Level</p>
                  <label className="panel-block">
                    <input
                      type="checkbox"
                      name="App"
                      onClick={this.filterPostByBeginner}
                    />
                    Beginner
                  </label>
                  <label className="panel-block">
                    <input
                      type="checkbox"
                      name="App"
                      onClick={this.filterPostByIntermediate}
                    />
                    Intermediate
                  </label>
                  <label className="panel-block">
                    <input
                      type="checkbox"
                      name="App"
                      onClick={this.filterPostByAdvanced}
                    />
                    Advanced
                  </label>
                </div>
              </section>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Posts;
