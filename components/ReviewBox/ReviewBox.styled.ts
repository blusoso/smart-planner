import styled from "styled-components";

export const ReviewBoxContainer = styled.div`
  border: 3px solid ${({ theme }) => theme.lightGreenColor};
  border-radius: ${({ theme }) => theme.mainBorderRadius};
  padding: 1.4em 1.3em;
`;

export const ReviewScore = styled.div`
  font-size: ${({ theme }) => theme.largeFontSize};
  font-weight: 600;

  span {
    color: ${({ theme }) => theme.grayColor};
    font-size: ${({ theme }) => theme.defaultFontSize};
    font-weight: 500;
  }
`;

export const ReviewCount = styled.div`
  color: ${({ theme }) => theme.grayColor};
  font-size: ${({ theme }) => theme.smallFontSize};
  margin: 0.3em 0 0.4em;
`;

export const EachStarCount = styled.div`
  color: ${({ theme }) => theme.grayColor};
  font-size: ${({ theme }) => theme.smallestFontSize};
  display: flex;
`;
