import React from "react";
import Button, { BUTTON_VARIANTS } from "../../components/form/Button";
import Input from "../../components/form/Input";
import InputSelect, { InputSelectItem } from "../../components/form/InputSelect";
import Icon from "../../components/Icon";
import CheckBox from "../../components/form/CheckBox";
import { motion } from "framer-motion";

type Props = {};

const imagesUrl = process.env.PUBLIC_URL + "/images/";
const SignupCandidates = (props: Props) => {
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
                <p className="_lg">Conecta tu talento con el mundo</p>
              </div>
              <div className="signup__form">
                <div className="signup__form-group">
                  <Input labelText="Nombre*" inputId="name" />
                  <Input labelText="Apellido*" inputId="surname" />
                </div>
                <div className="signup__form-group">
                  <Input
                    labelText="Correo*"
                    inputId="email"
                    inputType="email"
                  />
                  <Input
                    labelText="Teléfono*"
                    inputId="phone"
                    inputType="number"
                  />
                </div>
                <div className="signup__form-group">
                  <div className="input__wrapper">
                    <label>País*</label>
                    <InputSelect
                      onChange={(value: string) => {}}
                      prefix={<Icon iconName="arrowDown" />}
                    >
                      <InputSelectItem active value={"Colombia"}>
                        <span>Colombia</span>
                      </InputSelectItem>
                      <InputSelectItem value={"Colombia-2"}>
                        <span>Estados Unidos</span>
                      </InputSelectItem>
                      <InputSelectItem value={"Colombia-3"}>
                        <span>España</span>
                      </InputSelectItem>
                    </InputSelect>
                  </div>
                  <div className="input__wrapper">
                    <label>Categoría*</label>
                    <InputSelect
                      onChange={(value: string) => {}}
                      prefix={<Icon iconName="arrowDown" />}
                    >
                      <InputSelectItem active value={"Full Stack"}>
                        <span>Full Stack</span>
                      </InputSelectItem>
                      <InputSelectItem value={"Full Stack-2"}>
                        <span>Accounting</span>
                      </InputSelectItem>
                      <InputSelectItem value={"Full Stack-3"}>
                        <span>UX/UI Design</span>
                      </InputSelectItem>
                    </InputSelect>
                  </div>
                </div>
                <Input
                  labelText="Contraseña*"
                  inputId="passwd"
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
              src={imagesUrl + "login/candidates.png"}
              alt="signup"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SignupCandidates;
