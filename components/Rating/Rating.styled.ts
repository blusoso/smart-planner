import styled from "styled-components";

export const RatingStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: fit-content;
  width: 100%;

  span {
    font-size: ${({ theme }) => theme.smallFontSize};
    font-weight: 600;
  }
`;

export const ReviewCount = styled.div`
  color: ${({ theme }) => theme.grayColor};
  margin-left: 3px;
`;
