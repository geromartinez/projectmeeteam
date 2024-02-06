import React, { useEffect, useState } from "react";
import HeaderNav from "./HeaderNav";
import { NavLink, useLocation } from "react-router-dom";
import useSticky from "./hooks/useSticky";

type Props = {};

const Header = (props: Props) => {
  const [menuActive, setMenuActive] = useState(false);
  const isSticky = useSticky();
  const { pathname } = useLocation();

  useEffect(() => {
    setMenuActive(false);
  }, [pathname]);

  return (
    <header className={`header ${isSticky ? "sticky" : ""}`} id="header">
      <div className="autoContainer">
        <div className="header__inner">
          <NavLink to="/" className="logo">
            <img src="./images/logo.png" alt="logo" />
          </NavLink>
          <HeaderNav menuActive={menuActive} />
          <button
            className={`burger ${menuActive ? "active" : ""}`}
            onClick={() => setMenuActive(!menuActive)}
          >
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
