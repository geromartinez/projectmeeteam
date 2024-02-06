import React, { useState } from "react";
import Button, { BUTTON_VARIANTS } from "../../../components/form/Button";
import Icon from "../../../components/Icon";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

type Props = {};

const imagesUrl = process.env.PUBLIC_URL + "/images/vacants/";
const Jobs = (props: Props) => {
  const [test, settest] = useState(false);
  return (
    <section className="jobs">
      <div className="autoContainer">
        <div className="jobs__inner">
          <div className="jobs__container">
            <motion.div
              className="jobs__container-title"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              <span>Áreas</span>
              <h2 className="_sm">
                Vacantes disponibles para todas las áreas de trabajo
              </h2>
            </motion.div>
            <motion.div
              className="jobs__container-group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="_lg">
                Únete a nuestra plataforma Meeteam, ten acceso a diferentes
                ofertas laborales que se adapten a tus habilidades técnicas.
                Encuentra en nuestra sección novedades tutoriales y
                recomendaciones para potenciar tu perfil y hacer match con
                empresas internacionales.
              </p>
              <div className="jobs__container-box">
                <Button onClick={event =>  window.location.href='/login'} text="Acceder" />
                <Button onClick={event =>  window.location.href='/signup-candidates'} text="Regístrate" variant={BUTTON_VARIANTS.TEXT}>
                  <Icon iconName="arrowRight" />
                </Button>
              </div>
            </motion.div>
          </div>
          <div className="jobs__wrapper">
            <div className="jobs__wrapper-row">
              <Swiper
                slidesPerView={1}
                slidesPerGroup={1}
                spaceBetween={16}
                loop={true}
                modules={[Autoplay]}
                speed={2500}
                autoplay={{
                  delay: 500,
                  reverseDirection: true,
                }}
                breakpoints={{
                  370: {
                    slidesPerView: "auto",
                    spaceBetween: 32,
                  },
                }}
              >
                <SwiperSlide>
                  <JobsItem
                    title="Customer Service"
                    icoUrl={imagesUrl + "ico-1.png"}
                    imageUrl={imagesUrl + "image-1.png"}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <JobsItem
                    title="Frontend"
                    icoUrl={imagesUrl + "ico-2.png"}
                    imageUrl={imagesUrl + "image-2.png"}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <JobsItem
                    title="Marketing"
                    icoUrl={imagesUrl + "ico-3.png"}
                    imageUrl={imagesUrl + "image-3.png"}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <JobsItem
                    title="Administration"
                    icoUrl={imagesUrl + "ico-4.png"}
                    imageUrl={imagesUrl + "image-4.png"}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <JobsItem
                    title="Direction/ Managemen"
                    icoUrl={imagesUrl + "ico-5.png"}
                    imageUrl={imagesUrl + "image-5.png"}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <JobsItem
                    title="Customer Service"
                    icoUrl={imagesUrl + "ico-1.png"}
                    imageUrl={imagesUrl + "image-1.png"}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <JobsItem
                    title="Frontend"
                    icoUrl={imagesUrl + "ico-2.png"}
                    imageUrl={imagesUrl + "image-2.png"}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <JobsItem
                    title="Marketing"
                    icoUrl={imagesUrl + "ico-3.png"}
                    imageUrl={imagesUrl + "image-3.png"}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <JobsItem
                    title="Administration"
                    icoUrl={imagesUrl + "ico-4.png"}
                    imageUrl={imagesUrl + "image-4.png"}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <JobsItem
                    title="Direction/ Managemen"
                    icoUrl={imagesUrl + "ico-5.png"}
                    imageUrl={imagesUrl + "image-5.png"}
                  />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="jobs__wrapper-row">
              <Swiper
                slidesPerView={1}
                spaceBetween={16}
                loop={true}
                modules={[Autoplay]}
                speed={2500}
                autoplay={{
                  delay: 500,
                }}
                breakpoints={{
                  370: {
                    slidesPerView: "auto",
                    spaceBetween: 32,
                  },
                }}
              >
                <SwiperSlide>
                  <JobsItem
                    title="Customer Service"
                    icoUrl={imagesUrl + "ico-1.png"}
                    imageUrl={imagesUrl + "image-1.png"}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <JobsItem
                    title="Frontend"
                    icoUrl={imagesUrl + "ico-2.png"}
                    imageUrl={imagesUrl + "image-2.png"}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <JobsItem
                    title="Marketing"
                    icoUrl={imagesUrl + "ico-3.png"}
                    imageUrl={imagesUrl + "image-3.png"}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <JobsItem
                    title="Administration"
                    icoUrl={imagesUrl + "ico-4.png"}
                    imageUrl={imagesUrl + "image-4.png"}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <JobsItem
                    title="Direction/ Managemen"
                    icoUrl={imagesUrl + "ico-5.png"}
                    imageUrl={imagesUrl + "image-5.png"}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <JobsItem
                    title="Customer Service"
                    icoUrl={imagesUrl + "ico-1.png"}
                    imageUrl={imagesUrl + "image-1.png"}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <JobsItem
                    title="Frontend"
                    icoUrl={imagesUrl + "ico-2.png"}
                    imageUrl={imagesUrl + "image-2.png"}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <JobsItem
                    title="Marketing"
                    icoUrl={imagesUrl + "ico-3.png"}
                    imageUrl={imagesUrl + "image-3.png"}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <JobsItem
                    title="Administration"
                    icoUrl={imagesUrl + "ico-4.png"}
                    imageUrl={imagesUrl + "image-4.png"}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <JobsItem
                    title="Direction/ Managemen"
                    icoUrl={imagesUrl + "ico-5.png"}
                    imageUrl={imagesUrl + "image-5.png"}
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

type JobsItemProps = {
  icoUrl: string;
  imageUrl: string;
  title: string;
};
export const JobsItem = ({
  icoUrl,
  imageUrl,
  title,
}: JobsItemProps) => {
  return (
    <div className="jobs__item">
      <div className="jobs__item-ico">
        <img src={icoUrl} alt="ico" />
      </div>
      <strong className="jobs__item-text">{title}</strong>
      <div className="jobs__item-image">
        <img src={imageUrl} alt="img" />
      </div>
    </div>
  );
};

export default Jobs;
