import Header from "@/components/Header/Header";
import Input from "@/components/Input/Input";
import MenuBar from "@/components/MenuBar/MenuBar";
import type { NextPage } from "next";
import Head from "next/head";
import { ReactSVG } from "react-svg";
import PlanningBanner from "@/components/Banner/PlanningBanner/PlanningBanner";
import ContentHeader from "@/components/Header/ContentHeader/ContentHeader";
import ViewAllLink from "@/components/Link/ViewAllLink/ViewAllLink";
import SelectCategory from "@/components/Select/SelectCategory/SelectCategory";
import PlaceCardList from "@/components/Listing/PlaceCardList/PlaceCardList";
import MiniCalendar from "@/components/MiniCalendar/MiniCalendar";
import NoContent from "@/components/NoContent/NoContent";
import PlaceItemList from "@/components/Listing/PlaceItemList/PlaceItemList";
import { EditCircleIcon } from "@/components/Icon/EditCircleIcon";

const user = {
  name: "Sopita Jullaprasertsak",
  avatar: "/assets/images/avatar.png",
};

const categoryList = [
  { icon: "🗺️", label: "All", isActive: true },
  { icon: "🌲", label: "Forest", isActive: false },
  { icon: "⛰️", label: "Mountain", isActive: false },
  { icon: "🌲", label: "Forest", isActive: false },
  { icon: "⛰️", label: "Mountain", isActive: false },
];

const placeList = [
  {
    thumbnail: "/assets/images/sonaal-bangera.jpg",
    title: "Grand Canyon",
    city: "Arizona",
    country: "United States",
    price: 150,
    rating: "4.3",
    isFavorite: true,
  },
  {
    thumbnail: "/assets/images/sonaal-bangera.jpg",
    title: "Grand Canyon",
    city: "Arizona",
    country: "United States",
    price: 150,
    rating: "4.3",
  },
  {
    thumbnail: "/assets/images/sonaal-bangera.jpg",
    title: "Grand Canyon",
    city: "Arizona",
    country: "United States",
    price: 150,
    rating: "4.3",
  },
];

const itemList = [
  {
    button: (
      <EditCircleIcon
        circleSize="36px"
        iconWidth="16px"
        isOutline
        onClick={() => {}}
      />
    ),
    city: "Chiang Mai",
    country: "Thailand",
    dateRange: "22 Oct - 30 Oct",
    friendAvatarList: [
      "/assets/images/avatar-2.png",
      "/assets/images/avatar-5.png",
      "/assets/images/avatar.png",
      "/assets/images/avatar-3.png",
      "/assets/images/avatar-4.png",
    ],
    image: "/assets/images/david-gardiner.jpg",
    title: "Chiang Mai Trip",
  },
  {
    button: (
      <EditCircleIcon
        circleSize="36px"
        iconWidth="16px"
        isOutline
        onClick={function noRefCheck() {}}
      />
    ),
    city: "Chiang Mai",
    country: "Thailand",
    dateRange: "22 Oct - 30 Oct",
    friendAvatarList: [
      "/assets/images/avatar-2.png",
      "/assets/images/avatar.png",
    ],
    image: "/assets/images/david-gardiner.jpg",
    title: "Chiang Mai Trip",
  },
  {
    button: (
      <EditCircleIcon
        circleSize="36px"
        iconWidth="16px"
        isOutline
        onClick={function noRefCheck() {}}
      />
    ),
    city: "Chiang Mai",
    country: "Thailand",
    dateRange: "22 Oct - 30 Oct",
    image: "/assets/images/david-gardiner.jpg",
    title: "Chiang Mai Trip",
  },
];

const Home: NextPage = () => {
  const searchIcon = <ReactSVG src="/assets/icons/search-outline.svg" />;

  return (
    <div>
      <Head>
        <title>Smart Planner</title>
        <meta name="description" content="Smart Planner" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="container mb-20">
          <Header user={user} />
          <Input
            id="search-attraction"
            placeholder="Search Destination..."
            startIcon={searchIcon}
            autoFocus
          />
          <PlanningBanner />
          <>
            <ContentHeader
              title="Discover World 🌈"
              link={<ViewAllLink onClick={() => console.log("view all")} />}
            />
            <SelectCategory
              categoryList={categoryList}
              onClick={() => console.log("select category")}
            />
            <PlaceCardList placeList={placeList} />
          </>
          <>
            <ContentHeader
              title="You Might Like These 🍬"
              link={<ViewAllLink onClick={() => console.log("view all")} />}
            />
            <PlaceCardList placeList={placeList} />
          </>
          <>
            <ContentHeader
              title="Feeling Adventurous? 🚀"
              link={<ViewAllLink onClick={() => console.log("view all")} />}
            />
            <SelectCategory
              categoryList={categoryList}
              onClick={() => console.log("select category")}
            />
            <PlaceCardList placeList={placeList} />
          </>
          <>
            <ContentHeader
              title="Upcoming Trip ✈️"
              link={<ViewAllLink onClick={() => console.log("view all")} />}
            />
            <MiniCalendar />
            <NoContent
              subTitle="You don’t have any trip"
              title="Plan your trip now"
            />
            <PlaceItemList itemList={itemList} />
          </>
        </div>
      </main>

      <MenuBar user={user} />
    </div>
  );
};

export default Home;
