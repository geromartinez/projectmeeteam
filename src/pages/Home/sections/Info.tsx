import React from "react";
import Button, { BUTTON_VARIANTS } from "../../../components/form/Button";
import { MotionProps, motion } from "framer-motion";

type Props = {};

const imagesUrl = process.env.PUBLIC_URL + "/images/info/";

const Info = (props: Props) => {
  return (
    <section className="info">
      <div className="autoContainer">
        <div className="info__inner">
          <motion.div
            className="info__content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <h2 className="text--primary _sm _mobLg">
              <span>Meeteam facilita</span>
              <br />
              <span>la colaboración global</span>
            </h2>
            <p className="_extraLg">
              y la construcción de equipos de trabajo excepcionales bajo la
              metodología Talent Matcher. Regístrate y busca profesionales,
              explora proyectos o reserva una asesoría.
            </p>
            <div className="info__content-box">
              <Button onClick={event =>  window.location.href='/signup-clients'} addClass="_yellow" text="Contratar" />
              <Button onClick={event =>  window.location.href='/signup-candidates'} addClass="_orange" text="Unirse" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="info__image _contain"
          >
            <img src={imagesUrl + "info-1.png"} alt="info" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Info;
