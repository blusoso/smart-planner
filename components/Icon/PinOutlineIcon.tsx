import React from "react";
import { ReactSVG } from "react-svg";
import { IconStyledProps } from "../Mixin/Mixin.styled";
import Icon from "./Icon";

const PinOutlineIcon = ({ iconWidth, iconHeight, color }: IconStyledProps) => {
  return (
    <Icon iconWidth={iconWidth} iconHeight={iconHeight} color={color}>
      <ReactSVG src="/assets/icons/pin-outline.svg" />
    </Icon>
  );
};

export default PinOutlineIcon;
