import styled from "styled-components";

export const ReadMoreStyle = styled.span`
  text-transform: capitalize;
  cursor: pointer;

  span:first-child {
    color: ${({ theme }) => theme.grayColor};
  }

  span:last-child {
    padding-left: 3px;
    color: ${({ theme }) => theme.greenColor};
    font-weight: 500;
  }
`;
