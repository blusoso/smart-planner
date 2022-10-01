import React from "react";
import { ReactSVG } from "react-svg";
import { IconStyledProps } from "../Mixin/Mixin.styled";
import Icon from "./Icon";

type DiagonalArrowRightUpIconProps = {
  isOutline?: boolean;
} & IconStyledProps;

const DiagonalArrowRightUpIcon = ({
  isOutline = true,
  iconWidth,
  iconHeight,
  color,
}: DiagonalArrowRightUpIconProps) => {
  return (
    <Icon iconWidth={iconWidth} iconHeight={iconHeight} color={color}>
      <ReactSVG
        src={`/assets/icons/diagonal-arrow-right-up${
          isOutline && "-outline"
        }.svg`}
      />
    </Icon>
  );
};

export default DiagonalArrowRightUpIcon;
