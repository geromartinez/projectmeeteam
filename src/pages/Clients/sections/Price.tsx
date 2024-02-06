import React, { useState } from "react";
import Button from "../../../components/form/Button";
import Icon from "../../../components/Icon";
import {  motion } from "framer-motion";
import PricePop from "./popups/PricePop";
import PricePopPro from "./popups/PricePopPro";
import Tooltip from "../../../components/Tooltip";

type Props = {};
enum POPUP_TYPES {
  standard = "standard",
  pro = "proffesional",
}

const Price = (props: Props) => {
  const [popup, setPopup] = useState<POPUP_TYPES | null>(null);
  const closePopup = () => setPopup(null);

  return (
    <section className="price">
      <div className="autoContainer">
        <div className="price__inner">
          <div className="price__container">
            <motion.div
              className="price__header"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.0 }}
            >
              <span>Planes & Pricing</span>
              <h2 className="_sm">
                Acceso a profesionales verificados de diferentes áreas
              </h2>
              <p className="_lg">
                Facilitamos tu búsqueda para que encuentres y contrates desde 24
                horas en adelante al talento que desees.
              </p>
            </motion.div>
            <div className="price__row">
              <motion.div
                className="price__card _orange"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
              >
                <div className="price__card-box">
                  <div className="price__card-text">
                    <strong className="_sm">Staffing</strong>
                    <strong className="_lg">
                      USD 1k
                      <small>/perfiles desde</small>
                    </strong>
                    <span>perfiles desde</span>
                  </div>
                  <Button text="Recomendado" className="price__button" />
                </div>
                <p>
                  <span className="_hideMob">
                    Profesionales Verificados (Tech & Non-Tech)
                  </span>
                  <span className="_hideDesktop">
                    Profesionales (Tech & Non-Tech)
                  </span>
                </p>
                <div className="price__card-container">
                  <h6>Incluye:</h6>
                  <ul className="price__card-list">
                    <li>
                      <Icon addClass="ico--check" iconName="checkIco" />
                      <span>Pago de Nómina</span>
                    </li>
                    <li>
                      <Icon addClass="ico--check" iconName="checkIco" />
                      <span>Acompañamiento al Talento</span>
                    </li>
                    <li>
                      <Icon addClass="ico--check" iconName="checkIco" />
                      <span>Gestión Administrativa del Talento</span>
                    </li>
                    <li>
                      <Icon addClass="ico--check" iconName="checkIco" />
                      <span>Plan de Bienestar al Talento</span>
                    </li>
                  </ul>
                </div>
                <Button
                  text="VER PLANES"
                  onClick={() => setPopup(POPUP_TYPES.standard)}
                  addClass="_orange"
                />
              </motion.div>
              <motion.div
                className="price__card _blue"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="price__card-text">
                  <strong className="_sm _extraSm">Head-Hunting/RPO</strong>
                  <strong className="_lg">
                    USD 500
                    <small>/perfiles desde</small>
                  </strong>
                  <span>perfiles desde</span>
                </div>
                <p>
                  <span className="_hideMob">
                    Profesionales Verificados (Tech & Non-Tech)
                  </span>
                  <span className="_hideDesktop">
                    Profesionales (Tech & Non-Tech)
                  </span>
                </p>
                <div className="price__card-container _secondary">
                  <h6>Incluye:</h6>
                  <ul className="price__card-list">
                    <li>
                      <Icon addClass="ico--close" iconName="closeIco" />
                      <span>Pago de Nómina</span>
                    </li>
                    <li>
                      <Icon addClass="ico--close" iconName="closeIco" />
                      <span>Acompañamiento al Talento</span>
                    </li>
                    <li>
                      <Icon addClass="ico--close" iconName="closeIco" />
                      <span>Gestión Administrativa del Talento</span>
                    </li>
                    <li>
                      <Icon addClass="ico--close" iconName="closeIco" />
                      <span>Plan de Bienestar al Talento</span>
                    </li>
                  </ul>
                </div>
                <Button
                  text="VER PLANES"
                  onClick={() => setPopup(POPUP_TYPES.pro)}
                />
              </motion.div>
            </div>
            <div className="price__planes">
              <motion.div
                className="price__planes-container"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
              >
                <h5 className="text--primary">PERFILES</h5>
                <div className="price__planes-row">
                  <div className="price__planes-item">
                    <span>Senior AB</span>
                    <Tooltip
                      text="En esta categoría se encuentran los perfiles con alta especialización o responsabilidad, ideales para roles de liderazgo o áreas muy específicas."
                      icon="tooltipIco"
                    />
                  </div>
                  <div className="price__planes-item">
                    <Icon iconName="checkIco" addClass="_check" />
                  </div>
                  <div className="price__planes-item">
                    <Icon iconName="checkIco" addClass="_check" />
                  </div>
                </div>
                <div className="price__planes-row">
                  <div className="price__planes-item">
                    <span>Senior CD</span>
                    <Tooltip
                      text="Esta categoría incluye perfiles más generales, ideales para puestos intermedios o iniciales en la cadena de responsabilidades."
                      icon="tooltipIco"
                    />
                  </div>
                  <div className="price__planes-item">
                    <Icon iconName="checkIco" addClass="_check" />
                  </div>
                  <div className="price__planes-item">
                    <Icon iconName="checkIco" addClass="_check" />
                  </div>
                </div>
                <div className="price__planes-row">
                  <div className="price__planes-item">
                    <span>Midlevel</span>
                    <Tooltip
                      text=" El seniority de los perfiles se relaciona con los años de experiencia."
                      icon="tooltipIco"
                    />
                  </div>
                  <div className="price__planes-item">
                    <Icon iconName="checkIco" addClass="_check" />
                  </div>
                  <div className="price__planes-item">
                    <Icon iconName="checkIco" addClass="_check" />
                  </div>
                </div>
                <div className="price__planes-row">
                  <div className="price__planes-item">
                    <span>Junior</span>
                    <Tooltip
                      text="Perfil con poca experiencia pero muchas habilidades"
                      icon="tooltipIco"
                    />
                  </div>
                  <div className="price__planes-item">
                    <Icon iconName="checkIco" addClass="_check" />
                  </div>
                  <div className="price__planes-item">
                    <Icon iconName="checkIco" addClass="_check" />
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="price__planes-container"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h5 className="text--primary">MODALIDADES</h5>
                <div className="price__planes-row _space">
                  <div className="price__planes-item _column">
                    <span>Remoto</span>
                    <Button text="Recomendado" className="price__button _sm" />
                  </div>
                  <div className="price__planes-item">
                    <Icon iconName="checkIco" addClass="_check" />
                  </div>
                  <div className="price__planes-item">
                    <Icon iconName="checkIco" addClass="_check" />
                  </div>
                </div>
                <div className="price__planes-row">
                  <div className="price__planes-item">
                    <span>Híbrido</span>
                  </div>
                  <div className="price__planes-item">
                    <Icon iconName="checkIco" addClass="_check" />
                  </div>
                  <div className="price__planes-item">
                    <Icon iconName="checkIco" addClass="_check" />
                  </div>
                </div>
                <div className="price__planes-row">
                  <div className="price__planes-item">
                    <span>On-Site</span>
                  </div>
                  <div className="price__planes-item">
                    <Icon iconName="checkIco" addClass="_check" />
                  </div>
                  <div className="price__planes-item">
                    <Icon iconName="checkIco" addClass="_check" />
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="price__planes-container"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                <h5 className="text--primary">CONTRATACIÓN</h5>
                <div className="price__planes-row">
                  <div className="price__planes-item">
                    <span>Pago de Nómina</span>
                    <Tooltip
                      text="Reduce operatividad en los pagos, libérate del manejo
                          de impuestos y reduce la burocracia. Trabajamos con
                          todas las monedas."
                      icon="tooltipIco"
                    />
                  </div>
                  <div className="price__planes-item">
                    <Icon iconName="checkIco" addClass="_check" />
                  </div>
                  <div className="price__planes-item">
                    <Icon iconName="closeIco" addClass="_uncheck" />
                  </div>
                </div>
                <div className="price__planes-row">
                  <div className="price__planes-item">
                    <span>Acompañamiento al Talento</span>
                    <Tooltip
                      text="Respaldo de nuestra metodología de talento humano que logra mantener una tasa de rotación menor al 1%."
                      icon="tooltipIco"
                    />
                  </div>
                  <div className="price__planes-item">
                    <Icon iconName="checkIco" addClass="_check" />
                  </div>
                  <div className="price__planes-item">
                    <Icon iconName="closeIco" addClass="_uncheck" />
                  </div>
                </div>
                <div className="price__planes-row">
                  <div className="price__planes-item">
                    <span>Gestión Administrativa del Talento</span>
                    <Tooltip
                      text="Facilitamos toda la gestión administrativa, desde el Onboarding, vacaciones, incapacidades, equipos adicionales que requiera el talento."
                      icon="tooltipIco"
                    />
                  </div>
                  <div className="price__planes-item">
                    <Icon iconName="checkIco" addClass="_check" />
                  </div>
                  <div className="price__planes-item">
                    <Icon iconName="closeIco" addClass="_uncheck" />
                  </div>
                </div>
                <div className="price__planes-row">
                  <div className="price__planes-item">
                    <span>Plan de Bienestar al Talento</span>
                    <Tooltip
                      text="Planes de incentivos y de bienestar a los colaboradores."
                      icon="tooltipIco"
                    />
                  </div>
                  <div className="price__planes-item">
                    <Icon iconName="checkIco" addClass="_check" />
                  </div>
                  <div className="price__planes-item">
                    <Icon iconName="closeIco" addClass="_uncheck" />
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="price__planes-container"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h5 className="text--primary">GARANTÍA</h5>
                <div className="price__planes-row">
                  <div className="price__planes-item">
                    <span>Tiempo de Entrega Personalizado</span>
                  </div>
                  <div className="price__planes-item">
                    <Icon iconName="checkIco" addClass="_check" />
                  </div>
                  <div className="price__planes-item">
                    <Icon iconName="checkIco" addClass="_check" />
                  </div>
                </div>
                <div className="price__planes-row">
                  <div className="price__planes-item">
                    <span>Nivel de Inglés Personalizado</span>
                  </div>
                  <div className="price__planes-item">
                    <Icon iconName="checkIco" addClass="_check" />
                  </div>
                  <div className="price__planes-item">
                    <Icon iconName="checkIco" addClass="_check" />
                  </div>
                </div>
                <div className="price__planes-row">
                  <div className="price__planes-item">
                    <span>Entrega de Reemplazo ante posible eventualidad</span>
                  </div>
                  <div className="price__planes-item">
                    <Icon iconName="checkIco" addClass="_check" />
                  </div>
                  <div className="price__planes-item">
                    <Icon iconName="closeIco" addClass="_uncheck" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          <motion.div
            className="price__card _info"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="price__card-row">
              <div className="price__card-content">
                <h3 className="_lg">Plan Personalizado</h3>
                <p>
                  <strong>
                    Exploremos juntos la opción que más se ajuste a tus
                    necesidades.
                  </strong>
                  <br />
                  <span>
                    Accede a la red más talentosa de LATAM y encuentra perfiles
                    verificados desde 3k USD (Tech & Non-Tech)
                  </span>
                </p>
              </div>
              <div className="price__card-group">
                <div className="price__card-text">
                  <strong className="_sm _extraSm">Plan Personalizado</strong>
                  <strong className="_lg">
                    $2.5k
                    <small>/perfiles desde</small>
                  </strong>
                  <span>perfiles desde</span>
                </div>
                <p>Profesionales (Tech & Non-Tech)</p>
              </div>
              <div className="price__card-container">
                <h6>Incluye:</h6>
                <ul className="price__card-list">
                  <li>
                    <Icon iconName="checkIco" addClass="ico--check _white" />
                    <span>Búsqueda de Candidatos</span>
                  </li>
                  <li>
                    <Icon iconName="checkIco" addClass="ico--check _white" />
                    <span>Consultoría</span>
                  </li>
                  <li>
                    <Icon iconName="checkIco" addClass="ico--check _white" />
                    <span>Contacto 24/7</span>
                  </li>
                </ul>
              </div>
              <a href="https://calendly.com/es">
              <Button text="Agenda en Calendly" addClass="_white" /></a>
            </div>
          </motion.div>
        </div>
      </div>
      {popup === POPUP_TYPES.standard && (
        <PricePop text="Nuestros Planes Staffing" onClose={closePopup} />
      )}
      {popup === POPUP_TYPES.pro && (
        <PricePopPro
          text="Nuestros Planes Head-Hunting/RPO"
          onClose={closePopup}
        />
      )}
    </section>
  );
};

export default Price;
