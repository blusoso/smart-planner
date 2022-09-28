import React from "react";
import { CircleIconStyled, CircleIconStyledProps } from "../Mixin/Mixin.styled";

export type CircleIconProps = {
  className?: string;
  children: JSX.Element;
} & CircleIconStyledProps;

const CircleIcon = ({
  className,
  iconWidth,
  iconHeight,
  color,
  backgroundColor,
  circleSize,
  children,
}: CircleIconProps) => {
  return (
    <CircleIconStyled
      className={className}
      iconWidth={iconWidth}
      iconHeight={iconHeight}
      color={color}
      backgroundColor={backgroundColor}
      circleSize={circleSize}
    >
      {children}
    </CircleIconStyled>
  );
};

export default CircleIcon;
