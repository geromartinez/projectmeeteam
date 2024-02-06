import React from "react";
import Button, { BUTTON_VARIANTS } from "../../../components/form/Button";
import Icon from "../../../components/Icon";
import {  motion } from "framer-motion";

type Props = {};

const imagesUrl = process.env.PUBLIC_URL + "/images/blog/";
const HowTo = (props: Props) => {
  return (
    <section className="howTo">
      <div className="autoContainer">
        <div className="howTo__inner">
          <motion.div
            className="howTo__header"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.0 }}
          >
            <div className="howTo__header-box">
              <Button variant={BUTTON_VARIANTS.TEXT} text="Blog">
                <Icon iconName="arrowRight" />
              </Button>
              <Button variant={BUTTON_VARIANTS.TEXT} text="Candidates" />
            </div>
            <div className="howTo__social">
              <a href="/" className="button button--ico">
                <Icon iconName="shareIco" />
              </a>
              <a href="/" className="button button--ico">
                <Icon iconName="linkedIn" />
              </a>
              <a href="/" className="button button--ico">
                <Icon iconName="ixIco" />
              </a>
              <a href="/" className="button button--ico">
                <Icon iconName="facebookIco" />
              </a>
            </div>
          </motion.div>
          <div className="howTo__container">
            <div className="howTo__container-content">
              <motion.h3
                className="_lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.0 }}
              >
                Análisis de Datos o Data-driven, ¿Por qué hoy en día es tan importante?
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                En el panorama actual de TI, el análisis de datos es más importante que nunca. Las organizaciones TI que adoptan un enfoque basado en datos pueden tomar mejores decisiones, logran optimizar sus operaciones e incluso generan nuevos productos y servicios.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
               En este artículo, exploraremos los beneficios de un enfoque basado en análisis de datos para la industria TI, y también, te explicaremos cómo los ingenieros de TI pueden aprovechar sus habilidades y experiencia para encontrar trabajo en empresas norteamericanas de renombre con Mbc y su plataforma Meeteam.
              </motion.p>
            </div>
            <motion.div
              className="howTo__container-group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.0 }}
            >
              <div className="howTo__container-image">
                <img src={imagesUrl + "hero3.png"} alt="howTo" />
              </div>
              <div className="howTo__container-text">
                <span>Meeteam ofrece grandes oportunidades</span>
              </div>
            </motion.div>
            <div className="howTo__container-content">
              <motion.h5
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.0 }}
              >
                ¿Por qué es valioso un enfoque basado en datos para la industria de TI?
              </motion.h5>
              <motion.div
                className="howTo__container-box"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.0 }}
              >
                <p>
                Hay muchas razones por las que un enfoque basado en análisis de datos es valioso para la industria de TI. Aquí hay algunos de los beneficios clave:
                </p>
                <p>
                Mejor toma de decisiones: Los datos pueden ayudar a los líderes de TI a tomar mejores decisiones, sobre todo, desde el desarrollo de software y la seguridad.
                </p>
                <p>
                Optimización de operaciones: Los datos pueden ayudar a las organizaciones de TI a optimizar sus operaciones, reduciendo costos y mejorando la eficiencia.
                </p>
                <p>
                Generación de innovación: Los datos pueden ayudar a las organizaciones de TI a generar nuevas ideas y productos.
                </p>
              </motion.div>
              <motion.div
                className="howTo__container-text _lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.0 }}
              >
                <span>
                  
                ¿Cómo aprovechar tus habilidades para encontrar trabajo en empresas norteamericanas de renombre?
                </span>
              </motion.div>
              <motion.div
                className="howTo__container-box"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.0 }}
              >
                <p>
                Los ingenieros de TI con habilidades y experiencia en análisis de datos son muy solicitados por empresas norteamericanas. Si eres un ingeniero de TI con estas habilidades, aquí hay algunos consejos para ayudarte a encontrar tu trabajo ideal:
                </p>
                <p>
                Ingresa a Meeteam y destaca tu experiencia: Meeteam es una plataforma de reclutamiento dedicada a hacer match entre las mejores empresas de EE. UU. y los mejores desarrolladores de Latinoamérica. En ella, encontrarás excelentes oportunidades laborales y remuneraciones adecuadas a tu experiencia laboral.
                </p>
              </motion.div>
              <motion.h3
                className="_sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.0 }}
              >
                Puntos importantes
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.0 }}
              >
                Desarrolla tus habilidades de análisis de datos: Hay muchos recursos disponibles para ayudarte a desarrollar habilidades de análisis de datos. Puedes tomar cursos en línea, asistir a conferencias o unirte a grupos de profesionales.
                
                Conéctate con profesionales de la industria: La red es una excelente manera de conocer profesionales de la industria y aprender sobre las oportunidades de trabajo. Puedes conectarte con profesionales en línea, asistir a eventos de la industria o participar en grupos de LinkedIn.
                
                Actualiza tu currículum y perfil de LinkedIn: Asegúrate de que tu currículum y perfil de LinkedIn destaquen tus habilidades y experiencia en análisis de datos.
              </motion.p>
            </div>
          </div>
          <div className="howTo__footer">
            <motion.div
              className="howTo__footer-container"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.0 }}
            >
              <h5 className="_sm">Comparte</h5>
              <div className="howTo__social">
                <a href="/" className="button button--ico">
                  <Icon iconName="shareIco" />
                </a>
                <a href="/" className="button button--ico">
                  <Icon iconName="linkedIn" />
                </a>
                <a href="/" className="button button--ico">
                  <Icon iconName="ixIco" />
                </a>
                <a href="/" className="button button--ico">
                  <Icon iconName="facebookIco" />
                </a>
              </div>
            </motion.div>
            <motion.div
              className="howTo__footer-group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.0 }}
            >
              <Button text="Clients" className="howTo__footer-button" />
              <Button text="TI" className="howTo__footer-button" />
              <Button text="Trabajo Remoto" className="howTo__footer-button" />
              <Button text="Proyectos" className="howTo__footer-button" />
            </motion.div>
            <motion.div
              className="howTo__footer-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.0 }}
            >
              <strong>Mateo Burgos</strong>
              <span>CEO, Meeteam</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowTo;
