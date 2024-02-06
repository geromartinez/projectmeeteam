import React, { ReactNode } from "react";
import { MotionProps, motion } from "framer-motion";
import Button, { BUTTON_VARIANTS } from "../../../components/form/Button";
import Dropdown, { DropdownItem } from "../../../components/form/Dropdown";
import Contacts from "pages/Contacts";

type Props = {};

const Hero = (props: Props) => {
  const imagesUrl = process.env.PUBLIC_URL + "/images/hero/";
  return (
    <section className="hero">
      <div className="autoContainer">
        <div className="hero__inner">
          <motion.div
            className="hero__content"
            initial={{ opacity: 0, scale: 0.95, y: 5 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.32 }}
          >
            <h3 className="_sm">
              <span className="text--secondary">La magia de conectar</span>
              <br />
              <span className="text--yellow">y la suerte de coincidir</span>
            </h3>
            <p className="_extraLg">
              <span>Conectamos el mejor talento de LATAM</span>
              <br />
              <span>con compañías globales</span>
            </p>
            <div className="hero__content-box">
              <Dropdown
                title="Regístrate"
                variant={BUTTON_VARIANTS.PRIMARY}
                addClass="_white _ico"
              >
                <DropdownItem onClick={event =>  window.location.href='/signup-clients'}>
                  <span>Compañías</span>
                </DropdownItem>
                <DropdownItem onClick={event =>  window.location.href='/signup-candidates'}>
                  <span>Talentos</span>
                </DropdownItem>
              </Dropdown>
              
              <Button onClick={event =>  window.location.href='/contact-us'} variant={BUTTON_VARIANTS.BORDER} text="Contáctanos" />
            </div>
          </motion.div>
          <div className="hero__container">
            <HeroImage
              url={imagesUrl + "hero-1.png"}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.0 }}
              alt="hero-bg-image-1"
            />
            <HeroImage
              url={imagesUrl + "hero-2.png"}
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              alt="hero-bg-image-2"
            />
            <HeroImage
              url={imagesUrl + "hero-3.png"}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              alt="hero-bg-image-3"
            />
            <HeroImage
              url={imagesUrl + "hero-4.png"}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, delay: 0 }}
              alt="hero-bg-image-4"
            />
            <HeroImage
              url={imagesUrl + "hero-5.png"}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              alt="hero-bg-image-5"
              transition={{ duration: 0.3, delay: 0.15 }}
            />
            <HeroImage
              url={imagesUrl + "hero-6.png"}
              initial={{ opacity: 0, scale: 0.65 }}
              whileInView={{ opacity: 1, scale: 1 }}
              alt="hero-bg-image-6"
              transition={{ duration: 0.45, delay: 0.1 }}
            />
          </div>
        </div>
      </div>
      <div className="hero__bg">
        <img src={imagesUrl + "hero-bg.png"} alt="bg" />
      </div>
    </section>
  );
};

const HeroImage = ({
  url,
  alt,
  ...props
}: MotionProps & {
  url: string;
  alt: string;
}): JSX.Element => {
  return (
    <motion.div className="hero__image" {...props}>
      <img src={url} alt={alt} />
    </motion.div>
  );
};
export default Hero;
