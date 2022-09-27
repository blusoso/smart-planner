import styled from "styled-components";

export const NextCircleIconStyled = styled.div`
  background: white;
  width: 2em;
  height: 2em;
  border-radius: 100%;
  margin: auto;

  svg {
    width: 1.375em;
    height: 2em;
    margin: auto;
    fill: ${({ theme }) => theme.greenColor};
  }
`;
