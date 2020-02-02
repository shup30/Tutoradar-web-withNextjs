import React from "react";
import Layout from "../../components/layout";
import SinglePost from "../../components/post/SinglePost";

Post.getInitialProps = async ctx => {
  const PostId = ctx.query.postid;
  return { PostId };
};

function Post({ PostId }) {
  return (
    <Layout>
      <SinglePost PostId={PostId}/>
    </Layout>
  );
}

export default Post;
