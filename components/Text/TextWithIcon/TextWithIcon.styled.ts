import styled from "styled-components";

type TextWithIconStyleProps = {
  fontSize?: string;
};

export const TextWithIconStyle = styled.div<TextWithIconStyleProps>`
  color: ${({ theme }) => theme.grayColor};
  font-size: ${({ fontSize, theme }) => fontSize || theme.smallestFontSize};
  font-weight: 400;
`;
