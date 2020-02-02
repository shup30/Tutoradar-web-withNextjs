import React from "react";
import Layout from "../../components/layout";
import Posts from "../../components/post/Posts";
import { listByProgramming } from "../../components/post/apiPost";



export default () => {
  const title = "Go";
  const image = "Python.png";
  const alt = "Learn Go from the best title tutorials/courses online";
  const bread = "Go";
  const cat = "go";

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
