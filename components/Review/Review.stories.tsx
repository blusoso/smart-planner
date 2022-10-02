import { Meta, Story } from "@storybook/react";
import Review, { ReviewProps } from "./Review";

export default {
  title: "App/Review",
  component: Review,
} as Meta;

const Template: Story<ReviewProps> = (args) => <Review {...args} />;

export const UserReview = Template.bind({});

UserReview.args = {};
