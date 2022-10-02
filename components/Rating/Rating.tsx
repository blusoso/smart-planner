import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { shortNumberFormat } from "utils/number";
import StarIcon from "../Icon/StarIcon";
import { RatingStyled, ReviewCount } from "./Rating.styled";
import AvatarGrouped from "../AvatarGrouped/AvatarGrouped";

type RatingProps = {
  className?: string;
  rating: string;
  reviewCount: number;
  avatarList?: any[];
};

const Rating = ({
  className = "",
  rating,
  reviewCount,
  avatarList,
}: RatingProps) => {
  const themeContext = useContext(ThemeContext);

  return (
    <RatingStyled className={className}>
      <div className="flex items-center">
        <StarIcon iconWidth="1.125em" color={themeContext.yellowColor} />
        <span className="ml-1">{rating}</span>
        <ReviewCount>({shortNumberFormat(reviewCount)} review)</ReviewCount>
      </div>

      <div>
        {avatarList && avatarList.length > 0 && (
          <AvatarGrouped
            avatarList={avatarList}
            w="28px"
            h="28px"
            margin="0.3em"
            fontSize="0.6rem"
          />
        )}
      </div>
    </RatingStyled>
  );
};

export default Rating;
