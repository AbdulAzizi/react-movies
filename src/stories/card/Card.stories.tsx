import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Card } from "./Card";

export default {
	title: "Card",
	component: Card,
	argTypes: {},
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Tile = Template.bind({});
Tile.args = { tile: true };

export const Flat = Template.bind({});
Flat.args = { flat: true };

export const Outline = Template.bind({});
Outline.args = { outline: true };

export const Color = Template.bind({});
Color.args = { color: "#1ea7fd", flat: true };
