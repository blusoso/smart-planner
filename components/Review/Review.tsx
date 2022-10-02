import React from "react";
import UserReview from "./UserReview/UserReview";

export type ReviewProps = {};

const userReviewList = [
  {
    id: 1,
    name: "Sopita Jullaprasertsak",
    avatar: "/assets/images/avatar.png",
    rating: 5,
    comment:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    images: [],
    createdAt: "2h ago",
  },
  {
    id: 2,
    name: "Krufra",
    avatar: "/assets/images/avatar-2.png",
    rating: 4,
    comment: "Lorem Ipsum is simply dummy text ",
    images: ["/assets/images/building.jpg"],
    createdAt: "2h ago",
  },
  {
    id: 3,
    name: "Krit",
    avatar: "/assets/images/avatar-3.png",
    rating: 5,
    images: [
      "/assets/images/city.jpg",
      "/assets/images/colton-duke.jpg",
      "/assets/images/david-gardiner.jpg",
    ],
    comment: "Lorem Ipsum is simply dummy text na krub",
    createdAt: "5h ago",
  },
];

const Review = ({}: ReviewProps) => {
  return (
    <>
      {userReviewList.map((userReview, index) => (
        <React.Fragment key={`user-review--${index}`}>
          <UserReview userReview={userReview} />
        </React.Fragment>
      ))}
    </>
  );
};

export default Review;
