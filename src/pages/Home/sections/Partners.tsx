import React from "react";
import { MotionProps, motion } from "framer-motion";

type Props = {};

const Partners = (props: Props) => {
  const imagesUrl = process.env.PUBLIC_URL + "/images/partners/";
  return (
    <section className="partners">
      <div className="autoContainer">
        <div className="partners__inner">
          <motion.h6
            className="text--subTitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Algunos de nuestros partners
          </motion.h6>
          <div className="partners__row">
            <PartnersItem
              url={imagesUrl + "symbiosis.svg"}
              alt="symbiosis"
              href="#"
              size="_sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.12 }}
            />
            <PartnersItem
              url={imagesUrl + "nagarro.svg"}
              alt="nagarro"
              href="#"
              size="_lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.14 }}
            />
            <PartnersItem
              url={imagesUrl + "pearls.svg"}
              alt="pearls"
              href="#"
              size="_lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.16 }}
            />
            <PartnersItem
              url={imagesUrl + "mbc.png"}
              alt="mbc"
              href="#"
              size="_lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.18 }}
            />
            <PartnersItem
              url={imagesUrl + "definity.svg"}
              alt="definity"
              href="#"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.20 }}
            />
            <PartnersItem
              url={imagesUrl + "globalnow.svg"}
              alt="globalnow"
              href="#"
              size="_lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.22 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const PartnersItem = ({
  url,
  alt,
  size,
  href,
  addClass,
  ...props
}: MotionProps & {
  url: string;
  alt: string;
  size?: string;
  href: string;
  addClass?: string;
}): JSX.Element => {
  return (
    <motion.a
      className={`partners__item ${addClass ? addClass : ""}`}
      href={href}
      {...props}
    >
      <div className={`partners__item-image ${size ? size : ""}`}>
        <img src={url} alt={alt} />
      </div>
    </motion.a>
  );
};

export default Partners;
