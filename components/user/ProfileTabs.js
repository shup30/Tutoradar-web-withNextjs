import React, { Component } from "react";
import Link from "next/link";

class ProfileTabs extends Component {
  render() {
    const { posts } = this.props;
    return (
      <div>
        <div className="columns">
          <div className="column">
            <h3 className="title is-6">{posts.length} Posts</h3>
            <hr />
            {posts.map((post, i) => (
              <div key={i}>
                <div>
                  <Link to={`/post/${post._id}`}>
                    <div>
                      <p className="text-content">{post.title}</p>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileTabs;
