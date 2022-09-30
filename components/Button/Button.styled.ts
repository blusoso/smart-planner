import styled from "styled-components";

type ButtonStyledProps = {
  padding?: string;
  minWidth?: string;
  fontSize?: string;
  borderRadius?: string;
};

export const ButtonStyled = styled.button<ButtonStyledProps>`
  font-size: ${({ fontSize, theme }) => fontSize || theme.smallFontSize};
  text-transform: capitalize;
  padding: ${({ padding }) => padding || "0.65em 1.6em"};
  ${({ minWidth }) => `min-width: ${minWidth}`};
  border-radius: ${({ borderRadius, theme }) =>
    borderRadius || theme.mainBorderRadius};

  &.secondary {
    color: ${({ theme }) => theme.grayColor};
    background-color: ${({ theme }) => theme.lightGreenColor};
    font-weight: 400;
  }

  &.secondary--outline {
    color: ${({ theme }) => theme.greenColor};
    background-color: ${({ theme }) => theme.lightGreenColor};
    font-weight: 600;
    border: 1px solid ${({ theme }) => theme.greenColor};
  }
`;
