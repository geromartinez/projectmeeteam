import React from "react";
import Button from "../../../components/form/Button";
import {  motion } from "framer-motion";

type Props = {};

const imagesUrl = process.env.PUBLIC_URL + "/images/blog/";
const Article = (props: Props) => {
  return (
    <section className="article article--secondary">
      <div className="autoContainer">
        <div className="article__inner">
          <motion.div
            className="article__header"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.0 }}
          >
            <h2 className="_sm">
              <span className="text--primary">Sigue explorando</span>
              <br />
              <span className="text--orange">nuestro contenido</span>
            </h2>
            <p className="_lg">Accede a más publicaciones gratuitas para tí.</p>
          </motion.div>
          <div className="article__row-wrapper">
            <div className="article__row">
              <motion.div
                className="article__item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.0 }}
              >
                <div className="article__item-image">
                  <div className="ratioImage">
                    <img src={imagesUrl + "blog-4.png"} alt="blog" />
                  </div>
                </div>
                <div className="article__item-content">
                  <strong>Candidates</strong>
                  <h4 className="text--primary">
                    ¿Cómo conseguir trabajo en EE.UU. con Mbc y Meeteam?
                  </h4>
                  <p>
                    ¿Eres ingeniero de TI y quieres trabajar en una empresa
                    norteamericana? Con Meeteam RPO, podrás encontrar tu gran
                    oportunidad.
                  </p>
                  <div className="article__item-text">
                    <strong>Mateo Burgos</strong>
                    <span>
                      1 de Enero de 2024 &nbsp;•&nbsp; 5 min de lectura
                    </span>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="article__item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                <div className="article__item-image">
                  <div className="ratioImage">
                    <img src={imagesUrl + "blogsm-3.png"} alt="blog" />
                  </div>
                </div>
                <div className="article__item-content">
                  <strong>Candidates</strong>
                  <h4 className="text--primary">
                    Análisis de Datos o Data-driven, ¿Por qué hoy en día es tan
                    importante?
                  </h4>
                  <p>
                    Descubre cómo los ingenieros TI con habilidades y
                    experiencia en análisis de datos pueden encontrar trabajo
                    fácilmente en empresas de EE. UU
                  </p>
                  <div className="article__item-text">
                    <strong>Mateo Burgos</strong>
                    <span>
                      1 de Enero de 2024 &nbsp;•&nbsp; 5 min de lectura
                    </span>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="article__item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
              >
                <div className="article__item-image">
                  <div className="ratioImage">
                    <img src={imagesUrl + "blog-5.png"} alt="blog" />
                  </div>
                </div>
                <div className="article__item-content">
                  <strong>Candidates</strong>
                  <h4 className="text--primary">
                    ¿Por qué la comunicación en tiempo real es clave en el
                    sector informático?
                  </h4>
                  <p>
                    Aprende por qué la comunicación en tiempo real es esencial
                    para el éxito en el sector informático y para alcanzar las
                    metas empresariales.
                  </p>
                  <div className="article__item-text">
                    <strong>Mateo Burgos</strong>
                    <span>
                      1 de Enero de 2024 &nbsp;•&nbsp; 5 min de lectura
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
            <Button text="Ver Más" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Article;
