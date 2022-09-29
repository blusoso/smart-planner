import styled from "styled-components";

export const HideScrollBar = styled.div`
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ScrollHorizontal = styled(HideScrollBar)`
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
`;

export type IconStyledProps = {
  iconWidth?: string;
  iconHeight?: string;
  color?: string;
};

export const IconStyled = styled.div<IconStyledProps>`
  svg {
    width: ${({ iconWidth }) => iconWidth || "1.75em"};
    height: ${({ iconHeight }) => iconHeight || "auto"};
    fill: ${({ color, theme }) => color || theme.greenColor};
  }
`;

export type CircleIconStyledProps = {
  backgroundColor?: string;
  circleSize?: string;
} & IconStyledProps;

export const CircleIconStyled = styled.div<CircleIconStyledProps>`
  background: ${({ theme, backgroundColor }) =>
    backgroundColor || theme.lightGreenColor};
  width: ${({ circleSize }) => circleSize || "2em"};
  height: ${({ circleSize }) => circleSize || "2em"};
  border-radius: 100%;
  position: relative;
  cursor: pointer;

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: ${({ iconWidth }) => iconWidth || "1.75em"};
    height: ${({ iconHeight }) => iconHeight || "auto"};
    fill: ${({ color, theme }) => color || theme.greenColor};
  }
`;

export const FlexCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
