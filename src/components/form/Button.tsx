import React from "react";

type Props = React.ComponentProps<"button"> & {
  addClass?: string;
  text?: string;
  variant?: BUTTON_VARIANTS;
};
export enum BUTTON_VARIANTS {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  TEXT = "text",
  BORDER = "border",
  ICO = "ico",
}

const Button = React.forwardRef<HTMLButtonElement | null, Props>(
  (
    {
      addClass,
      type = "button",
      text,
      variant = BUTTON_VARIANTS.PRIMARY,
      children,
      ...props
    }: Props,
    ref
  ) => {
    const getClassName = (): string => {
      let className = `button button--${variant} `;
      className += addClass ? ` ${addClass}` : "";

      return className;
    };

    return (
      <button
        ref={ref ?? undefined}
        className={getClassName()}
        type={type}
        {...props}
      >
        {text && <span>{text}</span>}
        {children && children}
      </button>
    );
  }
);

export default Button;
