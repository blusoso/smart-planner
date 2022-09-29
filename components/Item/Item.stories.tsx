import { Meta, Story } from "@storybook/react";
import { EditCircleIcon } from "../Icon/EditCircleIcon";
import Item, { ItemProps } from "./Item";

export default {
  title: "App/Item",
  component: Item,
} as Meta;

const Template: Story<ItemProps> = (args) => <Item {...args} />;

export const PlaceItem = Template.bind({});

PlaceItem.args = {
  image: "/assets/images/david-gardiner.jpg",
  title: "Chiang Mai Trip",
  city: "Chiang Mai",
  country: "Thailand",
  dateRange: "22 Oct - 30 Oct",
  button: (
    <EditCircleIcon
      isOutline
      circleSize="36px"
      iconWidth="16px"
      onClick={() => console.log("edit")}
    />
  ),
  friendAvatarList: [
    "/assets/images/avatar.png",
    "/assets/images/avatar-2.png",
    "/assets/images/avatar-3.png",
    "/assets/images/avatar-4.png",
    "/assets/images/avatar-5.png",
  ],
};
