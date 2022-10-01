import React from "react";
import { ReactSVG } from "react-svg";
import { CircleIconStyled, CircleIconStyledProps } from "../Mixin/Mixin.styled";

type PlusCircleIconProps = {
  isOutline?: boolean;
  onClick?: () => void;
} & CircleIconStyledProps;

const PlusCircleIcon = ({
  isOutline = false,
  color,
  backgroundColor,
  circleSize,
  iconWidth,
  iconHeight,
  onClick,
}: PlusCircleIconProps) => {
  return (
    <CircleIconStyled
      color={color}
      backgroundColor={backgroundColor}
      circleSize={circleSize}
      iconWidth={iconWidth}
      iconHeight={iconHeight}
      onClick={onClick}
    >
      <ReactSVG
        src={`/assets/icons/plus-circle${isOutline ? "-outline" : ""}.svg`}
      />
    </CircleIconStyled>
  );
};

export default PlusCircleIcon;
