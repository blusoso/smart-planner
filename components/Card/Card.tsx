import React, { useContext, useState } from "react";
import { ThemeContext } from "styled-components";
import { HeartCircleIcon } from "../Icon/HeartCircleIcon";
import PinOutlineIcon from "../Icon/PinOutlineIcon";
import StarIcon from "../Icon/StarIcon";
import {
  CardBody,
  CardWrapper,
  FavoriteButtonPosition,
  LocationStyle,
  PriceStyle,
  RatingBadge,
  ThumbnailBackground,
} from "./Card.styled";

export type CardProps = {
  className?: string;
  thumbnail: string;
  isFavorite?: boolean;
  title: string;
  city: string;
  country: string;
  price?: number;
  rating?: string;
};

const HEART_ICON_CIRCLE_SIZE = "2.125em";
const HEART_ICON_SIZE = "1.313em";

const Card = ({
  className = "",
  thumbnail,
  isFavorite = false,
  title,
  city,
  country,
  price = 0,
  rating,
}: CardProps) => {
  const themeContext = useContext(ThemeContext);
  const [isLike, setIsLike] = useState(isFavorite);

  const toggleFavoriteButton = () => {
    setIsLike(!isLike);
  };

  return (
    <CardWrapper className={className}>
      <ThumbnailBackground thumbnail={thumbnail} />
      {rating && (
        <RatingBadge>
          <StarIcon iconWidth="1.125em" color={themeContext.yellowColor} />
          <span className="ml-2">{rating}</span>
        </RatingBadge>
      )}
      <FavoriteButtonPosition>
        <HeartCircleIcon
          color={
            isLike ? themeContext.lightGreenColor : themeContext.greenColor
          }
          backgroundColor={
            isLike ? themeContext.greenColor : themeContext.lightGreenColor
          }
          isOutline={!isLike}
          circleSize={HEART_ICON_CIRCLE_SIZE}
          iconWidth={HEART_ICON_SIZE}
          onClick={toggleFavoriteButton}
        />
      </FavoriteButtonPosition>
      <CardBody>
        <div className="flex items-center justify-between">
          <h2>{title}</h2>
          {price !== 0 && (
            <PriceStyle>
              <span>$</span>
              <span>{price}</span>
            </PriceStyle>
          )}
        </div>
        <div className="flex items-center">
          <PinOutlineIcon iconWidth="1.125em" />
          <LocationStyle className="pl-1">
            {city}, {country}
          </LocationStyle>
        </div>
      </CardBody>
    </CardWrapper>
  );
};

export default Card;
