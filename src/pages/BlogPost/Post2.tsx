import React from "react";
import Hero2 from "./sections/Hero2";
import HowTo2 from "./sections/HowTo2";
import Article from "./sections/Article";
import Info from "./sections/Info";

type Props = {};

const BlogPost = (props: Props) => {
  return (
    <>
      <Hero2 />
      <HowTo2 />
      <Article />
      <Info />
    </>
  );
};

export default BlogPost;
