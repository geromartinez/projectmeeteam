import React from "react";
import Button, { BUTTON_VARIANTS } from "../../../components/form/Button";
import { motion } from "framer-motion";

type Props = {};

const imagesUrl = process.env.PUBLIC_URL + "/images/info/";
const InfoSignup = (props: Props) => {
  return (
    <section className="info info--signup">
      <div className=" autoContainer">
        <div className="info__inner">
          <motion.div
            className="info__content _lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.0 }}
          >
            <h2 className="_sm">
              Conectamos el mejor talento de LATAM{" "}
              <span className="text--primary2">con compañías globales</span>
            </h2>
            <div className="info__content-box">
              <Button onClick={event =>  window.location.href='/login'} text="Empieza Ahora" />
              <Button onClick={event =>  window.location.href='/signup-clients'} text="Regístrate" variant={BUTTON_VARIANTS.BORDER} />
            </div>
          </motion.div>
          <motion.div
            className="info__image"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="ratioImage">
              <img src={imagesUrl + "blog-2.png"} alt="blog" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InfoSignup;
