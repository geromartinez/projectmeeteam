import React from "react";
import Intro from "./sections/Intro";
import Instructions from "./sections/Instructions";
import Jobs from "./sections/Jobs";
import { Faq2 } from "../../components";
import Announcement from "./sections/Announcement";

type Props = {};

const Candidates = (props: Props) => {
  return (
    <>
      <Intro />
      <Instructions />
      <Jobs />
      <Faq2 />
      <Announcement />
    </>
  );
};

export default Candidates;
