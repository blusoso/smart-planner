import React from "react";
import { ReactSVG } from "react-svg";
import { CircleIconStyled, CircleIconStyledProps } from "../Mixin/Mixin.styled";

type PhoneCircleIconProps = {
  isOutline?: boolean;
  onClick: () => void;
} & CircleIconStyledProps;

const PhoneCircleIcon = ({
  isOutline = false,
  color,
  backgroundColor,
  circleSize,
  iconWidth,
  iconHeight,
  onClick,
}: PhoneCircleIconProps) => {
  return (
    <CircleIconStyled
      color={color}
      backgroundColor={backgroundColor}
      circleSize={circleSize}
      iconWidth={iconWidth}
      iconHeight={iconHeight}
      onClick={onClick}
    >
      <ReactSVG src={`/assets/icons/phone${isOutline ? "-outline" : ""}.svg`} />
    </CircleIconStyled>
  );
};

export default PhoneCircleIcon;
