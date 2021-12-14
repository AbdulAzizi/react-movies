import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button } from "./Button";

export default {
	title: "API/Button",
	component: Button,
	args: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = { label: "Button" };
