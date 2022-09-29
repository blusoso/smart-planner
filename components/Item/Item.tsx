import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import AvatarGrouped from "../AvatarGrouped/AvatarGrouped";
import { ThumbnailBackground } from "../Card/Card.styled";
import DateRange from "../Text/DateRange/DateRange";
import Location from "../Text/Location/Location";
import { ButtonPosition, ItemTitle } from "./Item.styled";

export type ItemProps = {
  image: string;
  title: string;
  city: string;
  country: string;
  dateRange: string;
  button?: React.ReactNode;
  friendAvatarList?: any[];
};

const Item = ({
  image,
  title,
  city,
  country,
  dateRange,
  button,
  friendAvatarList,
}: ItemProps) => {
  const themeContext = useContext(ThemeContext);

  return (
    <div className="relative grid grid-cols-12 gap-3 flex">
      <div className="col-span-3">
        <ThumbnailBackground thumbnail={image} height="90px" />
      </div>
      <div className="col-span-9 flex items-center">
        <ButtonPosition>{button}</ButtonPosition>

        <div className="flex justify-between items-end w-full">
          <div>
            <ItemTitle>{title}</ItemTitle>
            <Location
              className="mb-1"
              city={city}
              country={country}
              fontSize="10px"
            />
            <DateRange dateRange={dateRange} fontSize="10px" />
          </div>
          {friendAvatarList && friendAvatarList.length > 0 && (
            <AvatarGrouped
              avatarList={friendAvatarList}
              w="28px"
              h="28px"
              margin="0.3em"
              fontSize="0.6rem"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Item;
