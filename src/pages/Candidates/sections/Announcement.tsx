import React from "react";
import Button, { BUTTON_VARIANTS } from "../../../components/form/Button";
import { motion } from "framer-motion";

type Props = {};

const Announcement = (props: Props) => {
  return (
    <section className="announcement announcement--sm">
      <div className="autoContainer">
        <motion.div
          className="announcement__inner"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.0 }}
        >
          <div className="announcement__group">
            <h2 className="_sm">
              <span className="text--yellow">La magia de conectar</span>
              <br />
              <span className="text--orange">y la suerte de coincidir</span>
            </h2>
            <p>
              Conecta con grandes compañías globales y encuentra tu trabajo
              ideal.
            </p>
            <div className="announcement__group-box">
              <Button onClick={event =>  window.location.href='/login'} text="Empieza ahora" />
              <Button onClick={event =>  window.location.href='/signup-candidates'} text="Regístrate" variant={BUTTON_VARIANTS.BORDER} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Announcement;
