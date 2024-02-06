import React from "react";
import { motion } from "framer-motion";

type Props = {};

const imagesUrl = process.env.PUBLIC_URL + "/images/talants/";
const logoUrl = process.env.PUBLIC_URL + "/images/logo-blue.png";
const Talant = (props: Props) => {
  return (
    <section className="talant">
      <div className="autoContainer">
        <div className="talant__inner">
          <motion.div
            className="talant__title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <strong>Talentos de Latam</strong>
            <span className="talant__title-ico">
              <img src={logoUrl} alt="logo" />
            </span>
            <strong>Compañías Globales</strong>
          </motion.div>
          <div className="talant__container-wrapper">
            <div className="talant__container">
              <motion.div
                className="talant__container-row"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
              >
                <div className="talant__item">
                  <span className="talant__item-ico">
                    <img src={imagesUrl + "it.png"} alt="it" />
                  </span>
                  <span className="text">Development & IT</span>
                </div>
                <div className="talant__item">
                  <span className="talant__item-ico">
                    <img src={imagesUrl + "arts.png"} alt="arts" />
                  </span>
                  <span className="text">Design/ Graphic Arts</span>
                </div>
                <div className="talant__item">
                  <span className="talant__item-ico">
                    <img src={imagesUrl + "office.png"} alt="office" />
                  </span>
                  <span className="text">Administration/ Office</span>
                </div>
              </motion.div>
              <motion.div
                className="talant__container-row _lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="talant__item">
                  <span className="talant__item-ico">
                    <img src={imagesUrl + "finance.png"} alt="finance" />
                  </span>
                  <span className="text">Accounting/ Finance</span>
                </div>
                <div className="talant__item">
                  <span className="talant__item-ico">
                    <img src={imagesUrl + "legal.png"} alt="legal" />
                  </span>
                  <span className="text">Legal</span>
                </div>
                <div className="talant__item">
                  <span className="talant__item-ico">
                    <img src={imagesUrl + "warehouse.png"} alt="warehouse" />
                  </span>
                  <span className="text">
                    Warehouse/ Logistics/ Transportation
                  </span>
                </div>
                <div className="talant__item">
                  <span className="talant__item-ico">
                    <img src={imagesUrl + "service.png"} alt="service" />
                  </span>
                  <span className="text">Costumer Service</span>
                </div>
              </motion.div>
              <motion.div
                className="talant__container-row _sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                <div className="talant__item">
                  <span className="talant__item-ico">
                    <img src={imagesUrl + "specialist.png"} alt="specialist" />
                  </span>
                  <span className="text">
                    Human Resources and Recruitment Specialist
                  </span>
                </div>
                <div className="talant__item">
                  <span className="talant__item-ico">
                    <img src={imagesUrl + "marketing.png"} alt="marketing" />
                  </span>
                  <span className="text">
                    Marketing/ Advertising/ Communication
                  </span>
                </div>
              </motion.div>
              <motion.div
                className="talant__container-row _lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="talant__item">
                  <span className="talant__item-ico">
                    <img src={imagesUrl + "management.png"} alt="management" />
                  </span>
                  <span className="text">Direction/ Management</span>
                </div>
                <div className="talant__item">
                  <span className="talant__item-ico">
                    <img
                      src={imagesUrl + "talemarketing.png"}
                      alt="talemarketing"
                    />
                  </span>
                  <span className="text">Callcenter/ Telemarketing</span>
                </div>
                <div className="talant__item">
                  <span className="talant__item-ico">
                    <img src={imagesUrl + "sales.png"} alt="sales" />
                  </span>
                  <span className="text">
                    Sales and Telemarketing Representatives
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Talant;
