import styled from "styled-components";

type LinkBoxContainerProps = {
  hasValue: boolean;
  padding?: string;
};

export const LinkBoxContainer = styled.div<LinkBoxContainerProps>`
  display: flex;
  justify-content: ${({ hasValue }) => (hasValue ? "space-between" : "center")};
  align-items: center;
  padding: ${({ padding }) => padding || "1em 1.5em"};
  background-color: ${({ theme }) => theme.lightGreenColor};
  border-radius: ${({ theme }) => theme.mainBorderRadius};
  color: ${({ theme }) => theme.greenColor};
  font-size: ${({ theme }) => theme.smallFontSize};

  p {
    font-weight: 500;
  }
`;

export const LinkBoxSecondary = styled.div`
  font-weight: 500;
  color: ${({ theme }) => theme.grayColor};
  display: flex;
  align-items: center;
  gap: 2px;
`;
