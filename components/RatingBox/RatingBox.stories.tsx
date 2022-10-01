import { Meta, Story } from "@storybook/react";
import RatingBox, { RatingBoxProps } from "./RatingBox";

export default {
  title: "App/RatingBox",
  component: RatingBox,
} as Meta;

const Template: Story<RatingBoxProps> = (args) => <RatingBox {...args} />;

export const ReviewWithRatingBox = Template.bind({});

ReviewWithRatingBox.args = {
  ratingList: [5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 3, 2],
};
