import { ListItemSecondaryText } from "./ListItemSecondaryText";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
	title: "API/ListItemSecondaryText",
	component: ListItemSecondaryText,
	argsTypes: {},
} as ComponentMeta<typeof ListItemSecondaryText>;

const Template: ComponentStory<typeof ListItemSecondaryText> = (args) => <ListItemSecondaryText {...args} />;

export const Default = Template.bind({});
Default.args = {};
