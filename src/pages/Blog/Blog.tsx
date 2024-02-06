import React from "react";
import Intro from "./sections/Intro";
import Info from "./sections/Info";
import Article from "./sections/Article";
import InfoSignup from "./sections/InfoSignup";

type Props = {};

const Blog = (props: Props) => {
  return (
    <>
      <Intro />
      <Info />
      <Article />
      <InfoSignup />
    </>
  );
};

export default Blog;
