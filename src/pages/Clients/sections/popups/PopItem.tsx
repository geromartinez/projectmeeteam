import Icon from "../../../../components/Icon";
import Button from "../../../../components/form/Button";
import React from "react";

type Props = {
  title: string;
  price: string;
  button?: boolean;
  list: string[];
  addClass?: string;
};

const PopItem = ({ title, addClass, price, button, list }: Props) => {
  return (
    <div className={`popup__card ${addClass ? addClass : ""}`}>
      <div className="popup__card-header">
        {button && <Button text="Recomendado" className="price__button" />}
        <strong className="text--title">{title}</strong>
        <div className="popup__card-text">
          <strong>perfiles desde </strong>{" "}
          <strong className="text--title noBreak">{price}</strong>
        </div>
        <span>por mes</span>
      </div>
      <div className="popup__card-container">
        <span>Incluye:</span>
        <ul className="popup__card-list">
          {list.map((item, i) => (
            <li key={i}>
              <Icon iconName="checkIco" />
              <span className="text">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PopItem;
