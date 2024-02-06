import React from "react";
import Button, { BUTTON_VARIANTS } from "../../../components/form/Button";
import { motion } from "framer-motion";

type Props = {};

const imagesUrl = process.env.PUBLIC_URL + "/images/intro/grid/";
const Intro = (props: Props) => {
  return (
    <section className="intro intro--grid">
      <div className="autoContainer">
        <div className="intro__inner">
          <motion.div
            className="intro__content"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.0 }}
          >
            <h2>Conecta tu talento con grandes proyectos internacionales.</h2>
            <p className="_lg">
              Encuentra oportunidades para cada etapa de tu carrera, accede a
              las mejores ofertas laborales de empresas internacionales,
              selecciona la que haga match con tus habilidades y postúlate.
            </p>
            <div className="intro__content-box">
              <Button onClick={event =>  window.location.href='/signup-candidates'} text="Postúlate" />
              <Button onClick={event =>  window.location.href='/login'} text="Iniciar Sesión" variant={BUTTON_VARIANTS.BORDER} />
            </div>
          </motion.div>
          <div className="intro__grid">
            <div className="intro__grid-ratio">
              <div className="intro__grid-column">
                <motion.div
                  className="intro__grid-image"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: .1 }}
                >
                  <img src={imagesUrl + "grid-1.png"} alt="grid" />
                </motion.div>
                <motion.div
                  className="intro__grid-image"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0 }}
                >
                  <img src={imagesUrl + "grid-2.png"} alt="grid" />
                </motion.div>
                <motion.div
                  className="intro__grid-image"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: .1 }}
                >
                  <img src={imagesUrl + "grid-3.png"} alt="grid" />
                </motion.div>
              </div>
              <div className="intro__grid-column">
                <motion.div
                  className="intro__grid-image"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <img src={imagesUrl + "grid-4.png"} alt="grid" />
                </motion.div>
                <motion.div
                  className="intro__grid-image"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.0 }}
                >
                  <img src={imagesUrl + "grid-5.png"} alt="grid" />
                </motion.div>
                <motion.div
                  className="intro__grid-image"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <img src={imagesUrl + "grid-6.png"} alt="grid" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
