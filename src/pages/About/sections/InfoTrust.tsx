import React from "react";
import Button from "../../../components/form/Button";
import { MotionProps, motion } from "framer-motion";

type Props = {};

const imagesUrl = process.env.PUBLIC_URL + "/images/partners/";
const InfoTrust = (props: Props) => {
  return (
    <section className="info info--trust">
      <div className="autoContainer">
        <div className="info__inner">
          <motion.div
            className="info__content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.0 }}
          >
            <h2 className="_sm">
              Súmate a las empresas que han creído en nosotros
            </h2>
            <p className="_lg">
              Hemos ayudado a grandes empresas del mundo a conectar con el mejor
              talento de Latinoamérica.
            </p>
            <Button onClick={event =>  window.location.href='/signup-clients'} text="Únete" />
          </motion.div>
          <motion.div
            className="info__container"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a href="#" className="info__container-item">
              <div className="info__container-image _sm">
                <img src={imagesUrl + "symbiosis.svg"} alt="symbiosis" />
              </div>
            </a>
            <a href="#" className="info__container-item">
              <div className="info__container-image">
                <img src={imagesUrl + "nagarro.svg"} alt="nagarro" />
              </div>
            </a>
            <a href="#" className="info__container-item">
              <div className="info__container-image">
                <img src={imagesUrl + "pearls.svg"} alt="pearls" />
              </div>
            </a>
            <a href="#" className="info__container-item">
              <div className="info__container-image">
                <img src={imagesUrl + "mbc.png"} alt="mbc" />
              </div>
            </a>
            <a href="#" className="info__container-item">
              <div className="info__container-image">
                <img src={imagesUrl + "globalnow.svg"} alt="globalnow" />
              </div>
            </a>
            <a href="#" className="info__container-item">
              <div className="info__container-image">
                <img src={imagesUrl + "definity.svg"} alt="definity" />
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InfoTrust;
