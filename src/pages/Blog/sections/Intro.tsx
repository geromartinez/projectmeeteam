import React from "react";
import { motion } from "framer-motion";

type Props = {};

const imagesUrl = process.env.PUBLIC_URL + "/images/intro/";
const Intro = (props: Props) => {
  return (
    <section className="intro intro--blog">
      <div className="autoContainer">
        <div className="intro__inner">
          <motion.div
            className="intro__content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.0 }}
          >
            <strong>Blog</strong>
            <h2>
              <span className="_hideMob">Descubre nuestro contenido</span>
              <span className="_hideDesktop">
                Descubre el contenido que tenemos para ofrecerte
              </span>
            </h2>
            <p>
              Encuentra las últimas novedades de Meeteam, actualizaciones,
              noticias, recomendados y temas de interés.
            </p>
          </motion.div>
          <motion.div
            className="intro__image"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="ratioImage">
              <img src="./images/intro/blog.png" alt="blog" />
              <img src={imagesUrl + "blog.png"} alt="blog" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
