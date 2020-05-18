import React from "react";
import Layout from "../../../components/layout";
import SinglePost from "../../../components/post/SinglePost";

Post.getInitialProps = async (ctx) => {
  const Slug = ctx.query.slug;
  return { Slug };
};

function Post({ Slug }) {
  console.log(Slug);
  return (
    <Layout>
      <SinglePost Slug={Slug} />
    </Layout>
  );
}

export default Post;
