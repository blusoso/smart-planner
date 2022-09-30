import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { NextCircleIcon } from "../Icon/NextCircleIcon";
import { NoContentContainer } from "./NoContent.styled";

export type NoContentProps = {
  title: string;
  subTitle?: string;
};

const NoContent = ({ title, subTitle }: NoContentProps) => {
  const themeContext = useContext(ThemeContext);

  return (
    <NoContentContainer>
      <p className="small-font font-light">{subTitle}</p>
      <h1 className="font-semibold mb-3">{title}</h1>

      <NextCircleIcon
        backgroundColor={themeContext.greenColor}
        color="white"
        iconWidth="30px"
        circleSize="44px"
      />
    </NoContentContainer>
  );
};

export default NoContent;
