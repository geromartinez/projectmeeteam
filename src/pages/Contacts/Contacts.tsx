import React from "react";
import Enrol from "./sections/Enrol";
import ContactsWays from "./sections/ContactsWays";
import Location from "./sections/Location";

type Props = {};

const Contacts = (props: Props) => {
  return (
    <>
      <Enrol />
      <ContactsWays />
      <Location />
    </>
  );
};

export default Contacts;
