import React from "react";
import { MotionProps, motion } from "framer-motion";

type Props = {};

const imagesUrl = process.env.PUBLIC_URL + "/images/intro/";
const Intro = (props: Props) => {
  return (
    <section className="intro">
      <div className="autoContainer">
        <div className="intro__inner">
          <motion.div
            className="intro__content box"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.0 }}
          >
            <h2 className="text--primary">
              Contamos con el mejor talento validado de LATAM
            </h2>
            <p className="_lg">
              En nuestra red de talentos tenemos candidatos especializados en
              diferentes áreas para garantizar el éxito de tus proyectos.
            </p>
          </motion.div>
          <motion.div
            className="intro__image"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="ratioImage">
              <img src={imagesUrl + "intro-1.png"} alt="intro" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
