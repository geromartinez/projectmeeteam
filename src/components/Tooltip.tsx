import React from "react";
import Button, { BUTTON_VARIANTS } from "./form/Button";
import Icon from "./Icon";

type Props = {
  icon: any;
  text: string;
};

const Tooltip = ({ icon, text }: Props) => {
  return (
    <div className="tooltip">
      <Button variant={BUTTON_VARIANTS.ICO} addClass="tooltip__button">
        <Icon iconName={icon} />
      </Button>
      <div className="tooltip__content">
        <div className="tooltip__content-text">{text}</div>
      </div>
    </div>
  );
};

export default Tooltip;
