import React from "react";
import Button, { BUTTON_VARIANTS } from "../../../components/form/Button";
import { MotionProps, motion } from "framer-motion";

type Props = {};

const imagesUrl = process.env.PUBLIC_URL + "/images/info/company/";
const InfoCompany = (props: Props) => {
  return (
    <section className="info info--company">
      <div className="autoContainer">
        <div className="info__inner">
          <motion.div
            className="info__content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <h6 className="text--subTitle">Para Compañías</h6>
            <h2 className="_sm">
              ¿Te interesa la tercerización de{" "}
              <span className="text--primary2">talentos?</span>
            </h2>
            <p className="_lg">
              Facilitamos tu búsqueda para que encuentres y contrates desde 24
              horas en adelante al talento que desees.
            </p>
            <Button onClick={event =>  window.location.href='/signup-clients'} text="Haz Match" />
          </motion.div>
          <motion.div
            className="info__grid"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="info__grid-image _border">
              <div className="ratioImage">
                <img src={imagesUrl + "company-1.png"} alt="info" />
              </div>
            </div>
            <div className="info__grid-image">
              <div className="ratioImage">
                <img src={imagesUrl + "company-2.png"} alt="info" />
              </div>
            </div>
            <div className="info__grid-image">
              <div className="ratioImage">
                <img src={imagesUrl + "company-3.png"} alt="info" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InfoCompany;
