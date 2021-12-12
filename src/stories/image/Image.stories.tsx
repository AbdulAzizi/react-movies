import { Image } from "./Image";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
	title: "API/Image",
	component: Image,
	argTypes: {},
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const Default = Template.bind({});
Default.args = {};
