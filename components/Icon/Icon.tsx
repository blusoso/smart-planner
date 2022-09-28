import React from "react";
import { IconStyled, IconStyledProps } from "../Mixin/Mixin.styled";

export type IconProps = {
  children: JSX.Element;
} & IconStyledProps;

const Icon = ({ iconWidth, iconHeight, color, children }: IconProps) => {
  return (
    <IconStyled iconWidth={iconWidth} iconHeight={iconHeight} color={color}>
      {children}
    </IconStyled>
  );
};

export default Icon;
