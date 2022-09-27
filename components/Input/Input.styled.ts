import styled from "styled-components";

type IconPositionType = {
  isStartIcon: boolean;
  isEndIcon: boolean;
};

export const InputWrapper = styled.div<IconPositionType>`
  position: relative;
  width: 100%;

  svg {
    position: absolute;
    width: 24px;
    fill: ${({ theme }) => theme.textSecondaryColor};
    top: 50%;
    transform: translate(0, -50%);
    ${({ isStartIcon }) => isStartIcon && "left: 1.5em;"}
    ${({ isEndIcon }) => isEndIcon && "right: 1.5%;"}
  }
`;

export const InputStyled = styled.input<IconPositionType>`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.grayColor};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 1.5em ${({ isEndIcon }) => (isEndIcon ? "4em" : "1.8em")} 1.2em
    ${({ isStartIcon }) => (isStartIcon ? "4em" : "1.8em")};
  box-sizing: border-box;
  font-weight: 500;

  &::placeholder {
    color: ${({ theme }) => theme.textSecondaryColor};
    font-weight: 400;
    font-family: "Montserrat", sans-serif;
  }

  &:focus {
    outline: none;
  }
`;
