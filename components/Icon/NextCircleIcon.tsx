import React from "react";
import { ReactSVG } from "react-svg";
import CircleIcon from "./CircleIcon";

export const NextCircleIcon = () => {
  return (
    <CircleIcon
      className="m-auto"
      iconWidth="1.375em"
      iconHeight="2em"
      backgroundColor="white"
    >
      <ReactSVG src="/assets/icons/arrow-forward.svg" />
    </CircleIcon>
  );
};
