import React from "react";
import { motion } from "framer-motion";

type Props = {};

const Location = (props: Props) => {
  return (
    <section className="location">
      <div className="autoContainer">
        <div className="location__inner">
          <motion.div
            className="location__header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <strong>Nuestras oficinas</strong>
            <h2 className="_sm">Ubicaciones</h2>
          </motion.div>
          <div className="location__row">
            <motion.div
              className="location__content"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              <div className="location__content-item active">
                <h4>Manizales, Caldas</h4>
                <p>
                  Avenida Santander # 62-39 Edificio Empresarial Capitalia,
                  Oficina 805b
                </p>
                <a href="https://maps.app.goo.gl/4NmL5oxrLc7F9e2P6">Ver en Mapa</a>
              </div>
              <div className="location__content-item">
                <h4>Orlando, Florida</h4>
                <p>7345 W Sand Lake RD STE 210 PO 7553 Orlando FL 32819</p>
                <a href="https://maps.app.goo.gl/RqtK6Jps8KRGvvsr7">Ver en Mapa</a>
              </div>
            </motion.div>
            <motion.div
              className="location__map"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="location__map-ratio">
                <iframe
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.276693274324!2d-75.4893417254674!3d5.058833538449778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e47657dd82e0f35%3A0x683cfe845b066589!2sCapitalia%20Centro%20Empresarial!5e0!3m2!1ses!2sve!4v1706158328622!5m2!1ses!2sve"
                  width="600"
                  height="450"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
