import styled from "styled-components";

type ButtonStyledProps = {
  isActive: boolean;
};

export const ButtonStyled = styled.button<ButtonStyledProps>`
  font-size: 0.688em;
  text-transform: capitalize;
  padding: 0.75em 1.6em;
  border-radius: ${({ theme }) => theme.mainBorderRadius};

  &.secondary {
    color: ${({ theme }) => theme.grayColor};
    background-color: ${({ theme }) => theme.lightGreenColor};
    font-weight: 500;
  }

  &.secondary--outline {
    color: ${({ theme }) => theme.greenColor};
    background-color: ${({ theme }) => theme.lightGreenColor};
    font-weight: 600;
    border: 1px solid ${({ theme }) => theme.greenColor};
  }
`;
