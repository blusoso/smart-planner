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
  label: string;
  icon?: string | React.ReactNode;
  isActive?: boolean;
  onClick: () => void;
};

const Button = ({
  id,
  className = "",
  label,
  type = BUTTON_TYPE.NONE,
  icon,
  isActive = false,
  onClick,
}: ButtonProps) => {
  return (
    <ButtonStyled
      id={id}
      type="button"
      className={`${className} ${type}`}
      isActive={isActive}
      onClick={onClick}
    >
      {icon && <span className="mr-1">{icon}</span>}
      {label}
    </ButtonStyled>
  );
};

export default Button;
