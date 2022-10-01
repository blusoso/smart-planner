import React from "react";
import Layout, { user } from "@/components/Layout/Layout";
import ImageSlider from "@/components/Slider/ImageSlider";
import styled from "styled-components";
import PlaceSlugIconHeader from "@/components/Header/PlaceSlugIconHeader/PlaceSlugIconHeader";
import PlaceSlugHeader from "@/components/Header/PlaceSlugHeader/PlaceSlugHeader";
import TabBar from "@/components/TabBar/TabBar";
import LinkBox from "@/components/LinkBox/LinkBox";
import DiagonalArrowRightUpIcon from "@/components/Icon/DiagonalArrowRightUpIcon";
import Content from "@/components/Content/Content";
import Rating from "@/components/Rating/Rating";
import ContentHeader from "@/components/Header/ContentHeader/ContentHeader";
import PlusCircleIcon from "@/components/Icon/PlusCircleIcon";
import RatingBox from "@/components/RatingBox/RatingBox";

const IMAGES = [
  "/assets/images/sonaal-bangera.jpg",
  "/assets/images/david-gardiner.jpg",
  "/assets/images/colton-duke.jpg",
  "/assets/images/city.jpg",
  "/assets/images/building.jpg",
];

const RoundedCornerContent = styled.div`
  position: relative;
  margin-top: -1.8em;
  background: white;
  z-index: 2;
  border-top-left-radius: ${({ theme }) => theme.mainBorderRadius};
  border-top-right-radius: ${({ theme }) => theme.mainBorderRadius};
`;

const placeInfo = {
  thumbnail: "/assets/images/sonaal-bangera.jpg",
  images: IMAGES,
  title: "Grand Canyon",
  city: "Arizona",
  country: "United States",
  slug: "grand-canyon-arizina-united-states",
  price: 150,
  rating: "4.3",
  isFavorite: true,
};

const CONTENT =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

const avatarList = [
  "/assets/images/avatar.png",
  "/assets/images/avatar-2.png",
  "/assets/images/avatar-3.png",
  "/assets/images/avatar-4.png",
  "/assets/images/avatar-5.png",
];

const ratingList = [5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 3, 2];

const Place = () => {
  const { title, city, country, price } = placeInfo;

  return (
    <div className="relative">
      <ImageSlider images={IMAGES} />
      <PlaceSlugIconHeader />

      <RoundedCornerContent>
        <Layout isTabBar={false}>
          <>
            <PlaceSlugHeader
              title={title}
              city={city}
              country={country}
              price={price}
            />
            <LinkBox
              iconRight={
                <DiagonalArrowRightUpIcon iconWidth="24px" isOutline />
              }
              label="Open Now"
              value="10:00 AM - 9:00 PM"
              onClick={() => console.log("link box")}
            />
            <Content content={CONTENT} />
            <Rating rating="4.3" reviewCount={1242} avatarList={avatarList} />
            <ContentHeader title="🗯 Review" />
            <LinkBox
              padding="0.5em 1.5em"
              label={
                <div className="flex items-center">
                  <PlusCircleIcon isOutline iconWidth="1.4em" />
                  Add Review
                </div>
              }
              onClick={() => console.log("link box")}
            />
            <RatingBox ratingList={ratingList} />
          </>
        </Layout>
      </RoundedCornerContent>

      <TabBar user={user} />
    </div>
  );
};

export default Place;
