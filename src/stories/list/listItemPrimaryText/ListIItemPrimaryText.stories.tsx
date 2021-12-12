import { ListItemPrimaryText } from "./ListItemPrimaryText";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
	title: "API/ListItemPrimaryText",
	component: ListItemPrimaryText,
	argsTypes: {},
} as ComponentMeta<typeof ListItemPrimaryText>;

const Template: ComponentStory<typeof ListItemPrimaryText> = (args) => <ListItemPrimaryText {...args} />;

export const Default = Template.bind({});
Default.args = {};
