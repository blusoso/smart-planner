import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { average, shortNumberFormat } from "../../utils/number";
import StarIcon from "../Icon/StarIcon";
import ProgressBar from "../ProgressBar/ProgressBar";
import {
  EachStarCount,
  ReviewBoxContainer,
  ReviewCount,
  ReviewScore,
} from "./RatingBox.styled";

export type RatingBoxProps = {
  ratingList: number[];
};

const ICON_WIDTH = "1.4em";
const STAR_ARR = [5, 4, 3, 2, 1];
const TOTAL_RATING = STAR_ARR.length;

const RatingBox = ({ ratingList }: RatingBoxProps) => {
  const themeContext = useContext(ThemeContext);
  const averageRating: string = average(ratingList);
  const starCount: number = Math.floor(Number(averageRating));

  const ratingCount = ratingList.reduce((accumulator: any, value: any) => {
    return { ...accumulator, [value]: (accumulator[value] || 0) + 1 };
  }, {});

  const countEachStar = (star: number): number => {
    const value = Object.entries(ratingCount)
      .map(([key, val]) => {
        if (star == Number(key)) {
          return val;
        }
      })
      .find((val) => val !== undefined);

    return Number(value) || 0;
  };

  const calculateStarPercentage = (star: number): any => {
    const percentage = (100 * countEachStar(star)) / ratingList.length;

    return percentage.toFixed(2) || 0;
  };

  return (
    <ReviewBoxContainer className="grid grid-cols-12 gap-6 flex items-center">
      <div className="col-span-5 text-center">
        <ReviewScore>
          {averageRating}
          <span> /{TOTAL_RATING}</span>
        </ReviewScore>
        <ReviewCount>
          ({shortNumberFormat(ratingList.length)} review)
        </ReviewCount>
        <div className="flex justify-center gap-1">
          {Array.from(Array(starCount), (e, i) => (
            <React.Fragment key={`star-yellow-rating--${i}`}>
              <StarIcon
                iconWidth={ICON_WIDTH}
                color={themeContext.yellowColor}
              />
            </React.Fragment>
          ))}
          {Array.from(Array(TOTAL_RATING - starCount), (e, i) => (
            <React.Fragment key={`star-gray-rating--${i}`}>
              <StarIcon
                iconWidth={ICON_WIDTH}
                color={themeContext.lightGrayColor}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="col-span-7">
        {STAR_ARR.map((star, i) => (
          <div key={`star-label--${i}`} className="grid grid-cols-12 gap-2">
            <EachStarCount className="col-span-3">
              {star} star
              {/* <span className="ml-auto">({countEachStar(star)})</span> */}
            </EachStarCount>
            <ProgressBar
              className="col-span-9"
              percent={calculateStarPercentage(star)}
            />
          </div>
        ))}
      </div>
    </ReviewBoxContainer>
  );
};

export default RatingBox;
