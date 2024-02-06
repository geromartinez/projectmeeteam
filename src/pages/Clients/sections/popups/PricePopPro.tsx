import React from "react";
import Popup, { PopupProps } from "../../../../components/Popup";
import PopItem from "./PopItem";

type Props = {
  text?: string;
};

const PricePopPro = ({ text, onClose }: Props & PopupProps) => {
  return (
    <Popup onClose={onClose}>
      <h2 className="_sm"> {text && text}</h2>
      <div className="popup__row">
        <PopItem
          title="Bilingües"
          price="USD 1.5k"
          button
          list={[
            "Nivel de Inglés verificado",
            "Tiempo de entrega personalizado",
            "Modalidad Remoto",
            "Modalidad Híbrida",
            "Modalidad On-Site",
          ]}
        />
        <PopItem
          title="No Bilingües"
          price="USD 500"
          list={[
            "Español nativo e Inglés básico",
            "Tiempo de entrega personalizado",
            "Modalidad Remoto",
            "Modalidad Híbrida",
            "Modalidad On-Site",
          ]}
        />
       
      </div>
    </Popup>
  );
};

export default PricePopPro;
