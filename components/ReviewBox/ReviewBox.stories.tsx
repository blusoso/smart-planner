import { Meta, Story } from "@storybook/react";
import ReviewBox, { ReviewBoxProps } from "./ReviewBox";

export default {
  title: "App/ReviewBox",
  component: ReviewBox,
} as Meta;

const Template: Story<ReviewBoxProps> = (args) => <ReviewBox {...args} />;

export const ReviewWithRatingBox = Template.bind({});

ReviewWithRatingBox.args = {
  ratingList: [5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 3, 2],
};
