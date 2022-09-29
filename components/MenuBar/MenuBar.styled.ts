import styled from "styled-components";

export const MenuBarContainer = styled.div`
  position: fixed;
  bottom: 0;
  background: white;
  width: 100%;
  padding: 0.625em 1.5em 1.7em;
  box-shadow: 0px -14px 28px -2px rgba(24, 75, 29, 0.02),
    0px -18px 100px -6px rgba(24, 39, 75, 0.02);
  z-index: 99;
`;

type MenuProps = {
  iconSize: string;
  isActive: boolean;
  isMain: boolean;
};

export const Menu = styled.div<MenuProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  svg {
    fill: ${({ theme, isActive, isMain }) =>
      isActive || isMain ? theme.greenColor : theme.grayColor};
    width: ${({ iconSize }) => iconSize || "28px"};
    cursor: pointer;
  }

  .icon-pointer-active {
    position: absolute;
    bottom: -1.7em;
  }
`;

export const PlusCircle = styled.div`
  border: 1px solid ${({ theme }) => theme.greenColor};
  border-radius: 100%;
  width: 2.6em;
  height: 2.6em;
  display: flex;
  justify-content: center;
  align-items: center;
`;
