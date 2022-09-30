import styled from "styled-components";

const POSITION = "0.8em";

export const CardWrapper = styled.div`
  position: relative;
  width: 16.25em;
  height: 17.625em;
  cursor: pointer;
  margin-bottom: 7em;
`;

type ThumbnailBackgroundProps = {
  thumbnail: string;
  height?: string;
};

export const ThumbnailBackground = styled.div<ThumbnailBackgroundProps>`
  background-image: ${({ thumbnail }) => `url("${thumbnail}")`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-blend-mode: multiply;

  width: 100%;
  height: ${({ height }) => height || "100%"};

  border-radius: ${({ theme }) => theme.mainBorderRadius};
`;

const TopCardPosition = styled.div`
  position: absolute;
  top: ${POSITION};
  z-index: 2;
`;

export const RatingBadge = styled(TopCardPosition)`
  left: ${POSITION};

  display: flex;
  align-items: center;
  width: fit-content;

  background: ${({ theme }) => theme.lightGreenColor};
  padding: 0.5em 0.8em;
  border-radius: ${({ theme }) => theme.mainBorderRadius};

  span {
    font-size: ${({ theme }) => theme.smallestFontSize};
    font-weight: 600;
  }
`;

export const FavoriteButtonPosition = styled(TopCardPosition)`
  right: ${POSITION};
`;

export const CardBody = styled.div`
  position: absolute;
  bottom: -2em;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 2;
  width: 14.5em;

  padding: 0.7em 1.125em;
  border-radius: ${({ theme }) => theme.mainBorderRadius};
  background: white;
  box-shadow: 0px 14px 28px rgba(24, 39, 75, 0.05),
    0px 18px 88px rgba(24, 39, 75, 0.05);
`;

export const PriceStyle = styled.div`
  font-weight: 600;
  font-size: ${({ theme }) => theme.smallFontSize};

  span:first-child {
    color: ${({ theme }) => theme.greenColor};
  }
`;
