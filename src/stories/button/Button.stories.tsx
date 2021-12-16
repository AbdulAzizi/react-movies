import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button } from "./Button";

export default {
	title: "API/Button",
	component: Button,
	args: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>Button</Button>;

export const Default = Template.bind({});
Default.args = {};

// const OneItem: ComponentStory<typeof List> = (args) =>(
export const Size: ComponentStory<typeof Button> = (args) => (
	<>
		<Button {...args} size="small">
			Button
		</Button>
		<Button {...args} size="medium">
			Button
		</Button>
		<Button {...args} size="large">
			Button
		</Button>
	</>
);
