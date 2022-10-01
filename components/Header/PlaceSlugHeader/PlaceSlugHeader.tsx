import React from "react";
import Location from "@/components/Text/Location/Location";
import styled from "styled-components";
import Button, { BUTTON_TYPE } from "@/components/Button/Button";
import CommonLink from "@/components/Link/CommonLink/CommonLink";

const PlaceSlugTitle = styled.h2`
  font-size: ${({ theme }) => theme.largeFontSize};
`;

const PlaceSlugPrice = styled.h2`
  font-size: ${({ theme }) => theme.largeFontSize};
  font-weight: 600;

  span:first-child {
    color: ${({ theme }) => theme.greenColor};
  }
`;

type PlaceSlugHeaderProps = {
  title: string;
  city: string;
  country: string;
  price: number;
};

const PlaceSlugHeader = ({
  title,
  city,
  country,
  price,
}: PlaceSlugHeaderProps) => {
  return (
    <>
      <div className="flex items-end justify-between">
        <PlaceSlugTitle className="font-semibold">{title}</PlaceSlugTitle>
        {price !== 0 && (
          <PlaceSlugPrice>
            <span>$</span>
            <span>{price}</span>
          </PlaceSlugPrice>
        )}
      </div>
      <div className="flex items-center justify-between mt-1">
        <Location city={city} country={country} />
        <CommonLink
          label="Write a Review"
          onClick={() => console.log("Write a review")}
        />
      </div>
    </>
  );
};

export default PlaceSlugHeader;
