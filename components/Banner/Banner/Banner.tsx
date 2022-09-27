import React from "react";
import { BannerContent, BannerIconWrapper, BannerImage } from "./Banner.styled";

export type BannerProps = {
  backgroundImage: string;
  backgroundPosition?: string;
  w?: string;
  h?: string;
  borderRadius?: string;
  isGreenOverlay?: boolean;
  title: string;
  description: string;
  icon: React.ReactNode;
  onClick?: () => void;
};

const Banner = ({
  backgroundImage,
  backgroundPosition = "center",
  w,
  h,
  borderRadius,
  isGreenOverlay,
  title,
  description,
  icon,
  onClick,
}: BannerProps) => {
  return (
    <BannerImage
      backgroundImage={backgroundImage}
      backgroundPosition={backgroundPosition}
      isGreenOverlay={isGreenOverlay}
      w={w}
      h={h}
      borderRadius={borderRadius}
      isPointer={onClick ? true : false}
      onClick={onClick}
    >
      <BannerContent>
        <h1>{title}</h1>
        <p>{description}</p>
        {icon && (
          <BannerIconWrapper onClick={onClick}>{icon}</BannerIconWrapper>
        )}
      </BannerContent>
    </BannerImage>
  );
};

export default Banner;
