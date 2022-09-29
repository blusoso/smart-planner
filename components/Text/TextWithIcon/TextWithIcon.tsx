import React from "react";
import { TextWithIconStyle } from "./TextWithIcon.styled";

type TextWithIconProps = {
  icon: React.ReactNode;
  text: string;
  className?: string;
  fontSize?: string;
};

const TextWithIcon = ({
  icon,
  text,
  className,
  fontSize,
}: TextWithIconProps) => {
  return (
    <div className={`flex items-center ${className}`}>
      {icon}
      <TextWithIconStyle className="pl-1" fontSize={fontSize}>
        {text}
      </TextWithIconStyle>
    </div>
  );
};

export default TextWithIcon;
