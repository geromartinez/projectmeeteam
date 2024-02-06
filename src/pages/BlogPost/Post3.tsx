import React from "react";
import Hero3 from "./sections/Hero3";
import HowTo3 from "./sections/HowTo3";
import Article from "./sections/Article";
import Info from "./sections/Info";

type Props = {};

const BlogPost = (props: Props) => {
  return (
    <>
      <Hero3 />
      <HowTo3 />
      <Article />
      <Info />
    </>
  );
};

export default BlogPost;
