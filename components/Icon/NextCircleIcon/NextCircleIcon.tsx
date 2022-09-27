import React from "react";
import { ReactSVG } from "react-svg";
import { NextCircleIconStyled } from "./NextCircleIcon.styled";

export const NextCircleIcon = () => {
  return (
    <NextCircleIconStyled>
      <ReactSVG src="/assets/icons/arrow-forward.svg" />
    </NextCircleIconStyled>
  );
};
