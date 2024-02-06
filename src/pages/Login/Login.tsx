import React from "react";
import Button, { BUTTON_VARIANTS } from "../../components/form/Button";
import Input from "../../components/form/Input";
import Icon from "../../components/Icon";
import { motion } from "framer-motion";

type Props = {};

const imagesUrl = process.env.PUBLIC_URL + "/images/";
const Login = (props: Props) => {
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
                <h2 className="_sm text--primary">Iniciar Sesión</h2>
                <p className="_lg text--primary _color">
                  Conecta tu talento con el mundo
                </p>
              </div>
              <div className="signup__form">
                <Input labelText="Correo*" inputId="email" inputType="email" />
                <div className="input__wrapper">
                  <div className="input__wrapper-box">
                    <label htmlFor="passwd">Contraseña*</label>
                    <a href="/" className="text--underline">
                      Olvidaste tu contraseña?
                    </a>
                  </div>
                  <Input inputId="password" inputType="password" inputSm />
                </div>
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
                  <span>No tienes una cuenta?</span>{" "}
                  <a href="/" className="text--underline">
                    Regístrate
                  </a>
                </p>
              </div>
            </div>
            <div className="signup__copy">© 2024 Meeteam</div>
          </div>
          <div className="signup__image">
            <img src={imagesUrl + "login/clients.png"} alt="logo" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Login;
