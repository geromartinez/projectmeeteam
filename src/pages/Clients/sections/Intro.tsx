import React from "react";
import Button, { BUTTON_VARIANTS } from "../../../components/form/Button";
import { motion } from "framer-motion";

type Props = {};

const imagesUrl = process.env.PUBLIC_URL + "/images/intro/";
const Intro = (props: Props) => {
  return (
    <section className="intro intro--lg">
      <div className="autoContainer">
        <div className="intro__inner">
          <motion.div
            className="intro__content box"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <h2>
              Encuentra el talento perfecto para{" "}
              <span className="text--primary2">tu proyecto</span>
            </h2>
            <p className="_lg">
              Con más de 50K talentos de LATAM calificados en nuestra red,
              puedes realizar tu búsqueda filtrada por habilidades, herramientas
              y experiencia, para encontrar diferentes perfiles de tu interés y
              conectarlo con modalidades de Staffing o Headhunting.
            </p>
            <div className="intro__content-group">
              <Button onClick={event =>  window.location.href='/signup-clients'} text="Haz Match" />
              <Button onClick={event =>  window.location.href='/contact-us'}
                text="Contactar Ventas"
                variant={BUTTON_VARIANTS.BORDER}
              />
            </div>
          </motion.div>
          <motion.div
            className="intro__image"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="ratioImage">
              <img src={imagesUrl + "intro-2.png"} alt="intro" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
