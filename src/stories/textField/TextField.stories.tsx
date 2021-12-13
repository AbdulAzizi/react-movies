import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TextField } from "./TextField";

export default {
	title: "API/TextField",
	component: TextField,
	argTypes: {},
	parameters: {
		backgrounds: {
			default: "white",
			values: [
				{ name: "black", value: "black" },
				{ name: "white", value: "white" },
			],
		},
	},
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => <TextField {...args} />;

export const Default = Template.bind({});
Default.args = { label: "Text field" };

export const Dark = Template.bind({});
Dark.args = { label: "Text field", dark: true };
// Dark.parameters = { backgrounds: { default: "black" } };

export const Transparent = Template.bind({});
Transparent.args = { label: "Text field", outline: false, transparent: true };
Transparent.parameters = { backgrounds: { default: "black" } };
