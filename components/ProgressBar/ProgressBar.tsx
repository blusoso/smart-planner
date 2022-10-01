import React from "react";
import { ProgressBarContainer, ProgressPercent } from "./ProgressBar.styled";

export type ProgressBarProps = {
  percent: number;
  className?: string;
};

const ProgressBar = ({ percent = 0, className = "" }: ProgressBarProps) => {
  return (
    <ProgressBarContainer className={className}>
      <ProgressPercent width={`${percent}%`} />
    </ProgressBarContainer>
  );
};

export default ProgressBar;
