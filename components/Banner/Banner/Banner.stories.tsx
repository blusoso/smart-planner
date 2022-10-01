import { Meta, Story } from "@storybook/react";
import { NextCircleIcon } from "../../Icon/NextCircleIcon";
import Banner, { BannerProps } from "./Banner";

export default {
  title: "App/Banner",
  component: Banner,
} as Meta;

const Template: Story<BannerProps> = (args) => <Banner {...args} />;

export const PlanningBanner = Template.bind({});

PlanningBanner.args = {
  backgroundImage: "/assets/images/city.jpg",
  backgroundPosition: "50% 85%",
  isGreenOverlay: true,
  title: "Start Planning",
  description: "Auto generate your plan",
  icon: <NextCircleIcon className="m-auto" />,
  onClick: () => console.log("clicked"),
};
