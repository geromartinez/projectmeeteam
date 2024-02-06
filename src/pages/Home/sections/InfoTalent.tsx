import React from "react";
import { MotionProps, motion } from "framer-motion";
import Button, { BUTTON_VARIANTS } from "../../../components/form/Button";
import Icon from "../../../components/Icon";

type Props = {};

const imagesUrl = process.env.PUBLIC_URL + "/images/info/";
const InfoTalent = (props: Props) => {
  return (
    <section className="info--talent">
      <div className="autoContainer">
        <div className="info__inner">
          <div className="info__image-placeholder"></div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="info__image"
          >
            <img src={imagesUrl + "info-2.png"} alt="info" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="info__content"
          >
            <h6 className="text--subTitle">Para Talentos</h6>
            <h2 className="_sm">
              <span className="text--primary">
                Accede a las mejores ofertas laborales de
              </span>{" "}
              <span>compañías globales.</span>
            </h2>
            <p className="_lg">
              Contamos con +1 k vacantes en diferentes áreas para impulsar tu
              carrera profesional
            </p>
            <div className="info__content-box">
              <Button onClick={event =>  window.location.href='/login'} text="Encontrar Vacantes" />
              <Button onClick={event =>  window.location.href='/signup-candidates'} text="Regístrate" variant={BUTTON_VARIANTS.TEXT}>
                <Icon iconName="arrowRight" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InfoTalent;
