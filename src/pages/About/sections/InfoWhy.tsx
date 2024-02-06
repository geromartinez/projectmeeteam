import React from "react";
import { MotionProps, motion } from "framer-motion";

type Props = {};

const imagesUrl = process.env.PUBLIC_URL + "/images/info/";
const InfoWhy = (props: Props) => {
  return (
    <section className="info info--why">
      <div className="autoContainer">
        <div className="info__inner">
          <motion.div
            className="info__content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.0 }}
          >
            <h2 className="_sm">
              ¿Por qué las empresas recurren a{" "}
              <span className="text--primary2">Meeteam?</span>
            </h2>
            <div className="info__content-text">
              <strong>La plataforma de conexiones perfectas.</strong>
              <p className="_lg">
                Explora nuestra red global, que reúne a los profesionales más
                talentosos de LATAM en tu misma zona horaria para una
                comunicación y colaboración fluida.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="info__image"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="ratioImage">
              <img src={imagesUrl + "why.png"} alt="why" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InfoWhy;
