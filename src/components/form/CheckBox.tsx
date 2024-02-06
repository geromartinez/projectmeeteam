import React from "react";
import Icon from "../Icon";

type Props = {
  addClass?: string;
  idCheckBox?: string;
  text?: string;
  textLink?: string;
  textNavLink?: string;
  textHref?: string;
};

const CheckBox = ({
  addClass,
  idCheckBox,
  text,
  textLink,
  textHref,
}: Props) => {
  return (
    <div className={`checkBox__outer ${addClass}`}>
      <div className="checkBox">
        <input type="checkbox" id={idCheckBox} />
        <Icon iconName="checkIco2" />
      </div>
      <label htmlFor={idCheckBox}>
        <span>{text}</span>{" "}
        <a href={textHref} className="text--underline">
          {textLink}
        </a>
      </label>
    </div>
  );
};

export default CheckBox;
