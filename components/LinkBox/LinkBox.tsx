import React from "react";
import { LinkBoxContainer, LinkBoxSecondary } from "./LinkBox.styled";

export type LinkBoxProps = {
  className?: string;
  padding?: string;
  label: string | React.ReactNode;
  value?: string | React.ReactNode;
  iconRight?: React.ReactNode;
  onClick: () => void;
};

const LinkBox = ({
  className,
  padding,
  label,
  value,
  iconRight,
  onClick,
}: LinkBoxProps) => {
  return (
    <LinkBoxContainer
      className={className}
      padding={padding}
      hasValue={!!value}
      onClick={onClick}
    >
      <div className="label">{label}</div>
      {value && (
        <LinkBoxSecondary>
          {value}
          {iconRight}
        </LinkBoxSecondary>
      )}
    </LinkBoxContainer>
  );
};

export default LinkBox;
