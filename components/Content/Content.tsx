import React from "react";
import { ContentWrapper } from "./Content.styled";
import ReadMore from "./ReadMore/ReadMore";

export type ContentProps = {
  content: string;
};

const Content = ({ content }: ContentProps) => {
  return (
    <ContentWrapper>
      <ReadMore>{content}</ReadMore>
    </ContentWrapper>
  );
};

export default Content;
