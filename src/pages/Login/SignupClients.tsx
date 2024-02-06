import React from "react";
import Button, { BUTTON_VARIANTS } from "../../components/form/Button";
import Input from "../../components/form/Input";
import InputSelect, { InputSelectItem } from "../../components/form/InputSelect";
import Icon from "../../components/Icon";
import CheckBox from "../../components/form/CheckBox";
import { motion } from "framer-motion";

type Props = {};

const imagesUrl = process.env.PUBLIC_URL + "/images/";
const SignupClients = (props: Props) => {
  return (
    <section className="signup">
      <div className="autoContainer">
        <motion.div
          className="signup__inner"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <div className="signup__container">
            <a href="/" className="logo">
              <img src={imagesUrl + "logo.png"} alt="logo" />
            </a>
            <div className="signup__content">
              <div className="signup__content-box">
                <h2 className="_sm text--primary">Regístrate</h2>
                <p className="_lg text--primary">
                  Conecta los mejores talentos del mercado
                </p>
              </div>
              <div className="signup__form">
                <div className="signup__form-group">
                  <Input id="name" labelText="Nombre*" />
                  <Input id="surname" labelText="Apellido*" />
                </div>
                <div className="signup__form-group">
                  <div className="input__wrapper">
                    <label>País*</label>
                    <InputSelect
                      onChange={(value: string) => {}}
                      prefix={<Icon iconName="arrowDown" />}
                    >
                      <InputSelectItem active value={"Selecciona uno"}>
                        <span>Colombia</span>
                      </InputSelectItem>
                      <InputSelectItem value={"Selecciona uno-2"}>
                        <span>Estados Unidos</span>
                      </InputSelectItem>
                      <InputSelectItem value={"Selecciona uno-3"}>
                        <span>España</span>
                      </InputSelectItem>
                    </InputSelect>
                  </div>
                  <Input id="company" labelText="Compañía*" />
                </div>
                <div className="signup__form-group">
                  <Input id="email" labelText="Correo*" inputType="email" />
                  <Input id="tel" labelText="Teléfono*" inputType="number" />
                </div>
                <Input
                  id="passwd"
                  labelText="Contraseña*"
                  inputType="password"
                />
                <CheckBox
                  text="Acepto los Términos & Condiciones."
                  idCheckBox="check-1"
                />
                <div className="signup__form-box">
                  <Button text="Regístrate" />
                  <Button
                    text="Regístrate con Google"
                    variant={BUTTON_VARIANTS.BORDER}
                    addClass="_ico"
                  >
                    <Icon iconName="googleIco" addClass="_order" />
                  </Button>
                </div>
                <p className="text--primary">
                  <span>Ya tienes una cuenta?</span>{" "}
                  <a href="/" className="text--underline">
                    Iniciar Sesión
                  </a>
                </p>
              </div>
            </div>
            <div className="signup__copy">© 2024 Meeteam</div>
          </div>
          <div className="signup__image">
            <img
              src={imagesUrl + "login/login.png"}
              alt="signup"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SignupClients;
