import React from "react";
import { ReactSVG } from "react-svg";
import { CircleIconStyled, CircleIconStyledProps } from "../Mixin/Mixin.styled";

type HeartCircleIconProps = {
  isOutline?: boolean;
  onClick: () => void;
} & CircleIconStyledProps;

export const HeartCircleIcon = ({
  isOutline = false,
  color,
  backgroundColor,
  circleSize,
  iconWidth,
  iconHeight,
  onClick,
}: HeartCircleIconProps) => {
  return (
    <CircleIconStyled
      color={color}
      backgroundColor={backgroundColor}
      circleSize={circleSize}
      iconWidth={iconWidth}
      iconHeight={iconHeight}
      onClick={onClick}
    >
      <ReactSVG src={`/assets/icons/heart${isOutline ? "-outline" : ""}.svg`} />
    </CircleIconStyled>
  );
};
