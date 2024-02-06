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
                Conoce el Potencial de los Equipos TI
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                En el dinámico entorno empresarial actual, maximizar el potencial de los equipos TI puede marcar la diferencia. Por ello, en este artículo exploraremos las ventajas que buscan las empresas del extranjero al contratar desarrolladores en América Latina (LatAm), y por qué se benefician tanto de ello.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                Recuerda que miles de oportunidades esperan por ti, antes de postularte a alguna vacante en el extranjero relevante, necesitas conocer los motores que impulsan a las empresas para entender mucho mejor sus necesidades.
              </motion.p>
            </div>
            <motion.div
              className="howTo__container-group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.0 }}
            >
              <div className="howTo__container-image">
                <img src={imagesUrl + "hero2.png"} alt="howTo" />
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
                
                El Auge de la externalización nearshore
              </motion.h5>
              <motion.div
                className="howTo__container-box"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.0 }}
              >
                <p>
                Experiencia Técnica Sobresaliente: Los desarrolladores LatAm son reconocidos por sus sólidas habilidades técnicas, debido a que cuentan con educación de alta calidad y experiencia en diversos lenguajes de programación o tecnologías, lo que le brinda a las empresas extranjeras, la oportunidad de encontrar profesionales altamente calificados en diversas áreas de desarrollo de software.
                </p>
                <p>
                Afinidad Cultural: Los países latinoamericanos comparten valores culturales, ética de trabajo y estilos de comunicación similares a los Estados Unidos. Esta similitud cultural facilita la colaboración, el entendimiento mutuo y reduce las barreras culturales en comparación con otras regiones.
                </p>
                <p>
                Compatibilidad Horaria: Trabajar con desarrolladores en LatAm puede proporcionar diferencias favorables de zona horaria, permitiendo una colaboración más efectiva y horas de trabajo extendidas. Esto conduce a una mayor productividad y finalización rápida de proyectos.
                </p>
                <p>
                Dominio del Idioma Inglés: Los desarrolladores de LatAm generalmente tienen un alto dominio del inglés, facilitando una comunicación efectiva y colaboración sin barreras lingüísticas.
                </p>
              </motion.div>
              <motion.div
                className="howTo__container-text _lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.0 }}
              >
                <span>
                Escalabilidad y Disponibilidad: Latinoamérica cuenta con un vasto grupo de desarrolladores talentosos, ofreciendo opciones de escalabilidad para sus proyectos, ya sea para un equipo pequeño o para ampliar rápidamente sus esfuerzos de desarrollo.
                </span>
              </motion.div>
              <motion.div
                className="howTo__container-box"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.0 }}
              >
                <p>
                Zonas Horarias Similares a los Mercados Estadounidenses: La proximidad horaria entre LatAm y Estados Unidos permite una mejor colaboración, reuniones y soporte en tiempo real, beneficiando especialmente las metodologías de desarrollo ágil.
                </p>
                <p>
                Protección de la Propiedad Intelectual: LatAm ha fortalecido sus leyes de protección de la propiedad intelectual, proporcionando seguridad a las empresas preocupadas por salvaguardar su tecnología y innovaciones.
                </p>
              </motion.div>
              <motion.h3
                className="_sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.0 }}
              >
                ¿Preguntas sobre la externalización de talentos?
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.0 }}
              >
                Considera explorar oportunidades laborales en empresas de renombre en EE. UU. a través de plataformas como Meeteam, pues en Meeteam no solo buscamos exponer el potencial de los equipos TI, sino que también, nos dedicamos a conectar los mejores talentos informáticos con emocionantes proyectos en el mercado norteamericano.
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
