import React, { useState } from "react";
import Button from "../components/form/Button";
import Icon from "../components/Icon";
import { motion } from "framer-motion";

type Props = {};
const faqItems = [
  [
    {
      title: "¿Qué debo de hacer para conseguir trabajo con Meeteam?",
      text: "Regístrate y crea tu usuario en nuestra plataforma Meeteam candidates y accede a todas las vacantes que tenemos para ti, postúlate y nuestro equipo te contactará si tu perfil hace match con la necesidad de nuestros clientes.",
    },
    {
      title: "¿Por qué trabajar con Meeteam?",
      text: "En Meeteam encontrarás estabilidad laboral, tendrás una excelente remuneración y trabajarás desde casa. Buscamos que tú tengas calidad de vida.",
    },
    {
      title:
        "¿Que experiencia y conocimientos busca Meeteam en las personas?",
      text: "Buscamos personas expertas en Frontend, Backend, Full Stack, Big Data, Cloud, Cyber Security, Machine Learning, Testing, UX/UI Design, entre otros",
    },
    {
      title:
        "¿Cómo puedo contactar con el equipo de Meeteam si tengo alguna pregunta sobre algún proceso?",
      text: "Puedes enviarnos al correo: contact@mbcgroup.co o escríbenos a nuestro WhatsApp: +57 320 452 5300",
    },
    {
      title:
        "¿Cómo sería un proceso de selección con Meeteam?",
      text: "Primero nos pondremos en contacto contigo. Luego realizamos algunas validaciones de forma virtual. Si finalmente eres seleccionado, realizaremos una oferta económica para que conozcas el cargo.",
    },
  ],
  [
    {
      title:
        "¿Cuánto tiempo tarda el proceso de selección en Meeteam?",
      text: "El proceso puede durar entre dos a cuatro semanas, dependiendo de los tiempos de contratación de cada cliente.",
    },
    {
      title: "¿Meeteam ofrece oportunidades de crecimiento profesional?",
      text: "Sí, en Meeteam fomentamos el crecimiento y desarrollo profesional de nuestros talentos a través de capacitaciones y oportunidades de ascenso.",
    },
    {
      title: "¿Qué tipo de proyectos maneja Meeteam?",
      text: "Manejamos una variedad de proyectos en áreas como desarrollo de software, inteligencia artificial, análisis de datos, entre otros. A corto, mediano y largo plazo",
    },
    {
      title: "¿Cómo es el ambiente laboral en Meeteam?",
      text: "En Meeteam, promovemos un ambiente de trabajo colaborativo, inclusivo y dinámico, donde cada miembro del equipo es valorado.",
    },
    {
      title: "¿Meeteam permite el trabajo remoto o flexible?",
      text: "Sí, ofrecemos opciones de trabajo remoto y horarios flexibles para adaptarnos a las necesidades de nuestros talentos.",
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
