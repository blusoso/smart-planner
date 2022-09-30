import { Meta, Story } from "@storybook/react";
import ImageSlider, { ImageSliderProps } from "./ImageSlider";

export default {
  title: "App/Slide",
  component: ImageSlider,
} as Meta;

const Template: Story<ImageSliderProps> = (args) => <ImageSlider {...args} />;

export const ImageCarousel = Template.bind({});

ImageCarousel.args = {
  images: [
    "/assets/images/sonaal-bangera.jpg",
    "/assets/images/david-gardiner.jpg",
    "/assets/images/colton-duke.jpg",
    "/assets/images/city.jpg",
    "/assets/images/building.jpg",
  ],
};
