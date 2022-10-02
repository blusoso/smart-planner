import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import StarIcon from "../../Icon/StarIcon";

const STAR_ARR = [5, 4, 3, 2, 1];
const TOTAL_RATING = STAR_ARR.length;

type StarRatingProps = {
  id?: string;
  star: number;
  justify?: string;
  iconSize?: string;
};

const StarRating = ({
  id,
  star,
  justify = "start",
  iconSize = "1.4em",
}: StarRatingProps) => {
  const themeContext = useContext(ThemeContext);

  return (
    <div className={`flex justify-${justify}`}>
      {Array.from(Array(star), (e, i) => (
        <React.Fragment
          key={`${id || "star-rating"}__star-yellow-rating--${i}`}
        >
          <StarIcon iconWidth={iconSize} color={themeContext.yellowColor} />
        </React.Fragment>
      ))}
      {Array.from(Array(TOTAL_RATING - star), (e, i) => (
        <React.Fragment key={`${id || "star-rating"}__star-gray-rating--${i}`}>
          <StarIcon iconWidth={iconSize} color={themeContext.lightGrayColor} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default StarRating;
