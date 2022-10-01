import ToggleHeartCircleIcon from "@/components/Card/HeartCircleIcon/ToggleHeartCircleIcon";
import { NextCircleIcon } from "@/components/Icon/NextCircleIcon";
import PhoneCircleIcon from "@/components/Icon/PhoneCircleIcon";
import ShareCircleIcon from "@/components/Icon/ShareCircleIcon";
import React from "react";
import {
  ButtonHeader,
  IconButtonWrapper,
  IconReactionWrapper,
} from "./PlaceSlugIconHeader.styled";

const PlaceSlugIconHeader = () => {
  const isFavorite = false;

  return (
    <ButtonHeader>
      <IconButtonWrapper>
        <NextCircleIcon className="rotate-180" />
        <IconReactionWrapper>
          <PhoneCircleIcon
            isOutline
            iconWidth="22px"
            onClick={() => console.log("phone")}
          />
          <ShareCircleIcon
            isOutline
            iconWidth="22px"
            onClick={() => console.log("share")}
          />
          <ToggleHeartCircleIcon isFavorite={isFavorite} />
        </IconReactionWrapper>
      </IconButtonWrapper>
    </ButtonHeader>
  );
};

export default PlaceSlugIconHeader;
