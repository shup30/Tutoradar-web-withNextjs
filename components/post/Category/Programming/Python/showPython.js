import React from "react";
import Posts from "../../../Posts";
import { listByProgramming } from "../../../apiPost";

const showPost = () => {
  const title = "Python";
  const image = "Python.png";
  const alt = "Learn Python from the best title tutorials/courses online";
  const bread = "python";
  const cat = "Python";

  return (
    <Posts list={listByProgramming} title={title} image={image} alt={alt} bread={bread} cat={cat}/>
  );
};

export default showPost;
