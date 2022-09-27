import { Meta, Story } from "@storybook/react";
import SelectCategory, { SelectCategoryProps } from "./SelectCategory";

export default {
  title: "App/Select",
  component: SelectCategory,
} as Meta;

const Template: Story<SelectCategoryProps> = (args) => (
  <SelectCategory {...args} />
);

export const Category = Template.bind({});

Category.args = {
  categoryList: [
    { icon: "🗺️", label: "All", isActive: true },
    { icon: "🌲", label: "Forest", isActive: false },
    { icon: "⛰️", label: "Mountain", isActive: false },
    { icon: "🌲", label: "Forest", isActive: false },
    { icon: "⛰️", label: "Mountain", isActive: false },
  ],
};
