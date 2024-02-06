import React from "react";
import { MotionProps, motion } from "framer-motion";
import { title } from "process";

type Props = {};

const imagesUrl = process.env.PUBLIC_URL + "/images/";

const Company = (props: Props) => {
  return (
    <section className="company">
      <div className="autoContainer">
        <div className="company__inner">
          <div className="company__content">
            <motion.h6
              className="text--subTitle"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.0 }}
            >
              Para Compañías
            </motion.h6>
            <CompanyItem
              title="Haz tus operaciones más eficientes"
              text="Nuestro equipo de administración del talento asegura el cumplimiento de estándares internacionales; contratación, beneficios y leyes laborales locales, para que tú no tengas que hacerlo."
              addClass="active"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
            />
            <CompanyItem
              title="Optimiza tus proyectos con más del 70% de reducción de tiempo del proceso de reclutamiento."
              text="Consigue profesionales cualificados para unirse a tu equipo desde 24 horas en adelante. Candidatos evaluados y validados por nuestro equipo especializado."
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            />
            <CompanyItem
              title="Ahorra hasta 30 k USD al mes de presupuesto de reclutamiento"
              text="Gestionamos todo el proceso de reclutamiento, eliminando la necesidad de invertir en diferentes plataformas de empleo."
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="company__image"
          >
            <div className="ratioImage">
              <img src={imagesUrl + "company.png"} alt="company" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const CompanyItem = ({
  title,
  text,
  addClass,
  ...props
}: MotionProps & {
  title: string;
  text: string;
  addClass?: string;
}): JSX.Element => {
  return (
    <motion.div
      className={`company__group ${addClass ? addClass : ""}`}
      {...props}
    >
      <h4>{title}</h4>
      <p>{text}</p>
    </motion.div>
  );
};

export default Company;
