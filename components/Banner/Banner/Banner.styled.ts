import styled from "styled-components";

type BannerImageProps = {
  backgroundImage: string;
  backgroundPosition?: string;
  borderRadius?: string;
  isGreenOverlay?: boolean;

  w?: string;
  h?: string;
  isPointer?: boolean;
};

export const BannerImage = styled.div<BannerImageProps>`
  position: relative;
  background: ${({ backgroundImage }) => `url("${backgroundImage}")`}
    ${({ theme, isGreenOverlay }) =>
      isGreenOverlay ? theme.overlayGreenColor : ""};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: ${({ backgroundPosition }) => backgroundPosition};
  background-blend-mode: multiply;

  width: ${({ w }) => w || "100%"};
  height: ${({ h }) => h || "190px"};

  border-radius: ${({ borderRadius, theme }) =>
    borderRadius || theme.mainBorderRadius};
  ${({ isPointer }) => isPointer && "cursor: pointer;"}
`;

export const BannerContent = styled.div`
  color: white;
  position: absolute;
  top: 50%;
  transform: translate(0%, -55%);
  width: 100%;
  text-align: center;
`;

export const BannerIconWrapper = styled.div`
  margin-top: 1.125em;
`;
