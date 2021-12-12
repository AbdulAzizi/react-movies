import { Chip } from "./Chip";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
	title: "API/Chip",
	component: Chip,
	argTypes: {},
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} />;

export const Default = Template.bind({});
Default.args = {};
