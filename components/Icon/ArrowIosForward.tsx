import React from "react";
import { ReactSVG } from "react-svg";
import { IconStyledProps } from "../Mixin/Mixin.styled";
import Icon from "./Icon";

type ArrowIosForwardProps = {
  isOutline?: boolean;
} & IconStyledProps;

const ArrowIosForward = ({
  isOutline = true,
  iconWidth,
  iconHeight,
  color,
}: ArrowIosForwardProps) => {
  return (
    <Icon iconWidth={iconWidth} iconHeight={iconHeight} color={color}>
      <ReactSVG
        src={`/assets/icons/arrow-ios-forward${isOutline && "-outline"}.svg`}
      />
    </Icon>
  );
};

export default ArrowIosForward;
