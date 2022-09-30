import styled from "styled-components";

export const ItemTitle = styled.h3`
  font-weight: 600;
  font-size: ${({ theme }) => theme.defaultFontSize};
  margin-bottom: 0.3em;
`;

export const ButtonPosition = styled.div`
  position: absolute;
  top: 0.3em;
  right: 0;
`;
