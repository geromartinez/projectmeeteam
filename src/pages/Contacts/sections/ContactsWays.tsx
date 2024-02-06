import React from "react";
import { motion } from "framer-motion";

type Props = {};

const imagesUrl = process.env.PUBLIC_URL + "/images/contacts/";
const ContactsWays = (props: Props) => {
  return (
    <section className="contacts">
      <div className="autoContainer">
        <div className="contacts__inner">
          <motion.div
            className="contacts__item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <div className="contacts__item-image">
              <img src={imagesUrl + "email.svg"} alt="email" />
            </div>
            <div className="contacts__item-box">
              <h3 className="_sm">Correo</h3>
              <p>
                ¿Necesitas un plan personalizado? Escríbenos para resolver tus
                dudas
              </p>
            </div>
            <div className="contacts__item-links">
              <div className="contacts__item-group">
                <strong>Para Compañías</strong>
                <a href="mailto:sales@mbcgroup.co">
                  <span>sales@mbcgroup.co</span>
                </a>
                <a href="mailto:gerencia@mbcgroup.co">
                  <span>gerencia@mbcgroup.co</span>
                </a>
              </div>
              <div className="contacts__item-group">
                <strong>Para Compañías</strong>
                <a href="mailto:contact@mbcgroup.co">
                  <span>contact@mbcgroup.co</span>
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="contacts__item _secondary"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="contacts__item-image">
              <img src={imagesUrl + "calendly.svg"} alt="calendly" />
            </div>
            <div className="contacts__item-box">
              <h3 className="_sm">Calendly</h3>
              <p>
                ¿Quieres una llamada rápida? Selecciona una fecha para que te
                llamemos
              </p>
            </div>
            <a href="https://calendly.com/es">
              <span>Selecciona una fecha</span>
            </a>
          </motion.div>
          <motion.div
            className="contacts__item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="contacts__item-image">
              <img src={imagesUrl + "phone.svg"} alt="phone" />
            </div>
            <div className="contacts__item-box">
              <h3 className="_sm">Teléfonos</h3>
              <p>
                ¿Tienes algún inconveniente? Llámanos para resolver tus dudas
              </p>
            </div>
            <div className="contacts__item-links">
              <div className="contacts__item-group">
                <strong>Para Compañías</strong>
                <a href="tel:+1-(201)-862-7028">
                  <span>+1-(201)-862-7028</span>
                </a>
                <a href="tel:+57-300-598-9444">
                  <span>+57-300-598-9444</span>
                </a>
              </div>
              <div className="contacts__item-group">
                <strong>Para Talentos</strong>
                <a href="tel:+57-304-564-7081">
                  <span>+57-304-564-7081</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactsWays;
