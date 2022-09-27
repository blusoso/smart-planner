import { Meta, Story } from "@storybook/react";
import SearchOutlineIcon from "../Icon/SearchOutlineIcon";
import Input, { InputProps } from "./Input";

export default {
  title: "App/Input",
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Search = Template.bind({});

Search.args = {
  id: "search-attraction",
  placeholder: "Search Destination...",
  startIcon: <SearchOutlineIcon />,
  autoFocus: true,
};
