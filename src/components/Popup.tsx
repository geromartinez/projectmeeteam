import React, { useEffect } from "react";
import Icon from "./Icon";
import Button, { BUTTON_VARIANTS } from "./form/Button";
import ReactDom from "react-dom";
import {  motion } from "framer-motion";

const innerAnimations = {
  initial: {
    opacity: 0,
    y: 40,
    scale: 0.96,
  },
  whileInView: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
};

export type PopupProps = {
  onClose?: () => void;
};

const Popup = ({
  onClose,
  children,
}: PopupProps & {
  children?: any;
}) => {
  const closeFunc = () => {
    if (onClose) onClose();
  };

  useEffect(() => {
    const body = document.querySelector("body");
    let paddingRight = window.innerWidth - document.documentElement.clientWidth;
    if (!body) return;

    body.style.overflow = "hidden";
    body.style.paddingRight = `${paddingRight}px`;

    return () => {
      body.style.overflow = "";
      body.style.paddingRight = "";
    };
  }, []);

  return ReactDom.createPortal(
    <motion.div
      className="popup"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div className="popup__inner" {...innerAnimations}>
        <Button
          variant={BUTTON_VARIANTS.ICO}
          addClass="popup-close"
          onClick={closeFunc}
        >
          <Icon iconName="closeIco" addClass="" />
        </Button>
        {children}
      </motion.div>
    </motion.div>,
    document.getElementById("popups") as HTMLElement
  );
};

export default Popup;
