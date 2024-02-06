import React from "react";
import Button, { BUTTON_VARIANTS } from "../../../components/form/Button";
import { MotionProps, motion } from "framer-motion";

type Props = {};
const imagesUrl = process.env.PUBLIC_URL + "/images/blog/";
const Blog = (props: Props) => {
  return (
    <section className="blog">
      <div className="autoContainer">
        <div className="blog__inner">
          <div className="blog__container">
            <motion.div
              className="blog__info"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              <h2 className="_sm">Nuestro contenido más reciente</h2>
              <p className="_lg">
                Accede a nuestro blog para estar al tanto de novedades y
                tendencias.
              </p>
              <Button onClick={event =>  window.location.href='/blog'} text="Ver Más" />
            </motion.div>
            <motion.div
              className="blog__item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="blog__item-image">
                <div className="ratioImage">
                  <img
                    src={imagesUrl + "blog-1.png"}
                    alt="blog"
                    className="_hideMob"
                  />
                  <img
                    src={imagesUrl + "blogsm-1.png"}
                    alt="blog"
                    className="_hideDesktop"
                  />
                </div>
              </div>
              <div className="blog__item-group" onClick={event =>  window.location.href='/post1'}>
                <strong>Candidates</strong>
                <h4 className="text--primary">
                  ¿Cómo conseguir trabajo en EE.UU. con Mbc y Meeteam?
                </h4>
                <p>
                  ¿Eres ingeniero de TI y quieres trabajar en una empresa
                  norteamericana? Con Meeteam RPO, podrás encontrar tu gran
                  oportunidad.
                </p>
                <div className="blog__item-box">
                  <strong>Mateo Burgos</strong>
                  <p className="_sm">
                    1 de Enero de 2024 &nbsp;•&nbsp; 5 min de lectura
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="blog__item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <div className="blog__item-image">
                <div className="ratioImage">
                  <img
                    src={imagesUrl + "blog-2.png"}
                    alt="blog"
                    className="_hideMob"
                  />
                  <img
                    src={imagesUrl + "blogsm-2.png"}
                    alt="blog"
                    className="_hideDesktop"
                  />
                </div>
              </div>
              <div className="blog__item-group" onClick={event =>  window.location.href='/post2'}>
                <strong>Candidates</strong>
                <h4 className="text--primary">
                  Conoce el Potencial de los Equipos TI
                </h4>
                <p>
                  Explora oportunidades laborales en Meeteam y conoce todo
                  acerca del potencial de los equipos TI en las empresas
                  norteamericanas.
                </p>
                <div className="blog__item-box">
                  <strong>Mateo Burgos</strong>
                  <p className="_sm">
                    1 de Enero de 2024 &nbsp;•&nbsp; 5 min de lectura
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="blog__item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="blog__item-image">
                <div className="ratioImage">
                  <img
                    src={imagesUrl + "blog-3.png"}
                    alt="blog"
                    className="_hideMob"
                  />
                  <img
                    src={imagesUrl + "blogsm-3.png"}
                    alt="blog"
                    className="_hideDesktop"
                  />
                </div>
              </div>
              <div className="blog__item-group" onClick={event =>  window.location.href='/post3'}>
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
                <div className="blog__item-box">
                  <strong>Mateo Burgos</strong>
                  <p className="_sm">
                    1 de Enero de 2024 &nbsp;•&nbsp; 5 min de lectura
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
