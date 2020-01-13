import React from "react";
import Posts from "./Posts";
import { list } from "./apiPost";

const showPost = () => {
  const title = "Python";
  const image = "Python.png";
  const alt = "Learn Python from the best title tutorials/courses online";
  const bread = "python"

  return (
      <Posts list={list} title={title} image={image} alt={alt} bread={bread} />
  );
};

export default showPost;
