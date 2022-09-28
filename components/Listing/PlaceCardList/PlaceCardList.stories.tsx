import { Meta, Story } from "@storybook/react";
import PlaceCardList, { PlaceCardListProps } from "./PlaceCardList";

export default {
  title: "App/Listing",
  component: PlaceCardList,
} as Meta;

const Template: Story<PlaceCardListProps> = (args) => (
  <PlaceCardList {...args} />
);

export const PlaceCard = Template.bind({});

PlaceCard.args = {
  placeList: [
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
  ],
};
