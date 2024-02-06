import React, { useRef } from "react";
import Button, { BUTTON_VARIANTS } from "../../../components/form/Button";
import Icon from "../../../components/Icon";
import { motion } from "framer-motion";
import useVideo from "../../../hooks/useVideo";

type Props = {};

const logoUrl = process.env.PUBLIC_URL + "/images/";
const imagesUrl = process.env.PUBLIC_URL + "/images/icons/";
const videoUrl = process.env.PUBLIC_URL + "/videos/";

const Instructions = (props: Props) => {
  const videoRef = useRef<null | HTMLVideoElement>(null);
  const { isPlaying, togglePlayVideo } = useVideo({
    videoRef,
  });

  return (
    <section className="instructions">
      <div className="autoContainer">
        <div className="instructions__inner">
          <motion.div
            className="instructions__header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.0 }}
          >
            <strong>Talentos de Latam</strong>
            <span className="instructions__header-ico">
              <img src={logoUrl + "logo-blue.png"} alt="logo" />
            </span>
            <strong>Compañías Globales</strong>
          </motion.div>
          <div className="instructions__container">
            <motion.div
              className={`video ${isPlaying ? "video--playing" : ""}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="video__ratio" onClick={() => togglePlayVideo()}>
                <video
                  ref={videoRef}
                  src={videoUrl + "instructions-small-portrait.mp4"}
                />
              </div>
              <div className="video__placeholder">
                <div className="video__placeholder-image">
                  <img src={logoUrl + "logo-white.png"} alt="logo" />
                </div>
              </div>
              <Button className="video__play" onClick={() => togglePlayVideo()}>
                <Icon iconName="playIco" />
              </Button>
            </motion.div>
            <div className="instructions__content">
              <div className="instructions__row">
                <motion.div
                  className="instructions__item"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.05 }}
                >
                  <div className="instructions__item-image">
                    <img src={imagesUrl + "user.svg"} alt="user" />
                  </div>
                  <h4>1. Crea tu perfil en Meeteam</h4>
                  <p>
                    Regístrate, completa tu información personal, experiencia,
                    estudios, carga tu cv y graba el audio según las
                    indicaciones.
                  </p>
                </motion.div>
                <motion.div
                  className="instructions__item"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div className="instructions__item-image">
                    <img src={imagesUrl + "window.svg"} alt="window" />
                  </div>
                  <h4>2. Postúlate</h4>
                  <p>
                    Accede a las mejores vacantes, selecciona la que haga match
                    con tus habilidades y postúlate.
                  </p>
                </motion.div>
                <motion.div
                  className="instructions__item"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                >
                  <div className="instructions__item-image">
                    <img src={imagesUrl + "message.svg"} alt="message" />
                  </div>
                  <h4>3. Haz match</h4>
                  <p>
                    Si el cliente está interesado en tu perfil se hará match y
                    uno de nuestros reclutadores se pondrá en contacto contigo.
                  </p>
                </motion.div>
                <motion.div
                  className="instructions__item"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="instructions__item-image">
                    <img src={imagesUrl + "access.svg"} alt="access" />
                  </div>
                  <h4>4. Bienvenido al equipo</h4>
                  <p>
                    Una vez se acuerden los términos de contratación estarás
                    listo para ser parte del equipo Meeteam.
                  </p>
                </motion.div>
              </div>
              <motion.div
                className="instructions__content-box"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
              >
                <Button onClick={event =>  window.location.href='/login'} addClass="_white" text="Ver vacantes" />
                <Button onClick={event =>  window.location.href='/signup-candidates'} text="Regístrate" variant={BUTTON_VARIANTS.TEXT}>
                  <Icon iconName="arrowRight" />
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructions;
