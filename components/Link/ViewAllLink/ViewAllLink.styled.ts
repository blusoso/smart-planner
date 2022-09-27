import styled from "styled-components";

export const ViewAllLinkButton = styled.div`
  color: ${({ theme }) => theme.greenColor};
  cursor: pointer;

  svg {
    width: 1.1em;
    fill: ${({ theme }) => theme.greenColor};
  }
`;
