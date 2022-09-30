import React, { useContext, useState } from "react";
import Link from "next/link";
import { ThemeContext } from "styled-components";
import { HeartCircleIcon } from "../Icon/HeartCircleIcon";
import PinOutlineIcon from "../Icon/PinOutlineIcon";
import StarIcon from "../Icon/StarIcon";
import Location from "../Text/Location/Location";
import {
  CardBody,
  CardWrapper,
  FavoriteButtonPosition,
  PriceStyle,
  RatingBadge,
  ThumbnailBackground,
} from "./Card.styled";

export type CardProps = {
  className?: string;
  thumbnail: string;
  isFavorite?: boolean;
  title: string;
  slug?: string;
  city: string;
  country: string;
  price?: number;
  rating?: string;
};

const HEART_ICON_CIRCLE_SIZE = "2.3em";
const HEART_ICON_SIZE = "1.4em";

const Card = ({
  className = "",
  thumbnail,
  isFavorite = false,
  title,
  slug,
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
      <Link href={`/${slug}`}>
        <a>
          <ThumbnailBackground thumbnail={thumbnail} />
          {rating && (
            <RatingBadge>
              <StarIcon iconWidth="1.125em" color={themeContext.yellowColor} />
              <span className="ml-1">{rating}</span>
            </RatingBadge>
          )}
          <CardBody>
            <div className="flex items-end justify-between">
              <h2 className="font-semibold">{title}</h2>
              {price !== 0 && (
                <PriceStyle>
                  <span>$</span>
                  <span>{price}</span>
                </PriceStyle>
              )}
            </div>
            <div className="flex items-center mt-1">
              <Location city={city} country={country} />
            </div>
          </CardBody>
        </a>
      </Link>
    </CardWrapper>
  );
};

export default Card;
