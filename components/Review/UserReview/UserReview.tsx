import React, { useContext, useState } from "react";
import { ReviewTime, UserReviewName } from "./UserReview.styled";
import CommonImage from "../../CommonImage/CommonImage";
import StarRating from "../../RatingBox/StarRating/StarRating";
import Content from "../../Content/Content";
import { ThumbnailBackground } from "../../Card/Card.styled";
import Button, { BUTTON_TYPE } from "../../Button/Button";
import ArrowUp from "../../Icon/ArrowUp";
import { ThemeContext } from "styled-components";

type UserReviewProps = {
  userReview: any;
};

const UserReview = ({ userReview }: UserReviewProps) => {
  const themeContext = useContext(ThemeContext);
  const [isHelpful, setIsHelpful] = useState(false);

  const renderReviewImages = () => {
    return userReview.images.map((image: string, index: number) => (
      <div
        key={`${userReview.name}__${userReview.image}--${index}`}
        className="col-span-3"
      >
        <ThumbnailBackground thumbnail={image} height="85px" />
      </div>
    ));
  };

  return (
    <div
      className={`mb-4 ${
        userReview.images && userReview.images.length > 0 ? "mb-6" : ""
      }`}
    >
      <div className="flex justify-between mb-2">
        <div className="flex items-center gap-3">
          <CommonImage
            src={userReview.avatar}
            alt="avatar"
            w="48px"
            h="48px"
            isCircle
          />
          <div>
            <UserReviewName>{userReview.name}</UserReviewName>
            <StarRating star={userReview.rating} />
          </div>
        </div>

        <ReviewTime>{userReview.createdAt}</ReviewTime>
      </div>

      <Content content={userReview.comment} />

      {userReview.images && userReview.images.length > 0 && (
        <div className="relative grid grid-cols-12 gap-3 flex my-3">
          {renderReviewImages()}
        </div>
      )}

      <div className="flex justify-end mt-2">
        <Button
          id={`helpful-${userReview.id}`}
          type={isHelpful ? BUTTON_TYPE.PRIMARY : BUTTON_TYPE.SECONDARY}
          label="helpful"
          icon={
            <ArrowUp
              isOutline
              color={isHelpful ? "white" : themeContext.greenColor}
            />
          }
          onClick={() => setIsHelpful(!isHelpful)}
        />
      </div>
    </div>
  );
};

export default UserReview;
