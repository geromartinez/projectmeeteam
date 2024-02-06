import React from "react";
import Button, { BUTTON_VARIANTS } from "../../../components/form/Button";
import { motion } from "framer-motion";

type Props = {};

const imagesUrl = process.env.PUBLIC_URL + "/images/partners/";
const Announcement = (props: Props) => {
  return (
    <section className="announcement">
      <div className="autoContainer">
        <div className="announcement__inner">
          <motion.div
            className="announcement__group"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <h2 className="_sm">
              ¡Explora nuevas conexiones! <br />
              <span className="text--primary3">
                encuentra el mejor talento de LATAM en tiempo record
              </span>
            </h2>
            <p className="_lg">
              Estamos aquí para crear conexiones poderosas que lleven tu empresa
              o proyecto a un nivel superior. ¡Descubre cómo podemos hacerlo
              juntos!
            </p>
            <div className="announcement__group-box">
              <Button onClick={event =>  window.location.href='/signup-clients'} text="Haz Match" />
              <Button onClick={event =>  window.location.href='/contact-us'}
                text="Agenda con Nosotros"
                variant={BUTTON_VARIANTS.BORDER}
              />
            </div>
          </motion.div>
          <div className="partners__row">
            <motion.div
              className="partners__item"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="partners__item-image _sm">
                <img src={imagesUrl + "symbiosis.svg"} alt="symbiosis" />
              </div>
            </motion.div>
            <motion.div
              className="partners__item"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="partners__item-image _lg">
                <img src={imagesUrl + "nagarro.svg"} alt="nagarro" />
              </div>
            </motion.div>
            <motion.div
              className="partners__item"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="partners__item-image _lg">
                <img src={imagesUrl + "pearls.svg"} alt="pearls" />
              </div>
            </motion.div>
            <motion.div
              className="partners__item"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="partners__item-image _lg">
                <img src={imagesUrl + "mbc.png"} alt="mbc" />
              </div>
            </motion.div>
         
            <motion.div
              className="partners__item"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="partners__item-image">
                <img src={imagesUrl + "definity.svg"} alt="definity" />
              </div>
            </motion.div>
            <motion.div
              className="partners__item"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="partners__item-image _lg">
                <img src={imagesUrl + "globalnow.svg"} alt="globalnow" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Announcement;
