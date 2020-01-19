import React, { Component } from "react";
import Link from "next/link";
import DefaultPost from "../../public/images/courses.png";
import Likeup from "./likeup";
import Router from "next/router";

class RenderPost extends Component {
  constructor() {
    super();
    this.state = {
      redirectToHome: false,
      redirectToSignin: false
    };
  }

  render() {
    return (
      <div>
        {this.props.postz.map(post => {
          const posterId = post.postedBy ? `/user/${post.postedBy._id}` : "";
          const posterName = post.postedBy ? post.postedBy.name : "Unknown";

          return (
            console.log("thumbUrl:" ,post),
            <React.Fragment>
              <div className="list-item" key={post._id}>
                {console.log(post._id)}
                <article className="media">
                  <figure className="media-left">
                    <p className="image is-64x64">
                      <img
                        src={post.thumbnailUrl}
                        alt={post.title}
                        onError={i => (i.target.src = `${DefaultPost}`)}
                        className="img-thunbnail"
                      />
                    </p>
                  </figure>
                  <div className="media-content">
                    <div className="content is-inline-flex-mobile">
                      <p>
                        <a href={`${post.url}`}>
                          <span className="title is-5 is-capitalized">
                            {post.title}
                          </span>
                        </a>
                        &nbsp;&nbsp;
                        <Link href={`/post/${post._id}`}>
                          <button className="button is-info is-small is-rounded is-outlined">
                            View Details
                          </button>
                        </Link>
                        <br />
                      </p>
                    </div>
                    <nav className="level is-mobile">
                      <div className="level-left">
                        <a className="level-item">
                          <span className="tag is-white">{post.postType}</span>
                        </a>
                        <a className="level-item">
                          <span className="tag is-white">{post.category}</span>
                        </a>
                        <a className="level-item">
                          <span className="tag is-white">
                            {post.freeOrPaid}
                          </span>
                        </a>
                      </div>
                    </nav>
                  </div>
                  <div className="media-right">
                    <Likeup post={post} />
                  </div>
                </article>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    );
  }
}

export default RenderPost;
