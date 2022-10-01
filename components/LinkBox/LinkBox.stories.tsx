import LinkBox, { LinkBoxProps } from "./LinkBox";
import { Meta, Story } from "@storybook/react";
import DiagonalArrowRightUpIcon from "../Icon/DiagonalArrowRightUpIcon";

export default {
  title: "App/LinkBox",
  component: LinkBox,
} as Meta;

const Template: Story<LinkBoxProps> = (args) => <LinkBox {...args} />;

export const OpenBox = Template.bind({});

OpenBox.args = {
  label: "Open Now",
  value: "10:00 AM - 9:00 PM",
  iconRight: <DiagonalArrowRightUpIcon isOutline iconWidth="26px" />,
};
