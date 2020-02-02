import React from "react";
import Layout from "../../components/layout";
import Posts from "../../components/post/Posts";
import { listByProgramming } from "../../components/post/apiPost";



export default () => {
  const title = "java Spring Framework";
  const image = "Python.png";
  const alt = "Learn Java Spring Framework from the best title tutorials/courses online";
  const bread = "Java Spring";
  const cat = "spring";

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
