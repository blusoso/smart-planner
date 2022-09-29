import React from "react";
import { ReactSVG } from "react-svg";
import CircleIcon from "./CircleIcon";

type NextCircleIconProps = {
  className?: string;
  backgroundColor?: string;
  iconWidth?: string;
  color?: string;
  circleSize?: string;
};

export const NextCircleIcon = ({
  className,
  backgroundColor,
  iconWidth,
  color,
  circleSize,
}: NextCircleIconProps) => {
  return (
    <CircleIcon
      className={`m-auto ${className}`}
      iconWidth={iconWidth || "1.375em"}
      iconHeight="auto"
      backgroundColor={backgroundColor || "white"}
      color={color}
      circleSize={circleSize}
    >
      <ReactSVG src="/assets/icons/arrow-forward.svg" />
    </CircleIcon>
  );
};
