import React from "react";
import Card from "../../Card/Card";
import { PlaceCardListContainer } from "./PlaceCardList.styled";

export type PlaceCardListProps = {
  placeList: any[];
};

const PlaceCardList = ({ placeList }: PlaceCardListProps) => {
  return (
    <PlaceCardListContainer>
      {placeList.map(
        (
          { thumbnail, title, city, country, price, rating, isFavorite },
          index
        ) => (
          <React.Fragment key={`${title}-${city}-${country}-${index}`}>
            <Card
              className={index === placeList.length - 1 ? "mr-4" : ""}
              thumbnail={thumbnail}
              title={title}
              city={city}
              country={country}
              price={price}
              rating={rating}
              isFavorite={isFavorite}
            />
          </React.Fragment>
        )
      )}
    </PlaceCardListContainer>
  );
};

export default PlaceCardList;
