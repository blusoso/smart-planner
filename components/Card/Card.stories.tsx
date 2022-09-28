import { Meta, Story } from "@storybook/react";
import Card, { CardProps } from "./Card";

export default {
  title: "App/Card",
  component: Card,
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const PlaceCard = Template.bind({});

PlaceCard.args = {
  thumbnail: "/assets/images/sonaal-bangera.jpg",
  title: "Grand Canyon",
  city: "Arizona",
  country: "United States",
  price: 150,
  rating: "4.3",
};
