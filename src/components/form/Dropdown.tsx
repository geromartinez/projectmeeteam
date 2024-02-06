import React, {  useEffect, useState } from "react";
import Button, { BUTTON_VARIANTS } from "./Button";
import Icon from "../Icon";
import { Link, LinkProps } from "react-router-dom";

export type DropdownProps = {
  title: string;
  addClass?: string;
  wrapperClass?: string;
  variant?: BUTTON_VARIANTS;
  children: any;
};

const Dropdown = ({
  addClass = "",
  title = "",
  variant = BUTTON_VARIANTS.PRIMARY,
  wrapperClass = "",
  children,
}: DropdownProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(true);

  const ref = React.useRef<HTMLButtonElement | null>(null);

  const toggle = () => setCollapsed(!collapsed);

  useEffect(() => {
    const listener = ({ target }: React.MouseEvent): void => {
      if (!ref.current) return;
      //@ts-ignore
      // if (!ref.current?.contains(target))

      if (
        !(target === ref.current || ref.current.contains(target as Node)) &&
        !collapsed
      ) {
        setCollapsed(true);
      }
    };
    let timout = null;
    if (!collapsed) {
      //@ts-ignore
      window.addEventListener("click", listener);
    }

    //@ts-ignore
    return () => window.removeEventListener("click", listener);
  }, [collapsed]);

  return (
    <div className={`dropdown ${wrapperClass} ${collapsed ? "" : "active"}`}>
      <Button
        ref={ref}
        variant={variant}
        addClass={`dropdown__button ${addClass} ${collapsed ? "" : "active"}`}
        onClick={toggle}
      >
        {<span>{title}</span>}
        <Icon iconName={"arrowDown"} />
      </Button>
      <div className={`dropdown__content  ${collapsed ? "" : "active"}`}>
        {children}
      </div>
    </div>
  );
};

type DropdownElementType = {
  addClass?: string;
};

export const DropdownItem = ({
  addClass,
  className,
  ...props
}: DropdownElementType & React.ComponentProps<"div">) => {
  return <div className={`dropdown__content-item ${addClass}`} {...props} />;
};

export const DropdownItemLink = ({
  addClass,
  className,
  ...props
}: DropdownElementType & LinkProps) => {
  return <Link className={`dropdown__content-item ${addClass}`} {...props} />;
};
export default Dropdown;
