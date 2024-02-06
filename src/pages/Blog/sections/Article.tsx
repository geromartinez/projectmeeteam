import React from "react";
import { motion } from "framer-motion";

type Props = {};

const imagesUrl = process.env.PUBLIC_URL + "/images/article/";
const Article = (props: Props) => {
  return (
    <section className="article">
      <div className="autoContainer">
        <div className="article__inner">
          <motion.div
            className="article__tabs"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.0 }}
          >
            <div className="article__tabs-button active">
              <span>Ver Todo</span>
            </div>
            <div className="article__tabs-button">
              <span>Clients</span>
            </div>
            <div className="article__tabs-button">
              <span>Candidates</span>
            </div>
            <div className="article__tabs-button">
              <span>Noticias</span>
            </div>
            <div className="article__tabs-button">
              <span>Tendencia</span>
            </div>
          </motion.div>
          <div className="article__row">
            <motion.div
              className="article__item"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.0 }}
            >
              <div className="article__item-image" onClick={event =>  window.location.href='/post1'} >
                <div className="ratioImage">
                  <img src={imagesUrl + "article-1.png"} alt="article" />
                </div>
              </div>
              <div className="article__item-content" >
                <strong>Candidates</strong>
                <h4 className="text--primary">
                  ¿Cómo conseguir trabajo en EE.UU. con Meeteam?
                </h4>
                <p>
                  ¿Eres ingeniero de TI y quieres trabajar en una empresa
                  norteamericana? Con Meeteam RPO, podrás encontrar tu gran
                  oportunidad.
                </p>
                <div className="article__item-text">
                  <strong>Mateo Burgos</strong>
                  <span>1 de Enero de 2024 &nbsp;•&nbsp; 5 min de lectura</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="article__item"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="article__item-image" onClick={event =>  window.location.href='/post2'} >
                <div className="ratioImage">
                  <img src={imagesUrl + "article-2.png"} alt="article" />
                </div>
              </div>
              <div className="article__item-content">
                <strong>Candidates</strong>
                <h4 className="text--primary">
                  Conoce el Potencial de los Equipos TI
                </h4>
                <p>
                  Explora oportunidades laborales en Meeteam y conoce todo
                  acerca del potencial de los equipos TI en las empresas
                  norteamericanas.
                </p>
                <div className="article__item-text">
                  <strong>Mateo Burgos</strong>
                  <span>1 de Enero de 2024 &nbsp;•&nbsp; 5 min de lectura</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="article__item"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.0 }}
            >
              <div className="article__item-image" onClick={event =>  window.location.href='/post3'} >
                <div className="ratioImage">
                  <img src={imagesUrl + "article-3.png"} alt="article" />
                </div>
              </div>
              <div className="article__item-content">
                <strong>Candidates</strong>
                <h4 className="text--primary">
                  Análisis de Datos o Data-driven, ¿Por qué hoy en día es tan
                  importante?
                </h4>
                <p>
                  Descubre cómo los ingenieros TI con habilidades y experiencia
                  en análisis de datos pueden encontrar trabajo fácilmente en
                  empresas de EE. UU
                </p>
                <div className="article__item-text">
                  <strong>Mateo Burgos</strong>
                  <span>1 de Enero de 2024 &nbsp;•&nbsp; 5 min de lectura</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="article__item"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="article__item-image" onClick={event =>  window.location.href='/post4'} >
                <div className="ratioImage">
                  <img src={imagesUrl + "article-4.png"} alt="article" />
                </div>
              </div>
              <div className="article__item-content">
                <strong>Candidates</strong>
                <h4 className="text--primary">
                  ¿Por qué la comunicación en tiempo real es clave en el sector
                  informático?
                </h4>
                <p>
                  Aprende por qué la comunicación en tiempo real es esencial
                  para el éxito en el sector informático y para alcanzar las
                  metas empresariales.
                </p>
                <div className="article__item-text">
                  <strong>Mateo Burgos</strong>
                  <span>1 de Enero de 2024 &nbsp;•&nbsp; 5 min de lectura</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Article;
