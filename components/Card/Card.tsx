import React, { useContext } from "react";
import Link from "next/link";
import { ThemeContext } from "styled-components";
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
import ToggleHeartCircleIcon from "./HeartCircleIcon/ToggleHeartCircleIcon";

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

  return (
    <CardWrapper className={className}>
      <FavoriteButtonPosition>
        <ToggleHeartCircleIcon isFavorite={isFavorite} />
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
