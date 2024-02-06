import React, { useRef, useState } from "react";
import Button, { BUTTON_VARIANTS } from "../../../components/form/Button";
import Icon from "../../../components/Icon";
import { motion } from "framer-motion";
import useVideo from "../../../hooks/useVideo";

type Props = {};

const imagesUrl = process.env.PUBLIC_URL + "/images/icons/";
const logoUrl = process.env.PUBLIC_URL + "/images/logo-white.png";
const videoUrl = process.env.PUBLIC_URL + "/videos/";

const Services = (props: Props) => {
  const videoRef = useRef<null | HTMLVideoElement>(null);
  const { isPlaying, togglePlayVideo } = useVideo({
    videoRef,
  });
  const [video, setVideo] = useState(false);
  const videoTabToggle = () => {
    setVideo(!video);
    togglePlayVideo(false);
  };

  return (
    <section className="services">
      <div className="autoContainer">
        <div className="services__inner">
          <motion.div
            className="services__header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <strong>Servicios</strong>
            <h2 className="_sm">Nuestras modalidades de contratación</h2>
            <p className="_lg">
              <span className="active">
                Tenemos planes personalizados y especializados según tu
                necesidad, presupuesto y tiempo
              </span>
              <span>Disponibilidad para gestionar tu búsqueda de talento</span>
            </p>
          </motion.div>
          <div className={`services__row ${!video ? "active" : ""}`}>
            <motion.div
              className="services__item _lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              <div className="services__item-image">
                <img src={imagesUrl + "rocket.svg"} alt="rocket" />
              </div>
              <div className="services__item-group">
                <h3 className="_lg">Staffing</h3>
                <p>
                  Nos hacemos cargo de todo el proceso, desde la búsqueda y
                  contratación hasta la gestión administrativa del talento.
                </p>
              </div>
              <div className="services__item-box">
                <Button onClick={event =>  window.location.href='/login'} text="Haz Match" />
                <Button onClick={event =>  window.location.href='/contact-us'} text="Contáctanos" variant={BUTTON_VARIANTS.TEXT}>
                  <Icon iconName="arrowRight" />
                </Button>
              </div>
            </motion.div>
            <motion.div
              className="services__item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="services__item-image">
                <img src={imagesUrl + "search.svg"} alt="directions" />
              </div>
              <div className="services__item-group">
                <h4>Head-Hunting/RPO</h4>
                <p>
                  Te buscamos los mejores candidatos, luego los contratas tú
                  mismo.
                </p>
              </div>
              <Button onClick={event =>  window.location.href='/contact-us'} text="Contáctanos" variant={BUTTON_VARIANTS.TEXT}>
                <Icon iconName="arrowRight" />
              </Button>
            </motion.div>
            <motion.div
              className="services__item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <div className="services__item-image">
                <img src={imagesUrl + "directions.svg"} alt="directions" />
              </div>
              <div className="services__item-group">
                <h4>Meeteam CRM</h4>
                <p>CRM personalizado para equipos de reclutamiento</p>
              </div>
              <Button
                text="Aprende a gestionar tu proceso"
                className="button button--text _orange text--underline"
                onClick={videoTabToggle}
              />
              <Button
                text="Ver Video"
                className="button button--text _hideDesktop"
                onClick={videoTabToggle}
              />
            </motion.div>
          </div>
          <motion.div
            className={`video ${video ? "active" : ""} ${
              isPlaying ? "video--playing" : ""
            }`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Button
              variant={BUTTON_VARIANTS.ICO}
              addClass="video__close"
              onClick={videoTabToggle}
            >
              <Icon iconName="closeIco" />
            </Button>
            <div className="video__ratio" onClick={() => togglePlayVideo()}>
              <video ref={videoRef} src={videoUrl + "introduction-big.mp4"} />
              <div className="video__placeholder">
                <div className="video__placeholder-image">
                  <img src={logoUrl} alt="logo" />
                </div>
              </div>
            </div>
            <Button className="video__play" onClick={() => togglePlayVideo()}>
              <Icon iconName="playIco" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
