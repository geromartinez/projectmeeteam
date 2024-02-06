import React from "react";
import Hero1 from "./sections/Hero1";
import HowTo1 from "./sections/HowTo1";
import Article from "./sections/Article";
import Info from "./sections/Info";

type Props = {};

const BlogPost = (props: Props) => {
  return (
    <>
      <Hero1 />
      <HowTo1 />
      <Article />
      <Info />
    </>
  );
};

export default BlogPost;
