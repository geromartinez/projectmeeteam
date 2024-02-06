import React from "react";
import Hero from "./sections/Hero";
import Info from "./sections/Info";
import Company from "./sections/Company";
import InfoTalent from "./sections/InfoTalent";
import Partners from "./sections/Partners";
import InfoCompany from "./sections/InfoCompany";
import Testimonials from "./sections/Testimonials";
import Blog from "./sections/Blog";
import InfoSignup from "../Blog/sections/InfoSignup";

type Props = {
  // text: string;
};

const Home = (props: Props) => {
  return (
    <>
      <Hero />
      <Info />
      <Company />
      <InfoTalent />
      <Partners />
      <InfoCompany />
      <Testimonials />
      <Blog />
      <InfoSignup />
    </>
  );
};

export default Home;
