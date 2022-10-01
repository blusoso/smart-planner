import React from "react";
import { ReactSVG } from "react-svg";
import { CircleIconStyled, CircleIconStyledProps } from "../Mixin/Mixin.styled";

type ShareCircleIconProps = {
  isOutline?: boolean;
  onClick: () => void;
} & CircleIconStyledProps;

const shareCircleIcon = ({
  isOutline = false,
  color,
  backgroundColor,
  circleSize,
  iconWidth,
  iconHeight,
  onClick,
}: ShareCircleIconProps) => {
  return (
    <CircleIconStyled
      color={color}
      backgroundColor={backgroundColor}
      circleSize={circleSize}
      iconWidth={iconWidth}
      iconHeight={iconHeight}
      onClick={onClick}
    >
      <ReactSVG src={`/assets/icons/share${isOutline ? "-outline" : ""}.svg`} />
    </CircleIconStyled>
  );
};

export default shareCircleIcon;
