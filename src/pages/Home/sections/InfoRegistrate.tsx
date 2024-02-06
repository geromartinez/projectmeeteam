import React from "react";
import Button, { BUTTON_VARIANTS } from "../../../components/form/Button";
import { MotionProps, motion } from "framer-motion";

type Props = {};

const imagesUrl = process.env.PUBLIC_URL + "/images/info/";
const InfoSignup = (props: Props) => {
  return (
    <section className="info info--signup">
      <div className="autoContainer">
        <div className="info__inner">
          <motion.div
            className="info__content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <h2 className="_sm">
              <span className="text--primary">
                Regístrate, encuentra profesionales o
              </span>{" "}
              reserva una asesoría.
            </h2>
            <p className="_lg">
              Agenda una asesoría personalizada y exploremos juntos la opción
              que más se ajuste a tus necesidades.
            </p>
            <div className="info__content-box">
              <Button onClick={event =>  window.location.href='/signup-clients'} text="Regístrate" />
              <Button onClick={event =>  window.location.href='/contact-us'} text="Contáctanos" variant={BUTTON_VARIANTS.BORDER} />
            </div>
          </motion.div>
          <motion.div
            className="info__image"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="ratioImage">
              <img src={imagesUrl + "info-3.png"} alt="info" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InfoSignup;
