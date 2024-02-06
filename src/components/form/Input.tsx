import React from "react";

type Props = React.ComponentProps<"input"> & {
  addClass?: string;
  text?: string;
  inputId?: string;
  inputType?: string;
  inputSm?: Boolean;
  placeholder?: string;
  labelText?: string;
};

const Input = React.forwardRef<HTMLInputElement | null, Props>(
  (
    {
      addClass,
      text,
      inputId,
      ref: _,
      children,
      inputSm,
      inputType,
      placeholder,
      labelText,
      ...props
    }: Props,
    ref
  ) => {
    const getClassName = (): string => {
      let className = `input`;
      className += addClass ? ` ${addClass}` : "";

      return className;
    };
    if (inputSm) {
      return (
        <div className={getClassName()} {...props}>
          <input
            ref={ref ?? undefined}
            id={inputId}
            type={inputType ? inputType : "text"}
            placeholder={placeholder}
          />
        </div>
      );
    } else {
      return (
        <div className="input__wrapper">
          <label htmlFor={inputId}>{labelText}</label>
          <div ref={ref ?? undefined} className={getClassName()} {...props}>
            <input
              id={inputId}
              type={inputType ? inputType : "text"}
              placeholder={placeholder}
            />
          </div>
        </div>
      );
    }
  }
);

export default Input;
