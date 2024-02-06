import React from "react";
import Button, { BUTTON_VARIANTS } from "../../../components/form/Button";
import Input from "../../../components/form/Input";
import InputSelect, { InputSelectItem } from "../../../components/form/InputSelect";
import Icon from "../../../components/Icon";
import CheckBox from "../../../components/form/CheckBox";
import { motion } from "framer-motion";

type Props = {};

const imagesUrl = process.env.PUBLIC_URL + "/images/contacts/";
const Enrol = (props: Props) => {
  return (
    <section className="enrol">
      <div className="autoContainer">
        <div className="enrol__inner">
          <motion.div
            className="enrol__container"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="enrol__container-box">
              <h2 className="_sm">
                Escríbenos y obtén una
                <span className="text--primary2">prueba gratuita</span>
              </h2>
              <p className="_lg">
                Queremos saber que necesitas para ofrecerte un plan
                personalizado que se ajuste a tus necesidades
              </p>
            </div>
            <div className="enrol__form">
              <div className="enrol__form-row">
                <Input inputId="name" labelText="Nombre" inputType="text" />
                <Input inputId="email" labelText="Correo" inputType="text" />
              </div>
              <div className="enrol__form-row">
                <div className="input__outer">
                  <label>Teléfono</label>
                  <InputSelect
                    onChange={(value: string) => {}}
                    prefix={<Icon iconName="arrowDown" />}
                  >
                    <InputSelectItem active value={"+57"}>
                      <span>+1</span>
                    </InputSelectItem>
                    <InputSelectItem value={"+333"}>
                      <span>+57</span>
                    </InputSelectItem>
                    <InputSelectItem value={"+111"}>
                      <span>+34</span>
                    </InputSelectItem>
                  </InputSelect>
                  <Input inputType="number" addClass="_sm" inputSm />
                </div>
                <Input inputId="company" labelText="Empresa" inputType="text" />
                <CheckBox text="Te llamamos?" idCheckBox="check-1" />
              </div>
              <div className="enrol__form-row">
                <div className="input__wrapper">
                  <label>Servicio Solicitado</label>
                  <InputSelect
                    onChange={(value: string) => {}}
                    prefix={<Icon iconName="arrowDown" />}
                  >
                    <InputSelectItem active value={"Staffing"}>
                      <span>Staffing</span>
                    </InputSelectItem>
                    <InputSelectItem value={"Staffing-2"}>
                      <span>Head-Hunting/RPO</span>
                    </InputSelectItem>
                   
                  </InputSelect>
                </div>
                <div className="input__wrapper">
                  <label>Perfil que buscas</label>
                  <InputSelect
                    onChange={(value: string) => {}}
                    prefix={<Icon iconName="arrowDown" />}
                  >
                    <InputSelectItem active value={"IT"}>
                      <span>IT</span>
                    </InputSelectItem>
                    <InputSelectItem value={"IT-2"}>
                      <span>No IT</span>
                    </InputSelectItem>
                
                  </InputSelect>
                </div>
              </div>
              <CheckBox
                text="Acepto los"
                idCheckBox="check-2"
                addClass="_space"
                textLink="Términos y Servicios"
                textHref="/terms"
              />
              <Button text="Haz Match Ahora" />
            </div>
          </motion.div>
          <motion.div
            className="enrol__image"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="ratioImage">
              <img src={imagesUrl + "contact.png"} alt="contact" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Enrol;
