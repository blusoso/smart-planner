import React from "react";
import { ReactSVG } from "react-svg";
import { IconStyledProps } from "../Mixin/Mixin.styled";
import Icon from "./Icon";

const StarIcon = ({ iconWidth, iconHeight, color }: IconStyledProps) => {
  return (
    <Icon iconWidth={iconWidth} iconHeight={iconHeight} color={color}>
      <ReactSVG src="/assets/icons/star.svg" />
    </Icon>
  );
};

export default StarIcon;
