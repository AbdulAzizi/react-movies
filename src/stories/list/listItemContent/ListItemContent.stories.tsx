import { ListItemContent } from "./ListItemContent";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
	title: "API/ListItemContent",
	component: ListItemContent,
	argsTypes: {},
} as ComponentMeta<typeof ListItemContent>;

const Template: ComponentStory<typeof ListItemContent> = (args) => <ListItemContent {...args} />;

export const Default = Template.bind({});
Default.args = {};
