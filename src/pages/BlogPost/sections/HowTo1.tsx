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
                ¿Cómo conseguir trabajo en EE.UU. con Meeteam?
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
              Si eres un ingeniero de TI con experiencia, sabes que es importante destacar entre la multitud para tener la oportunidad de trabajar en las mejores empresas, y una forma de aumentar tus posibilidades de conseguir un trabajo en una empresa norteamericana es asociarte con un proveedor de externalización de procesos de contratación (RPO). 

              Las empresas de RPO tienen una amplia experiencia en la búsqueda y selección de candidatos cualificados para puestos de TI.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
             
              </motion.p>
            </div>
            <motion.div
              className="howTo__container-group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.0 }}
            >
              <div className="howTo__container-image">
                <img src={imagesUrl + "hero1.png"} alt="howTo" />
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
                Descubre los beneficios de unirte a Meeteam
              </motion.h5>
              <motion.div
                className="howTo__container-box"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.0 }}
              >
                <p>
                La RPO es una asociación estratégica entre una empresa y un proveedor, donde el proveedor de RPO asume la responsabilidad de todo el proceso de contratación, partiendo desde la búsqueda de candidatos hasta la selección y contratación.
                </p>
                <p>
                Las empresas de RPO tienen acceso a una amplia red de candidatos y a las mejores prácticas de reclutamiento, lo que les permite encontrar a los candidatos más cualificados para los puestos de TI.
                </p>
                <p>
                Pero, ¿por qué Meeteam es la mejor opción para los ingenieros de TI? En pocas palabras, porque somos líder mundial en la externalización de procesos de contratación, además, tenemos amplia experiencia en la búsqueda y selección de candidatos cualificados para puestos de TI.
                </p>
                <p>
                Nuestros servicios incluyen:

                Búsqueda y selección de candidatos.
                Evaluación de candidatos.
                Negociación de ofertas.
                Contratación.
                </p>
              </motion.div>
              <motion.div
                className="howTo__container-text _lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.0 }}
              >
                <span>
                Para conseguir un trabajo con Meeteam, debes crear un perfil en nuestra plataforma de reclutamiento.

                En tu perfil, debes incluir tu experiencia, tus habilidades y tus objetivos profesionales. Una vez que hayas creado tu perfil, un reclutador de Mbc se pondrá en contacto contigo para concertar una entrevista.
                </span>
              </motion.div>
              <motion.div
                className="howTo__container-box"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.0 }}
              >
                <p>
                Así que, si eres un ingeniero de TI con experiencia, no lo dudes más y ¡contáctanos! O si quieres empezar tu carrera en una empresa norteamericana, crea tu perfil en Meeteam ¡hoy mismo!
                </p>
    
              </motion.div>
              <motion.h3
                className="_sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.0 }}
              >

              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.0 }}
              >
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
