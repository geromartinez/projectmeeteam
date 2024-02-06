import React from "react";
import Button, { BUTTON_VARIANTS } from "../components/form/Button";
import { NavLink } from "react-router-dom";
import Input from "../components/form/Input";

type Props = {};
const socialUrl = process.env.PUBLIC_URL + "/images/social/";
const logo = process.env.PUBLIC_URL + "/images/logo-white.png";
const Footer = (props: Props) => {
  return (
    <footer className="footer">
      <div className="autoContainer">
        <div className="footer__inner">
          <div className="footer__row">
            <div className="footer__group">
              <NavLink to={"/"} className="logo">
                <img src={logo} alt="logo" />
              </NavLink>
              <div className="footer__group-container">
                <NavLink to={"clients"} className="footer__link">
                  <span>Clientes</span>
                </NavLink>
                <NavLink to={"candidates"} className="footer__link">
                  <span>Candidatos</span>
                </NavLink>
                <NavLink to={"blog"} className="footer__link">
                  <span>Blog</span>
                </NavLink>
                <NavLink to={"about-us"} className="footer__link">
                  <span>Equipo</span>
                </NavLink>
                <NavLink to={"contact-us"} className="footer__link">
                  <span>Contáctanos</span>
                </NavLink>
              </div>
              <div className="footer__group-social">
                <a href="https://www.facebook.com/" className="footer__group-button">
                  <span>
                    <img src={socialUrl + "facebook.svg"} alt="facebook" />
                  </span>
                </a>
                <a href="https://www.instagram.com/" className="footer__group-button">
                  <span>
                    <img src={socialUrl + "instagram.svg"} alt="instagram" />
                  </span>
                </a>
                <a href="https://www.youtube.com/" className="footer__group-button">
                  <span>
                    <img src={socialUrl + "ix.svg"} alt="ix" />
                  </span>
                </a>
                <a href="https://www.linkedin.com/" className="footer__group-button">
                  <span>
                    <img src={socialUrl + "linkedIn.svg"} alt="linkedIn" />
                  </span>
                </a>
              </div>
            </div>
            <div className="footer__form">
              <h6 className="text--subTitle">Suscríbete</h6>
              <div className="footer__form-box">
                <Input
                  placeholder="Ingresa tu correo"
                  inputId="footerText"
                  inputSm
                />
                <Button text="Suscríbete" addClass="_white" />
              </div>
              <p>
                Al suscribirte estás de acuerdo con la{" "}
                <NavLink to={"policy"} className="text--underline">
                  Privacy Policy
                </NavLink>
              </p>
            </div>
          </div>
          <div className="footer__copy">
            <p>© 2024 Meeteam. All rights reserved.</p>
            <div className="footer__copy-box">
              <NavLink to={"policy"} className="footer__link _sm">
                <span>Privacy Policy</span>
              </NavLink>
              <NavLink to={"terms"} className="footer__link _sm">
                <span>Terms of Service</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
