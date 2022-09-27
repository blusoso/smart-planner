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
