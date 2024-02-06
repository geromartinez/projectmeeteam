import React from "react";
import Hero from "./sections/Hero";
import HowTo from "./sections/HowTo";
import Article from "./sections/Article";
import Info from "./sections/Info";

type Props = {};

const BlogPost = (props: Props) => {
  return (
    <>
      <Hero />
      <HowTo />
      <Article />
      <Info />
    </>
  );
};

export default BlogPost;
