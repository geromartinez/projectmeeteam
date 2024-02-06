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
                ¿Qué es Meeteam y cómo puedes llevar tu carrera profesional al
                siguiente nivel?
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Meeteam es una plataforma líder especializada en conectar
                talentosos profesionales de TI de América Latina con las
                empresas más innovadoras de Estados Unidos. ¿Qué significa esto
                para ti? En pocas palabras, que podrás acceder a oportunidades
                laborales exclusivas, y tendrás la posibilidad de trabajar en
                proyectos de gran envergadura.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                ¡Es más fácil de lo que podrías pensar! Utilizando nuestra
                plataforma Meeteam, tendrás un puente virtual, con el cual
                podrás acceder a oportunidades laborales en empresas de primer
                nivel en EE. UU. Esto quiere decir, que Meeteam elimina las
                barreras de distancia y conexiones permitiendo encontrar
                múltiples oportunidades, todo lo que necesites está a tu
                disposición con tan solo un click.
              </motion.p>
            </div>
            <motion.div
              className="howTo__container-group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.0 }}
            >
              <div className="howTo__container-image">
                <img src={imagesUrl + "how.png"} alt="howTo" />
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
                  Dentro de los beneficios más destacados, tenemos los
                  siguientes:
                </p>
                <p>
                  Encontrarás gran variedad de proyectos: Con más de 30 mil
                  proyectos disponibles, podrás acceder a aquellos que se
                  ajusten mejor a tus habilidades y aspiraciones profesionales.
                </p>
                <p>
                  Conseguirás experiencia en tecnologías de vanguardia: Trabajar
                  en proyectos estadounidenses te permitirá adentrarte en
                  tecnologías de última generación, de manera que podrás
                  desarrollar habilidades técnicas altamente valoradas en el
                  mercado.
                </p>
                <p>
                  Tendrás flexibilidad laboral: Olvídate de las ataduras de un
                  trabajo convencional. Con Meeteam, podrás conseguir proyectos
                  que te permitan gestionar tu tiempo de forma eficiente.
                </p>
              </motion.div>
              <motion.div
                className="howTo__container-text _lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.0 }}
              >
                <span>
                  Ingresa a nuestro sitio web o solicita asesoría con nuestros
                  expertos headhunters y descubre cómo puedes encontrar
                  oportunidades TI en Estados Unidos. ¡Estamos esperando por ti!
                </span>
              </motion.div>
              <motion.div
                className="howTo__container-box"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.0 }}
              >
                <p>
                  Ampliarás tu red profesional: Al conectar con profesionales de
                  diferentes culturas y disciplinas, tendrás la posibilidad de
                  intercambiar ideas, y al mismo tiempo, podrás estar al tanto
                  de las novedades tecnológicas del mercado.
                </p>
                <p>
                  Obtendrás apoyo y asesoramiento: Con Meeteam, nunca estarás
                  solo en esta travesía. Nuestro equipo estará allí para
                  brindarte apoyo y asesoramiento en cada paso del camino.
                </p>
              </motion.div>
              <motion.h3
                className="_sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.0 }}
              >
                No lo olvides
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.0 }}
              >
                ¡No esperes más! Únete a Meeteam y consigue abrir las puertas
                hacia un mundo lleno de oportunidades laborales en Estados
                Unidos. ¡Las mejores empresas esperan por ti!
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
