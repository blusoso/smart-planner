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
    fill: ${({ theme }) => theme.grayColor};
    top: 50%;
    transform: translate(0, -50%);
    ${({ isStartIcon }) => isStartIcon && "left: 1.3em;"}
    ${({ isEndIcon }) => isEndIcon && "right: 1.3em;"}
  }
`;

export const InputStyled = styled.input<IconPositionType>`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.lightGrayColor};
  border-radius: ${({ theme }) => theme.mainBorderRadius};
  padding: 0.9em ${({ isEndIcon }) => (isEndIcon ? "3.5em" : "1.8em")} 0.9em
    ${({ isStartIcon }) => (isStartIcon ? "3.5em" : "1.8em")};
  box-sizing: border-box;
  font-weight: 500;
  font-size: ${({ theme }) => theme.smallFontSize};

  &::placeholder {
    color: ${({ theme }) => theme.grayColor};
    font-weight: 400;
    font-family: "Montserrat", sans-serif;
  }

  &:focus {
    outline: none;
  }
`;
