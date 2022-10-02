import styled from "styled-components";

export const UserReviewName = styled.p`
  font-weight: 600;
`;

export const ReviewTime = styled.div`
  color: ${({ theme }) => theme.grayColor};
  font-size: ${({ theme }) => theme.smallFontSize};
  font-weight: 500;
`;
