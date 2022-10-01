import styled from "styled-components";

const ProgressStyled = styled.div`
  height: 1em;
  border-radius: ${({ theme }) => theme.mainBorderRadius};
`;

export const ProgressBarContainer = styled(ProgressStyled)`
  display: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.lightGrayColor};
`;

type ProgressPercentProps = {
  width: string;
};

export const ProgressPercent = styled(ProgressStyled)<ProgressPercentProps>`
  display: absolute;
  top: 0;
  background-color: ${({ theme }) => theme.greenColor};
  width: ${({ width }) => width || "0%"};
`;
