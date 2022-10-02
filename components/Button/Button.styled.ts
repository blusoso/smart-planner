import styled, { css } from "styled-components";

type BaseButtonProps = {
  padding?: string;
  minWidth?: string;
  borderRadius?: string;
};

const BaseButton = ({
  padding,
  minWidth,
  borderRadius,
}: BaseButtonProps) => css`
  padding: ${padding || "0.65em 1.6em"};
  ${minWidth && `min-width: ${minWidth}`};
  border-radius: ${borderRadius || "25px"};
`;

type ButtonStyledProps = {
  fontSize?: string;
} & BaseButtonProps;

export const ButtonStyled = styled.button<ButtonStyledProps>`
  font-size: ${({ fontSize, theme }) => fontSize || theme.smallFontSize};
  text-transform: capitalize;

  &.primary {
    ${({ padding, minWidth, borderRadius }) =>
      BaseButton({ padding, minWidth, borderRadius })}
    color: white;
    background-color: ${({ theme }) => theme.greenColor};
    font-weight: 500;
  }

  &.secondary {
    ${({ padding, minWidth, borderRadius }) =>
      BaseButton({ padding, minWidth, borderRadius })}
    color: ${({ theme }) => theme.grayColor};
    background-color: ${({ theme }) => theme.lightGreenColor};
    font-weight: 400;
  }

  &.secondary--outline {
    ${({ padding, minWidth, borderRadius }) =>
      BaseButton({ padding, minWidth, borderRadius })}
    color: ${({ theme }) => theme.greenColor};
    background-color: ${({ theme }) => theme.lightGreenColor};
    font-weight: 600;
    border: 1px solid ${({ theme }) => theme.greenColor};
  }
`;
