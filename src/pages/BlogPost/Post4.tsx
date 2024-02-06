import React from "react";
import Hero4 from "./sections/Hero4";
import HowTo4 from "./sections/HowTo4";
import Article from "./sections/Article";
import Info from "./sections/Info";

type Props = {};

const BlogPost = (props: Props) => {
  return (
    <>
      <Hero4 />
      <HowTo4 />
      <Article />
      <Info />
    </>
  );
};

export default BlogPost;
