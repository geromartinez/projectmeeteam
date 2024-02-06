import React from "react";
import Intro from "./sections/Intro";
import Talant from "./sections/Talant";
import Services from "./sections/Services";
import Price from "./sections/Price";
import Announcement from "./sections/Announcement";
import { Faq } from "../../components";

type Props = {};

const Clients = (props: Props) => {
  return (
    <>
      <Intro />
      <Talant />
      <Services />
      <Price />
      <Announcement />
      <Faq />
    </>
  );
};

export default Clients;
