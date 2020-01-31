import React from "react";
import Layout from "../../components/layout";
import Posts from "../../components/post/Posts";
import { listByProgramming } from "../../components/post/apiPost";

export default () => {
  const title = "Python";
  const image = "Python.png";
  const alt = "Learn Python from the best title tutorials/courses online";
  const bread = "python";
  const cat = "Python";

  return (
    <Layout>
      <Posts
        list={listByProgramming}
        title={title}
        image={image}
        alt={alt}
        bread={bread}
        cat={cat}
      />
    </Layout>
  );
};
