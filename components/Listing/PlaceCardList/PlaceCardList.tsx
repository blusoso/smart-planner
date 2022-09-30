import React from "react";
import Card from "../../Card/Card";
import {
  PlaceCardListContainer,
  PlaceCardListScroll,
} from "./PlaceCardList.styled";

export type PlaceCardListProps = {
  placeList: any[];
};

const PlaceCardList = ({ placeList }: PlaceCardListProps) => {
  return (
    <PlaceCardListScroll>
      <PlaceCardListContainer>
        {placeList.map(
          (
            {
              thumbnail,
              title,
              city,
              country,
              slug,
              price,
              rating,
              isFavorite,
            },
            index
          ) => (
            <React.Fragment key={`${title}-${city}-${country}-${index}`}>
              <Card
                className={index === placeList.length - 1 ? "mr-4" : ""}
                thumbnail={thumbnail}
                title={title}
                city={city}
                country={country}
                slug={slug}
                price={price}
                rating={rating}
                isFavorite={isFavorite}
              />
            </React.Fragment>
          )
        )}
      </PlaceCardListContainer>
    </PlaceCardListScroll>
  );
};

export default PlaceCardList;
