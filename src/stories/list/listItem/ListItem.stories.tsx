import { ListItem } from "./ListItem";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
	title: "API/ListItem",
	component: ListItem,
	argTypes: {},
} as ComponentMeta<typeof ListItem>;

const Template: ComponentStory<typeof ListItem> = (args) => <ListItem {...args} />;

export const Default = Template.bind({});
Default.args = {};
