import React from "react";
import { ReactSVG } from "react-svg";
import { IconStyledProps } from "../Mixin/Mixin.styled";
import Icon from "./Icon";

type CalendarIconProps = {
  isOutline?: boolean;
} & IconStyledProps;

const CalendarIcon = ({
  isOutline = false,
  iconWidth,
  iconHeight,
  color,
}: CalendarIconProps) => {
  return (
    <Icon iconWidth={iconWidth} iconHeight={iconHeight} color={color}>
      <ReactSVG src={`/assets/icons/calendar${isOutline && "-outline"}.svg`} />
    </Icon>
  );
};

export default CalendarIcon;
