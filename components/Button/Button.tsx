import React from "react";
import { ButtonStyled } from "./Button.styled";

export enum BUTTON_TYPE {
  NONE = "none",
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

export enum BUTTON_SIZE {
  SM = "sm",
  MD = "md",
  LG = "lg",
}

export type ButtonProps = {
  type?: BUTTON_TYPE;
  label: string;
};

const Button = ({ label, type = BUTTON_TYPE.NONE }: ButtonProps) => {
  return <ButtonStyled type="button">{label}</ButtonStyled>;
};

export default Button;
