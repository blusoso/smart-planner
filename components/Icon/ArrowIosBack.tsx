import React from "react";
import { ReactSVG } from "react-svg";
import { IconStyledProps } from "../Mixin/Mixin.styled";
import Icon from "./Icon";

type ArrowIosBackProps = {
  isOutline?: boolean;
} & IconStyledProps;

const ArrowIosBack = ({
  isOutline = true,
  iconWidth,
  iconHeight,
  color,
}: ArrowIosBackProps) => {
  return (
    <Icon iconWidth={iconWidth} iconHeight={iconHeight} color={color}>
      <ReactSVG
        src={`/assets/icons/arrow-ios-back${isOutline && "-outline"}.svg`}
      />
    </Icon>
  );
};

export default ArrowIosBack;
