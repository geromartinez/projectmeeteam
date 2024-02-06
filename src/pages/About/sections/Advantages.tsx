import React from "react";
import { MotionProps, motion } from "framer-motion";

type Props = {};

const imagesUrl = process.env.PUBLIC_URL + "/images/advantage/";
const Advantages = (props: Props) => {
  return (
    <section className="advantages">
      <div className="autoContainer">
        <div className="advantages__inner">
          <div className="advantages__row">
            <motion.div
              className="advantages__item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.0 }}
            >
              <div className="advantages__item-image">
                <img src={imagesUrl + "message.svg"} alt="message" />
              </div>
              <h3 className="_sm">Talento Bilingüe</h3>
              <p>
                Más de 50 k talentos verificados con alto nivel de inglés a tu
                disposición
              </p>
            </motion.div>
            <motion.div
              className="advantages__item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="advantages__item-image">
                <img src={imagesUrl + "pie-chart.svg"} alt="pie-chart" />
              </div>
              <h3 className="_sm">Menos del 1% de Rotación</h3>
              <p>Estabilidad laboral con una notable tasa de rotación del 1%</p>
            </motion.div>
            <motion.div
              className="advantages__item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="advantages__item-image">
                <img src={imagesUrl + "money.svg"} alt="money" />
              </div>
              <h3 className="_sm">Ahorro de Dinero</h3>
              <p>Puedes ahorrar hasta un 60% en costos salariales.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
