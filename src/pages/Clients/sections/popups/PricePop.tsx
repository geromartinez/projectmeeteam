import React from "react";
import Popup, { PopupProps } from "../../../../components/Popup";
import PopItem from "./PopItem";

type Props = {
  text?: string;
};

const PricePop = ({ text, onClose }: Props & PopupProps) => {
  return (
    <Popup onClose={onClose}>
      <h2 className="_sm"> {text && text}</h2>
      <div className="popup__row _lg">
        <PopItem
          title="Talent Pro"
          price="USD 1k"
          list={[
            "Entrega del Talento de 4 semanas en adelante",
            "Gestión personalizada del Talento",
            "Nivel de Inglés A2",
            "Modalidad Remoto",
            "Garantía de 60 días",
          ]}
        />
        <PopItem
        addClass="_lg"
          title="Elite Talent Growth"
          price="USD 5k"
          button
          list={[
            "Entrega del Talento de 1 semana en adelante",
            "Gestión personalizada del Talento",
            "Account Manager",
            "Nivel de Inglés B2",
            "Modalidad Remoto",
            "Garantía de 60 días",
          ]}
        />
        <PopItem
          title="Top Talent Suite"
          price="USD 7.5k"
          list={[
            "Entrega del Talento entre 24 a 48 horas",
            "Gestión personalizada del Talento",
            "Account Manager",
            "Nivel de Inglés C1",
            "Garantía de 60 días",
          ]}
        />
      </div>
    </Popup>
  );
};

export default PricePop;
