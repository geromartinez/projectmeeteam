import React from "react";
import { MotionProps, motion } from "framer-motion";

type Props = {};

const imagesUrl = process.env.PUBLIC_URL + "/images/";
const Achievement = (props: Props) => {
  return (
    <section className="achievement">
      <div className="autoContainer">
        <div className="achievement__inner">
          <div className="achievement__row">
            <motion.div
              className="box"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.0 }}
            >
              <h3 className="_lg">Algunos datos que validan nuestro trabajo</h3>
              <p className="_lg">
                Tenemos una cultura donde las personas son la esencia de todo lo
                que hacemos. Respaldados por una amplia trayectoria y cifras que
                validan nuestro trabajo, hemos logrado metas importantes.
                Estamos aquí para darte un acompañamiento personalizado.
              </p>
            </motion.div>
            <motion.div
              className="achievement__container"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <div className="achievement__container-item">
                <span>Fundada en</span>
                <strong>2014</strong>
              </div>
              <div className="achievement__container-item _lg">
                <strong className="text--secondary">+ 400 k</strong>
                <span>Horas trabajadas</span>
              </div>
              <div className="achievement__container-item ">
                <strong>+ 1 k</strong>
                <span>Talentos conectados</span>
              </div>
              <div className="achievement__container-item">
                <span className="text--hideMob">Equipo en</span>
                <strong className="text--secondary">10</strong>
                <span className="text--hideMob">Paises</span>
                <span className="text--hideDesk">Equipo en países</span>
              </div>
              <div className="achievement__container-item _lg">
                <strong>+ 50k</strong>
                <span>Talentos en nuestra red</span>
              </div>
              <div className="achievement__container-item">
                <strong className="text--secondary">100%</strong>
                <span>Talento Bilingüe</span>
              </div>
            </motion.div>
          </div>
          <motion.div
            className="achievement__image"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <img src={imagesUrl + "achievement.png"} alt="achievement" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Achievement;
