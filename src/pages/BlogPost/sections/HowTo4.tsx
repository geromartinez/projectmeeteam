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
                ¿Por qué la comunicación en tiempo real es clave en el sector informático?
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                La comunicación en tiempo real se ha convertido en una herramienta fundamental. ¿Por qué? Es simple, porque en el sector informático, la toma de decisiones rápida, la resolución de problemas eficaz y la colaboración sin fronteras son esenciales para el desarrollo de cada uno de los proyectos. 
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                En este artículo, exploraremos por qué la comunicación en tiempo real es clave para los profesionales de TI y cómo puedes aprovechar al máximo esta ventaja según nuestra experiencia con las empresas internacionales.
              </motion.p>
            </div>
            <motion.div
              className="howTo__container-group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.0 }}
            >
              <div className="howTo__container-image">
                <img src={imagesUrl + "hero4.png"} alt="howTo" />
              </div>
              <div className="howTo__container-text">
                <span>Con nuestras estrategias, podrás mantener a tu equipo en sintonía sin importar las distancias geográficas. ¡Comencemos!</span>
              </div>
            </motion.div>
            <div className="howTo__container-content">
              <motion.h5
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.0 }}
              >
               
              ¿Cuáles son los beneficios de la comunicación en tiempo real?
              </motion.h5>
              <motion.div
                className="howTo__container-box"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.0 }}
              >
                <p>
                Esta herramienta ofrece una serie de beneficios para los profesionales de TI, entre los que se incluyen:
                </p>
                <p>
                Toma de decisiones más rápida: Este tipo de comunicación le permite a los equipos tomar decisiones con rapidez, sin importar si se trata de resolver problemas técnicos, aprobar hitos del proyecto o abordar las preocupaciones del cliente. Esta habilidad es vital para cumplir los plazos del proyecto y garantizar la satisfacción del cliente.
                </p>
                <p>
                Resolución rápida de problemas: En el dinámico mundo de las TI, pueden surgir problemas y retos en cualquier momento. Con la comunicación en tiempo real, los equipos pueden abordar estos problemas desde el instante en el cual se producen.
                </p>
                <p>
                Colaboración mejorada: Cuando los miembros del equipo pueden comunicarse en tiempo real, la colaboración es más eficaz. Las reuniones virtuales, las sesiones de intercambio de ideas y las discusiones sobre proyectos pueden llevarse a cabo sin los retrasos asociados a la coordinación a través de múltiples zonas horarias.
                </p>
              </motion.div>
              <motion.div
                className="howTo__container-text _lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.0 }}
              >
                <span>
                Mayor compromiso con el cliente: Para los profesionales de TI que trabajan con clientes de distintas regiones, la comunicación en tiempo real cambia las reglas del juego. Permitiendo así, programar reuniones y debates adaptados a la disponibilidad de todas las partes implicadas.
                </span>
              </motion.div>
              <motion.div
                className="howTo__container-box"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.0 }}
              >
                <p>
                Flexibilidad horaria: Mantenerse comunicado no significa que todos los miembros del equipo deban estar en la misma zona horaria. Se trata de encontrar horas de solapamiento en las que los miembros clave del equipo puedan estar disponibles simultáneamente.
                </p>
                
              </motion.div>
              <motion.h3
                className="_sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.0 }}
              >
                ¿Cómo sacar partido de esta herramienta?
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.0 }}
              >
                Identifica las horas de solapamiento: Determina las horas en las que los miembros clave del equipo están disponibles para la comunicación en tiempo real.

                Utiliza herramientas de colaboración: Invierte en herramientas de comunicación y colaboración que faciliten la interacción en tiempo real, tales como videoconferencias, mensajería instantánea y plataformas de gestión de proyectos.

                Programa reuniones periódicas: Planifica reuniones durante las horas de solapamiento para mantener a todo el equipo alineado e informado.
                
                Establece expectativas de comunicación claras: Pauta directrices para responder a los mensajes y correos electrónicos lo más pronto posible, especialmente durante las horas de solapamiento.
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
