import React from "react";
import Button, { BUTTON_VARIANTS } from "../../../components/form/Button";
import { motion } from "framer-motion";

type Props = {};

const imagesUrl = process.env.PUBLIC_URL + "/images/info/";
const Info = (props: Props) => {
  return (
    <section className="info info--blog" onClick={event =>  window.location.href='/blogpost'} >
      <div className="autoContainer">
        <div className="info__inner">
          <motion.div
            className="info__image"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.0 }}
          >
            <div className="ratioImage">
              <img src={imagesUrl + "blog.png"} alt="blog" />
            </div>
          </motion.div>
          <motion.div
            className="info__content"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <strong>Clients</strong>
            <h3 className="_sm text--primary">
              <span className="_hideMob">
                Accede a más de 30 k Oportunidades en EE. UU. con Meeteam
              </span>
              <span className="_hideDesktop">
                Accede a más de 30 k Oportunidades TI en EE. UU. con Meeteam
              </span>
            </h3>
            <p>
              ¡Descubre un mundo de posibilidades laborales! Encuentra
              oportunidades TI en Estados Unidos con Meeteam. ¡Impulsa tu
              carrera profesional!
            </p>
            <div className="info__content-text">
              <strong>Mateo Burgos</strong>
              <span>1 de Enero de 2024 &nbsp;•&nbsp; 5 min de lectura</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Info;
