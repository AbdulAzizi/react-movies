import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ToggleButton } from "./ToggleButton";

export default { title: "API/ToggleButton", component: ToggleButton, argTypes: {} } as ComponentMeta<
	typeof ToggleButton
>;

const Template: ComponentStory<typeof ToggleButton> = (args) => <ToggleButton {...args} />;

export const Default = Template.bind({});
Default.args = {};
