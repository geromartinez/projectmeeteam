import React, { useState } from "react";
import Button from "../components/form/Button";
import Icon from "../components/Icon";
import { motion } from "framer-motion";
import { link } from "fs";

type Props = {};
const faqItems = [
  [
    {
      title: "¿Donde puedo encontrar talento en LATAM?",
      text: "En Meeteam encontrarás los talentos que cumplen con los requerimientos de tu vacante. Se ajustan a perfiles, nivel de experiencia y exigencias de tu empresa.",
    },
    {
      title: "¿Por qué subcontratar talentos por fuera de tu país?",
      text: "Subcontratar por fuera de tu país tiene muchos beneficios, algunos son: Los precios pueden ser 50% menos de lo que tú pagas en tu pais; trabajarás con personas expertas; tendrás un equipo capacitado en talento humano para el bienestar de tu nuevo talento, además trabajaremos en tu misma zona horaria.",
    },
    {
      title:
        "¿Cómo inicio un proceso con Meeteam para conseguir el talento que necesito?",
      text: "Es muy fácil. Registrate en Meeteam Clients o agenda una reunión con nuestro equipo de ventas, allí identificaremos los requerimientos del perfil que tú necesitas y nosotros te enviaremos los currículos de los candidatos que más se ajusten.",
    },
    {
      title:
        "Necesito más personas que apoyen mi equipo, ¿cuánto tiempo me llevará este proceso con Meeteam?",
      text: "Después de reunirnos e identificar las características de los roles, tardaremos desde 24 horas de acuerdo a tus necesidades, en mostrarte las mejores opciones. Siempre queremos que tu equipo tenga al mejor talento que necesitas.",
    },
    {
      title:
        "¿Cómo realizaremos el proceso de selección para contratar el nuevo talento?",
      text: "Después de enviarte las mejores opciones, evaluarás los candidatos y seleccionarás el mejor. Programaremos la entrevista y tú decides.",
    },
  ],
  [
    {
      title:
        "¿Qué costo tiene el proceso de selección de personal con Meeteam?",
      text: "Tendrás dos posibilidades que podrás hablar con nuestro equipo de ventas y seleccionar la que se acomode mejor a tu presupuesto y necesidades: Head hunting o Staffing.",
    },
    {
      title: "¿Cuál es la metodología de trabajo internacional?",
      text: "Nuestro equipo trabaja de forma remota, trabajamos desde casa tiempo completo para tu empresa.",
    },
    {
      title: "¿Cuál será el horario de trabajo de nuestros talentos?",
      text: "Nos ajustamos a tu zona horaria y trabajaremos ocho horas diarias de lunes a viernes.",
    },
    {
      title: "¿Qué perfiles profesionales puedo encontrar en Meeteam?",
      text: "Personas capacitadas en Frontend, Backend, Full Stack, Big Data, Cloud, Cyber Security, Machine Learning, Testing, UX/UI Design, entre otras",
    },
    {
      title: "¿Por qué subcontratar talentos con Meeteam? ",
      text: "Nosotros nos encargamos de que nuestros talentos estén cómodos. Con nuestro equipo de talento humano siempre estaremos trabajando para que sean felices en su trabajo, de esta forma disminuimos la rotación de personal y tu proyecto se cumplirá con buen tiempo y a bajo costo.",
    },
  ],
];
const Faq = (props: Props) => {
  return (
    <section className="faq">
      <div className="autoContainer">
        <div className="faq__inner">
          <motion.h2
            className="_sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            Preguntas Frecuentes
          </motion.h2>
          <div className="faq__row tabWrapper">
            <motion.div
              className="faq__row-column"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              {faqItems[0].map((item, index) => {
                return (
                  <FaqItem
                    key={`faq-item-1-${index}`}
                    title={item.title}
                    text={item.text}
                  />
                );
              })}
            </motion.div>
            <motion.div
              className="faq__row-column"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              {faqItems[1].map((item, index) => {
                return (
                  <FaqItem
                    key={`faq-item-2-${index}`}
                    title={item.title}
                    text={item.text}
                  />
                );
              })}
            </motion.div>
          </div>
          <motion.div
            className="faq__group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="_sm">¿Tienes alguna pregunta?</h3>
            <p className="_lg">
              Escribe directamente al soporte para resolver tus dudas
            </p>
            <a href="mailto:mbc@gmail.com">
            <Button text="Contáctanos" addClass="_white" /></a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

type FaqItemProps = {
  title: string;
  text: string;
};

const FaqItem = ({ title, text }: FaqItemProps) => {
  const [active, setActive] = useState(false);

  return (
    <div className={`faq__tab ${active ? "active" : ""}`}>
      <div
        className={`faq__tab-button ${active ? "active" : ""}`}
        onClick={() => setActive(!active)}
      >
        <span className="text">{title}</span>
        <Icon iconName={"arrowDown"} />
      </div>
      <div className={`faq__tab-content ${active ? "active" : ""}`}>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Faq;
