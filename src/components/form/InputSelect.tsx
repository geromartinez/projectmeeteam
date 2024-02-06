import React, { ReactNode, useEffect, useState } from "react";

export type InputSelectProps = {
  addClass?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  prefix?: any;
  children: (typeof InputSelectItem)[] | any[];
};

const InputSelect = ({
  addClass = "",
  onChange,
  prefix,
  placeholder = " ",
  children,
}: InputSelectProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const [active, setActive] = useState<string | null>(null);
  const [activeNode, setActiveNode] = useState<any | null>(null);

  const ref = React.useRef<HTMLDivElement | null>(null);

  const updateActive = ({
    value,
    children,
  }: {
    value: string;
    children: ReactNode;
  }) => {
    setActive(value);
    setActiveNode(children);
    if (onChange) onChange(value);
    setCollapsed(true);
  };
  const toggle = () => setCollapsed(!collapsed);

  useEffect(() => {
    const activeItem = children.find(
      (child) =>
        //@ts-ignore
        child?.props?.active
    );
    if (!activeItem) {
      setActive(null);
      setActiveNode(null);
    } else {
      //@ts-ignore
      setActive(activeItem.props.value);
      //@ts-ignore
      setActiveNode(activeItem?.props?.children ?? null);
      setCollapsed(true);
    }
  }, [children]);

  useEffect(() => {
    const listener = ({ target }: React.MouseEvent): void => {
      if (!ref.current) return;
      //@ts-ignore
      if (!ref.current?.contains(target)) setCollapsed(true);
    };
    //@ts-ignore
    if (!collapsed) window.addEventListener("click", listener);

    //@ts-ignore
    return () => window.removeEventListener("click", listener);
  }, [collapsed]);

  return (
    <div
      ref={ref}
      className={`input input--select ${addClass} ${collapsed ? "" : "active"}`}
      onClick={toggle}
    >
      <div className="input__selected">
        {prefix && <strong>{prefix}</strong>}
        {activeNode ? (
          activeNode
        ) : (
          <span className="_muted">{placeholder}</span>
        )}
      </div>
      <ul className="input__dropdown">
        {children.map((child) => {
          let childProps = child?.props;
          return {
            ...(child as object),
            props: {
              ...childProps,
              active: childProps.value === active,
              onClick: () => updateActive(childProps),
            },
          } as ReactNode;
        })}
      </ul>
    </div>
  );
};

export type InputSelectElementProps = {
  active?: boolean;
  value: string;
} & React.ComponentProps<"li">;

export const InputSelectItem = ({
  active,
  className,
  value,
  ...props
}: InputSelectElementProps) => {
  return (
    <li
      className={`input__dropdown-item ${active ? "active" : ""}`}
      {...props}
    />
  );
};
export default InputSelect;
