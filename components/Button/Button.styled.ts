import styled from "styled-components";

type ButtonStyledProps = {
  isActive: boolean;
};

export const ButtonStyled = styled.button<ButtonStyledProps>`
  color: ${({ theme, isActive }) =>
    isActive ? theme.greenColor : theme.grayColor};
  font-weight: ${({ isActive }) => (isActive ? "600" : "500")};
  ${({ theme, isActive }) =>
    isActive && `border: 1px solid ${theme.greenColor}`};
  font-size: 0.688em;
  text-transform: capitalize;
  background-color: ${({ theme }) => theme.LightGreenColor};
  padding: 0.75em 1.6em;
  border-radius: ${({ theme }) => theme.mainBorderRadius};
`;
