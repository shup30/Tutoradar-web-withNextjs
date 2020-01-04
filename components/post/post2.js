import React, { Component } from "react";
import { list, listByWebDevelopment } from "./apiPost";
import { Link } from "react-router-dom";
import Toolbar from "../../Core/toolbar";
import DefaultPost from "../../images/Avatar.png";


class Posts extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      page: 1,
      category: 'Engineering',
      filter: []
    };
  }

  filterPostByFree = () => {
    if (!this.state.free_toggle) {
      let filteredPosts = this.state.posts;
      console.log(`Filterposts: ${this.state.posts}`);
      filteredPosts = filteredPosts.filter(posts => {
        return posts.freeOrPaid === "Free";
      });
      this.setState({
        posts: filteredPosts,
        free_toggle: true
      });
    } else {
      let clearfilteredPosts = this.state.originalPosts;
      this.setState({
        posts: clearfilteredPosts,
        free_toggle: false
      });
    }
  };

  filterPostByPaid = () => {
    if (!this.state.Paid_toggle) {
      let filteredPosts = this.state.posts;
      console.log(`Filterposts: ${this.state.posts}`);
      filteredPosts = filteredPosts.filter(posts => {
        return posts.freeOrPaid === "Paid";
      });
      this.setState({
        posts: filteredPosts,
        Paid_toggle: true
      });
    } else {
      let clearfilteredPosts = this.state.originalPosts;
      this.setState({
        posts: clearfilteredPosts,
        Paid_toggle: false
      });
    }
  };

  filterPostByApp = () => {
    if (!this.state.App_toggle) {
      let filteredPosts = this.state.posts;
      console.log(`Filterposts: ${this.state.posts}`);
      filteredPosts = filteredPosts.filter(posts => {
        return posts.postType === "App";
      });
      this.setState({
        posts: filteredPosts,
        App_toggle: true
      });
    } else {
      let clearfilteredPosts = this.state.originalPosts;
      this.setState({
        posts: clearfilteredPosts,
        App_toggle: false
      });
    }
  };

  filterPostByBook = () => {
    if (!this.state.book_toggle) {
      let filteredPosts = this.state.posts;
      console.log(`Filterposts: ${this.state.posts}`);
      filteredPosts = filteredPosts.filter(posts => {
        return posts.postType === "Book";
      });
      this.setState({
        posts: filteredPosts,
        book_toggle: true
      });
    } else {
      let clearfilteredPosts = this.state.originalPosts;
      this.setState({
        posts: clearfilteredPosts,
        book_toggle: false
      });
    }
  };

  filterPostByVideo = () => {
    if (!this.state.vid_toggle) {
      let filteredPosts = this.state.posts;
      console.log(`Filterposts: ${this.state.posts}`);
      filteredPosts = filteredPosts.filter(posts => {
        return posts.postType === "Video";
      });
      this.setState({
        posts: filteredPosts,
        vid_toggle: true
      });
    } else {
      let clearfilteredPosts = this.state.originalPosts;
      this.setState({
        posts: clearfilteredPosts,
        vid_toggle: false
      });
    }
  };

  filterPostByBeginner = () => {
    if (!this.state.beg_toggle) {
      let filteredPosts = this.state.posts;
      console.log(`Filterposts: ${this.state.posts}`);
      filteredPosts = filteredPosts.filter(posts => {
        return posts.postType === "App";
      });
      this.setState({
        posts: filteredPosts,
        beg_toggle: true
      });
    } else {
      let clearfilteredPosts = this.state.originalPosts;
      this.setState({
        posts: clearfilteredPosts,
        beg_toggle: false
      });
    }
  };

  filterPostByIntermediate = () => {
    if (!this.state.int_toggle) {
      let filteredPosts = this.state.posts;
      filteredPosts = filteredPosts.filter(posts => {
        return posts.postType === "App";
      });
      this.setState({
        posts: filteredPosts,
        int_toggle: true
      });
    } else {
      let clearfilteredPosts = this.state.originalPosts;
      this.setState({
        posts: clearfilteredPosts,
        int_toggle: false
      });
    }
  };

  filterPostByAdvanced = () => {
    if (!this.state.adv_toggle) {
      let filteredPosts = this.state.posts;
      filteredPosts = filteredPosts.filter(posts => {
        return posts.postType === "App";
      });
      this.setState({
        posts: filteredPosts,
        adv_toggle: true
      });
    } else {
      let clearfilteredPosts = this.state.originalPosts;
      this.setState({
        posts: clearfilteredPosts,
        adv_toggle: false
      });
    }
  };


  loadPosts = (page, category) => {
    list(page, category).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        this.setState({ posts: data });
      }
    });
  };

  renderPost = posts => {
    return (
      <div>
        {posts.map((post, i) => {
          const posterId = post.postedBy ? `/user/${post.postedBy._id}` : "";
          const posterName = post.postedBy ? post.postedBy.name : "Unknown";
  
          return (
            <>
              <div
                className="card is-horizontal columns is-flex-mobile"
                id="course-card"
                key={i}
              >
                <div className="card-image column is-2">
                  <img
                    src={`${process.env.REACT_APP_API_URL}/post/photo/${post._id}`}
                    alt={post.title}
                    onError={i => (i.target.src = `${DefaultPost}`)}
                    className="img-thunbnail"
                    style={{ height: "100px", width: "100%" }}
                  />
                </div>
                <div className="card-content column is-8">
                  <div className="columns">
                    <div className="column">
                      <h5 className="title is-5 is-pulled-left is-capitalized">
                        {post.title}
                      </h5>
                    </div>
                  </div>
                  <div className="columns is-hidden-mobile">
                    <div className="column">
                      <p className="text is-small is-6 is-pulled-left">
                        {post.body.substring(0, 30)}
                      </p>
                    </div>
                  </div>
                  <div className="columns is-hidden-mobile">
                    <div className="column">
                      <p className="text is-small is-6 is-pulled-left">
                        Posted by <Link to={`${posterId}`}>{posterName} </Link>
                        on {new Date(post.created).toDateString()}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card-content column is-2">
                  <div className="columns is-vcentered is-flex-mobile">
                    <div className="column">
                      <Link
                        to={`/post/${post._id}`}
                        className="button is-primary is-light is-small"
                      >
                        Go To tutorial
                      </Link>
                    </div>
                  </div>
                  <div className="columns is-vcentered is-flex-mobile">
                    <div className="column">
                      <Link
                        to={`/post/${post._id}`}
                        className="button is-danger is-light is-small"
                      >
                        View Detail
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    );
  };



  filterPostByType = () => {
    let filteredPosts = this.state.posts
    console.log(`Filterposts: ${this.state.posts}`)
    filteredPosts = filteredPosts.filter((posts) => {
        return posts.postType === 'video'
    })
    this.setState({
      posts: filteredPosts
    })
  }

  componentDidMount() {
    this.loadPosts(this.state.page, this.state.category);
  }

  

  loadMore = number => {
    this.setState({ page: this.state.page + number });
    this.loadPosts(this.state.page + number);
  };

  loadLess = number => {
    this.setState({ page: this.state.page - number });
    this.loadPosts(this.state.page - number);
  };

  render() {
    const { posts, page, filter, category } = this.state;
    return (
      <div className="container is-fluid">
        <div className="columns">
          <div className="column is-2 is-hidden-mobile">
            <Toolbar />
          </div>
          <div className="column is-1"></div>
          <div className="column is-6">
            <div className="column">
              <h2
                className="title is-2"
                style={{
                  color: "#090130",
                  fontWeight: "bold",
                  fontFamily: "Roboto"
                }}
              >
                {!posts.length
                  ? "No more posts!"
                  : "Best Web-Development Courses"}
              </h2>
              <hr></hr>
            </div>
            {console.log(posts)}
            {console.log(filter)}
            <div className="column">{this.renderPost(posts)}</div>
            <br></br>
            <hr></hr>
            <br></br>
            <div className="column">
              <div className="columns is-centered">
                <div className="column is-half">
                  <nav
                    class="pagination is-block"
                    role="navigation"
                    aria-label="pagination"
                  >
                    {page > 1 ? (
                      <Link
                        class="pagination-previous"
                        onClick={() => this.loadLess(1)}
                      >
                        Previous
                      </Link>
                    ) : (
                      " "
                    )}
                    {posts.length ? (
                      <Link
                        class="pagination-next"
                        onClick={() => this.loadMore(1)}
                      >
                        Next page
                      </Link>
                    ) : (
                      ""
                    )}
                    <button className="button is-priamry"
                      onClick={() => this.loadCategory()}
                    >
                      category filter
                    </button>

                    <button className="button is-priamry"
                      onClick={this.filterPostByType}
                    >
                      Filter
                    </button>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Posts;
