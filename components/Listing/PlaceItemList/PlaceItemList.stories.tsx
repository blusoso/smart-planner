import { Meta, Story } from "@storybook/react";
import PlaceItemList, { PlaceItemListProps } from "./PlaceItemList";
import { EditCircleIcon } from "../../Icon/EditCircleIcon";

export default {
  title: "App/Listing",
  component: PlaceItemList,
} as Meta;

const Template: Story<PlaceItemListProps> = (args) => (
  <PlaceItemList {...args} />
);

export const PlaceItem = Template.bind({});

PlaceItem.args = {
  itemList: [
    {
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
    },
    {
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
      ],
    },
    {
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
    },
  ],
};
