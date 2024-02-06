import React from "react";
import Intro from "./sections/Intro";
import Achievement from "./sections/Achievement";
import InfoWhy from "./sections/InfoWhy";
import Advantages from "./sections/Advantages";
import Team from "./sections/Team";
import InfoTrust from "./sections/InfoTrust";

type Props = {};

const About = (props: Props) => {
  return (
    <>
      <Intro />
      <Achievement />
      <InfoWhy />
      <Advantages />
      <Team />
      <InfoTrust />
    </>
  );
};

export default About;
