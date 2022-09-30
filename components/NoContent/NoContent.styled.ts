import styled from "styled-components";

export const NoContentContainer = styled.div`
  border: 3px solid ${({ theme }) => theme.lightGreenColor};
  border-radius: ${({ theme }) => theme.mainBorderRadius};
  text-align: center;
  padding: 2.3em 2em;

  p {
    color: ${({ theme }) => theme.grayColor};
  }

  h1 {
    color: ${({ theme }) => theme.greenColor};
  }
`;
