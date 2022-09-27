import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: 52px auto 52px;
  gap: 1em;
`;

export const WelcomeUser = styled.div`
  margin-top: 0.5em;

  p {
    color: ${({ theme }) => theme.grayColor};
  }

  h1 {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;
