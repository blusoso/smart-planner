import React from "react";
import { ReactSVG } from "react-svg";
import { CircleIconStyled, CircleIconStyledProps } from "../Mixin/Mixin.styled";

type EditCircleIconProps = {
  isOutline?: boolean;
  onClick: () => void;
} & CircleIconStyledProps;

export const EditCircleIcon = ({
  isOutline = false,
  color,
  backgroundColor,
  circleSize,
  iconWidth,
  iconHeight,
  onClick,
}: EditCircleIconProps) => {
  return (
    <CircleIconStyled
      color={color}
      backgroundColor={backgroundColor}
      circleSize={circleSize}
      iconWidth={iconWidth}
      iconHeight={iconHeight}
      onClick={onClick}
    >
      <ReactSVG src={`/assets/icons/edit${isOutline ? "-outline" : ""}.svg`} />
    </CircleIconStyled>
  );
};
