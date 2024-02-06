import React from "react";
import Button, { BUTTON_VARIANTS } from "../../../components/form/Button";
import { motion } from "framer-motion";

type Props = {};

const imagesUrl = process.env.PUBLIC_URL + "/images/info/";
const Info = (props: Props) => {
  return (
    <section className="info info--signup _secondary">
      <div className=" autoContainer">
        <div className="info__inner">
          <motion.div
            className="info__content _sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.0 }}
          >
            <h2 className="_sm">
              <span className="text--primary">
                La magia de conectar y la suerte
              </span>{" "}
              <span className="text--orange">de coincidir</span>
            </h2>
            <p>
              La familia Meeteam está a tu disposición para encontrar las
              mejores soluciones en tu carera laboral y crecimiento personal.
            </p>
            <div className="info__content-box">
              <Button text="Empieza Ahora" />
              <Button text="Regístrate" variant={BUTTON_VARIANTS.BORDER} />
            </div>
          </motion.div>
          <motion.div
            className="info__image"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="ratioImage">
              <img src={imagesUrl + "blog-2.png"} alt="blog" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Info;
