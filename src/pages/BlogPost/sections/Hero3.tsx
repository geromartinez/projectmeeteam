import React from "react";
import {  motion } from "framer-motion";

type Props = {};

const imagesUrl = process.env.PUBLIC_URL + "/images/blog/";
const Hero = (props: Props) => {
  return (
    <section className="hero hero--secondary">
      <div className="autoContainer">
        <div className="hero__inner">
          <motion.div
            className="hero__group"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.0 }}
          >
            <div className="hero__group-box">
              <strong>Candidates</strong>
              <h2 className="_sm">
              Análisis de Datos o Data-driven, ¿Por qué hoy en día es tan importante?
              </h2>
            </div>
            <div className="hero__group-text">
              <strong>Mateo Burgos</strong>
              <span>1 de Enero de 2024 &nbsp;•&nbsp; 5 min de lectura</span>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="hero__bg">
        <img src={imagesUrl + "hero3.png"} alt="blog" className="_hideMob" />
        <img
          src={imagesUrl + "hero3-sm.png"}
          alt="blog"
          className="_hideDesktop"
        />
      </div>
    </section>
  );
};

export default Hero;
