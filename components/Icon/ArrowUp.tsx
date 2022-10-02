import React from "react";
import { ReactSVG } from "react-svg";
import { IconStyledProps } from "../Mixin/Mixin.styled";
import Icon from "./Icon";

type ArrowUpProps = {
  isOutline?: boolean;
} & IconStyledProps;

const ArrowUp = ({
  isOutline = true,
  iconWidth,
  iconHeight,
  color,
}: ArrowUpProps) => {
  return (
    <Icon iconWidth={iconWidth} iconHeight={iconHeight} color={color}>
      <ReactSVG src={`/assets/icons/arrow-up${isOutline && "-outline"}.svg`} />
    </Icon>
  );
};

export default ArrowUp;
