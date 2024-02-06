import React, { useState } from "react";
import Button from "../../../components/form/Button";
import Icon from "../../../components/Icon";
import { motion } from "framer-motion";

type Props = {};

const imagesUrl = process.env.PUBLIC_URL + "/images/team/";
const TEAMDATA = [
  {
    imgUrl: "team-1.png",
    fullName: "Mateo Burgos",
    position: "CEO & Founder",
    linkedInUrl: "https://www.linkedin.com/in/mateoburgosmbc/",
  },
  {
    imgUrl: "team-2.png",
    fullName: "Vanessa Bedoya",
    position: "Co-Founder",
    linkedInUrl: "https://www.linkedin.com/in/vanessa-bedoya/",
  },
  {
    imgUrl: "team-3.png",
    fullName: "Johana Balaguera",
    position: "Directora de Operaciones",
    linkedInUrl: "https://www.linkedin.com/in/johanabalaguera/",
  },
  {
    imgUrl: "team-4.png",
    fullName: "Leydi Burgos",
    position: "Líder de Talento Humano",
    linkedInUrl: "https://www.linkedin.com/in/leydiburgos/",
  },
  {
    imgUrl: "team-5.jpg",
    fullName: "Leidy Madrid",
    position: "Business Developer & Marketing",
    linkedInUrl: "https://www.linkedin.com/in/leidy-madrid/",
  },
  {
    imgUrl: "team-6.png",
    fullName: "Camila López",
    position: "Asitente de Gerencia",
    linkedInUrl: "https://www.linkedin.com/in/camila-l%C3%B3pez-p%C3%A9rez-9a34bb244/",
  },
  {
    imgUrl: "team-7.png",
    fullName: "María Fernanda Alba",
    position: "Directora Creativa",
    linkedInUrl: "https://www.linkedin.com/in/maria-fernanda-alba-valencia/",
  },
  {
    imgUrl: "team-8.png",
    fullName: "Alejandra Giraldo",
    position: "Abogada",
    linkedInUrl: "https://www.linkedin.com/in/abogada-maria-alejandra-giraldo-giraldo-0034461b4/",
  },
  {
    imgUrl: "team-9.png",
    fullName: "Lina Bedoya",
    position: "Business Development Executive",
    linkedInUrl: "https://www.linkedin.com/in/lina-bedoya-/",
  },
  {
    imgUrl: "team-10.jpg",
    fullName: "Alejandra Ocampo",
    position: "Contadora",
    linkedInUrl: "https://www.linkedin.com/in/alejandra-ocampo-loaiza-contaduria/",
  },
  {
    imgUrl: "team-11.jpg",
    fullName: "José Angarita",
    position: "Coordinador de Reclutamiento",
    linkedInUrl: "https://www.linkedin.com/in/jdavidangarita/",
  },
  {
    imgUrl: "team-12.png",
    fullName: "Juan Aragón",
    position: "Director TI",
    linkedInUrl: "/",
  },
  {
    imgUrl: "team-13.png",
    fullName: "Juan Miguel",
    position: "Reclutador",
    linkedInUrl: "https://www.linkedin.com/in/juan-cuervo-575901263/",
  },
  {
    imgUrl: "team-14.jpg",
    fullName: "Mateo Vélez",
    position: "Senior Software Developer",
    linkedInUrl: "/",
  },

  {
    imgUrl: "team-16.jpg",
    fullName: "Juan Gómez",
    position: "Senior Software Developer",
    linkedInUrl: "https://www.linkedin.com/in/juan-david-gomez-monroy-a23458287/",
  },
  {
    imgUrl: "team-17.png",
    fullName: "Alejandro Varón",
    position: "Senior Software Developer",
    linkedInUrl: "https://www.linkedin.com/in/alejandro-var%C3%B3n-torres-a753a586/",
  },
];
const container = {
  hidden: { opacity: 1, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};
const item = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
  },
};
const Team = (props: Props) => {
  const [collapse, setCollapse] = useState(true);

  return (
    <section className="team" id="team">
      <div className="autoContainer">
        <div className="team__inner">
          <motion.div
            className="team__box"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.0 }}
          >
            <strong className="text--hideDesk">Equipo</strong>
            <h2 className="_sm">
              <span className="text--hideDesk">Conoce nuestro equipo</span>
              <span className="text--hideMob">Nuestro equipo</span>
            </h2>
            <p className="_lg">
              <span className="text--hideDesk">
                Contamos con el mejor talento humano de latinoamérica
              </span>
              <span className="text--hideMob">
                Conoce los talentos detrás de Meeteam
              </span>
            </p>
          </motion.div>
          <motion.div className="team__container">
            <motion.div
              className="team__container-row"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              {[...TEAMDATA]
                .splice(0, collapse ? 8 : TEAMDATA.length)
                .map((data, index) => (
                  <motion.div
                    key={index}
                    className="team__item active"
                    variants={item}
                  >
                    <TeamPerson
                      imgUrl={data.imgUrl}
                      fullName={data.fullName}
                      position={data.position}
                      linkedInUrl={data.linkedInUrl}
                    />
                  </motion.div>
                ))}
            </motion.div>
            <Button
              text={collapse ? "Más miembros" : "Ver Menos"}
              addClass="_white"
              onClick={() => setCollapse(!collapse)}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export type TeamPersonType = {
  imgUrl: string;
  fullName: string;
  position: string;
  linkedInUrl?: string;
};

const TeamPerson = ({
  imgUrl,
  fullName,
  position,
  linkedInUrl,
}: TeamPersonType) => {
  return (
    <>
      <div className="team__item-image">
        <div className="ratioImage">
          <img src={imagesUrl + imgUrl} alt="team" />
        </div>
      </div>
      <div className="team__item-group">
        <div className="team__item-box">
          <strong>{fullName}</strong>
          <span>{position}</span>
        </div>
        {linkedInUrl && (
          <a href={linkedInUrl} className="button button--ico">
            <Icon iconName="linkedIn" />
          </a>
        )}
      </div>
    </>
  );
};

export default Team;
