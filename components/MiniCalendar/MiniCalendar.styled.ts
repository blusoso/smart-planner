import styled from "styled-components";
import { ScrollHorizontal } from "../Mixin/Mixin.styled";

export const MiniCalendarWrapper = styled(ScrollHorizontal)`
  display: flex;
  gap: 0.4em;
  margin-right: -1.2em;
`;

type DateTextProps = {
  isSelected: boolean;
};

export const DateText = styled.h2<DateTextProps>`
  margin-top: 0.3em;
  font-size: ${({ theme }) => theme.defaultFontSize};
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.greenColor : theme.blackColor};
`;
