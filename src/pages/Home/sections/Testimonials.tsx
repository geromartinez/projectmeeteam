import React from "react";
import { Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { MotionProps, motion } from "framer-motion";

import "swiper/css";
import "swiper/css/scrollbar";

type Props = {};

const imagesUrl = process.env.PUBLIC_URL + "/images/avatars/";
const logoUrl = process.env.PUBLIC_URL + "/images/";

const Testimonials = (props: Props) => {
  const [swiper, setSwiper] = React.useState(null);

  return (
    <section className="testimonials">
      <div className="autoContainer">
        <div className="testimonials__inner" data-swiper-parent>
          <motion.h3
            className="_lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.0 }}
          >
            Que dice la gente de <span className="text--primary2">Meeteam</span>
          </motion.h3>
          <motion.div
            className="testimonials__row-wrapper"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Swiper
              slidesPerView={1}
              spaceBetween={16}
              modules={[Scrollbar]}
              scrollbar={{ draggable: true }}
              breakpoints={{
                370: {
                  slidesPerView: "auto",
                  spaceBetween: 32,
                },
              }}
            >
              <SwiperSlide>
                <TestimonialsSlide
                  name="Leydi Burgos"
                  position="MBC"
                  text="“En el tiempo que llevo laborando en Meeteam puedo decir que es la capacidad de seleccionar mi propio horario, me ayuda a compaginar mis actividades diarias. No ha pasado una temporada donde no sintiera apoyo e interés por mi desarrollo personal, mi rendimiento y mi salud mental.”"
                  avatarURL="avatar-1.png"
                  logoURL="logo-black.png"
                />
              </SwiperSlide>
              <SwiperSlide>
                <TestimonialsSlide
                  name="Vanessa Bedoya"
                  position="MBC"
                  text="“Trabajar con Meeteam ha sido la mejor decisión, el trato súper cercano y profesional, me brindan un soporte y apoyo continuo, fortalezco mi vida personal y laboral con experiencias como el programa de bienestar Mvibes.”"
                  avatarURL="avatar-2.png"
                  logoURL="logo-black.png"
                />
              </SwiperSlide>
              <SwiperSlide>
                <TestimonialsSlide
                  name="María Fernanda Alba"
                  position="MBC"
                  text="“Podría decir que el salario competitivo, la ventaja de poder organizar mi propio horario, pero la cereza del pastel sería el trato de la compañía hacia sus empleados. Se siente una proximidad y confianza entre el empleado y la compañía que no es común.”"
                  avatarURL="avatar-3.png"
                  logoURL="logo-black.png"
                />
              </SwiperSlide>
              <SwiperSlide>
                <TestimonialsSlide
                  name="Lina Bedoya"
                  position="MBC"
                  text="“Lo mejor de trabajar en Mbc es la flexibilidad en todo sentido, en cuanto a contratos, horario, tiempo, vacaciones, la oportunidad de crecimiento y la calidad humana de todo el personal de Meeteam, aprecian las ideas nuevas, Me siento escuchado.”"
                  avatarURL="avatar-4.png"
                  logoURL="logo-black.png"
                />
              </SwiperSlide>
              <SwiperSlide>
                <TestimonialsSlide
                  name="Camila López"
                  position="MBC"
                  text="“Existe transparencia en la comunicación y esto me da la tranquilidad de que siempre estoy enterado de las cosas que suceden en lo referente a mi desempeño.”"
                  avatarURL="avatar-5.png"
                  logoURL="logo-black.png"
                />
              </SwiperSlide>
              <SwiperSlide>
                <TestimonialsSlide
                  name="Juan Aragón"
                  position="MBC"
                  text="“Me siento en confianza con el equipo, Meeteam se preocupa por la paz mental y el crecimiento profesional y personal de todos.”"
                  avatarURL="avatar-6.png"
                  logoURL="logo-black.png"
                />
              </SwiperSlide>
              <SwiperSlide>
                <TestimonialsSlide
                  name="Alejandro Varón"
                  position="MBC"
                  text="“Por el manejo que puedo dar a mi tiempo, el apoyo de todo el equipo y la experiencia que tienen en el campo.”"
                  avatarURL="avatar-7.png"
                  logoURL="logo-black.png"
                />
              </SwiperSlide>
              <SwiperSlide>
                <TestimonialsSlide
                  name="Johana Balaguera"
                  position="MBC"
                  text="“Definitivamente sí, por la metodología de trabajo en general, la independencia en horarios, la atención por parte de recursos humanos, el interés general en el bienestar y el ambiente laboral con los diferentes equipos de trabajo.”"
                  avatarURL="avatar-8.png"
                  logoURL="logo-black.png"
                />
              </SwiperSlide>
            </Swiper>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TestimonialsSlide = (props: {
  text: string;
  name: string;
  position: string;
  avatarURL: string;
  logoURL: string;
}) => {
  return (
    <div className="testimonials__slide">
      <div className="testimonials__slide-group">
        <div className="avatar">
          <img src={imagesUrl + props.avatarURL} alt="avatar" />
        </div>
        <div className="testimonials__slide-box">
          <strong>{props.name}</strong>
          <span>{props.position}</span>
        </div>
      </div>
      <p className="_lg">{props.text}</p>
      <a href="/" className="logo">
        <img src={logoUrl + props.logoURL} alt="logo" />
      </a>
    </div>
  );
};

export default Testimonials;
