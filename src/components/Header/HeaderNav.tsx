import React from "react";
import Icon from "../Icon";
import { BUTTON_VARIANTS } from "../form/Button";
import Dropdown, { DropdownItem } from "../form/Dropdown";
import InputSelect, { InputSelectItem } from "../form/InputSelect";
import { NavLink } from "react-router-dom";

type Props = {
  menuActive?: boolean;
};

const HeaderNav = ({ menuActive = false }: Props) => {
  return (
    <nav className={`nav ${menuActive ? "active" : ""}`}>
      <div className="nav__inner">
        <div className="nav__group">
          <NavLink to="clients" className="nav__link">
            Clientes
          </NavLink>
          <NavLink to="candidates" className="nav__link">
            Candidatos
          </NavLink>
          <NavLink to="price" className="nav__link">
            Servicios
          </NavLink>
          <NavLink to="blog" className="nav__link">
            Blog
          </NavLink>
          <Dropdown title="Acerca de" variant={BUTTON_VARIANTS.TEXT}>
            <DropdownItem onClick={event =>  window.location.href='/about-us'}>
              <span>Equipo</span>
            </DropdownItem>
            <DropdownItem onClick={event =>  window.location.href='/contact-us'}>
              <span>Contáctanos</span>
            </DropdownItem>
            
          </Dropdown>
        </div>
        <InputSelect
          onChange={(value: string) => {}}
          prefix={<Icon iconName="globe" />}
        >
          <InputSelectItem active value={"ES"} onClick={event =>  window.location.href='/'}>
            <span>ES</span>
          </InputSelectItem>
          <InputSelectItem value={"EN"} onClick={event =>  window.location.href='/'}>
            <span>EN</span>
          </InputSelectItem>
         
        </InputSelect>
        <div className="nav__box">
          <Dropdown
            title="Iniciar Sesión"
            variant={BUTTON_VARIANTS.BORDER}
            addClass="_ico"
            wrapperClass="dropdown--lg"
          >
            <DropdownItem onClick={event =>  window.location.href='/login'}>
              <span>Compañías</span>
            </DropdownItem>
            <DropdownItem onClick={event =>  window.location.href='/login'}>
              <span>Talentos</span>
            </DropdownItem>
           
          </Dropdown>
          <Dropdown
            title="Regístrate"
            addClass="_ico"
            wrapperClass="dropdown--lg"
          >
            <DropdownItem onClick={event =>  window.location.href='/signup-clients'}>
              <span>Compañías</span>
            </DropdownItem>
            <DropdownItem onClick={event =>  window.location.href='/signup-candidates'}>
              <span>Talentos</span>
            </DropdownItem>
            
          </Dropdown>
        </div>
      </div>
    </nav>
  );
};

export default HeaderNav;
