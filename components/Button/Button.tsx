import React from "react";
import { ButtonStyled } from "./Button.styled";

export enum BUTTON_TYPE {
  NONE = "none",
  PRIMARY = "primary",
  SECONDARY = "secondary",
  SECONDARY_OUTLINE = "secondary--outline",
}

export enum BUTTON_SIZE {
  SM = "sm",
  MD = "md",
  LG = "lg",
}

export type ButtonProps = {
  id?: string;
  className?: string;
  type?: BUTTON_TYPE;
  label?: string;
  icon?: string | React.ReactNode;
  minWidth?: string;
  padding?: string;
  fontSize?: string;
  borderRadius?: string;
  children?: JSX.Element;
  onClick: () => void;
};

const Button = ({
  id,
  className = "",
  label,
  type = BUTTON_TYPE.NONE,
  icon,
  minWidth,
  padding,
  fontSize,
  borderRadius,
  children,
  onClick,
}: ButtonProps) => {
  return (
    <ButtonStyled
      id={id}
      type="button"
      className={`flex items-center ${className} ${type}`}
      minWidth={minWidth}
      padding={padding}
      fontSize={fontSize}
      borderRadius={borderRadius}
      onClick={onClick}
    >
      {icon && <span className="mr-1">{icon}</span>}
      {label || children}
    </ButtonStyled>
  );
};

export default Button;
