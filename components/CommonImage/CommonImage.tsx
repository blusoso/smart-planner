import React from "react";
import { CommonImageStyled } from "./CommonImage.styled";

export type CommonImageProps = {
  className?: string;
  src: string;
  alt?: string;
  w?: string;
  h?: string;
  borderRadius?: string;
  isCircle?: boolean;
};

const CommonImage = ({
  className,
  src,
  alt,
  w,
  h,
  borderRadius,
  isCircle,
}: CommonImageProps) => {
  return (
    <CommonImageStyled
      className={className}
      src={src}
      alt={alt || src}
      width={w}
      height={h}
      borderRadius={borderRadius}
      isCircle={isCircle}
    />
  );
};

export default CommonImage;
