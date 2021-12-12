import { ListItemAction } from "./ListItemAction";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
	title: "API/ListItemAction",
	component: ListItemAction,
	argTypes: {},
} as ComponentMeta<typeof ListItemAction>;

const Template: ComponentStory<typeof ListItemAction> = (args) => <ListItemAction {...args} />;

export const Default = Template.bind({});
Default.args = {};
