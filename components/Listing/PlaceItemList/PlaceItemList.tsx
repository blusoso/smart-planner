import React from "react";
import { EditCircleIcon } from "../../Icon/EditCircleIcon";
import Item from "../../Item/Item";

export type PlaceItemListProps = {
  itemList: any[];
};

const PlaceItemList = ({ itemList }: PlaceItemListProps) => {
  return (
    <div>
      {itemList.map(
        (
          { image, title, city, country, dateRange, friendAvatarList },
          index
        ) => (
          <div key={`place-item--${index}`} className="mb-3">
            <Item
              image={image}
              title={title}
              city={city}
              country={country}
              dateRange={dateRange}
              button={
                <EditCircleIcon
                  circleSize="40px"
                  iconWidth="18px"
                  isOutline
                  onClick={() => {}}
                />
              }
              friendAvatarList={friendAvatarList}
            />
          </div>
        )
      )}
    </div>
  );
};

export default PlaceItemList;
