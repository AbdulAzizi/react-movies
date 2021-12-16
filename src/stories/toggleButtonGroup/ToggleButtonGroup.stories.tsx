import { useState } from "react";
import { ToggleButtonGroup } from "./ToggleButtonGroup";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ToggleButton } from "../toggleButton/ToggleButton";

export default {
	title: "API/ToggleButtonGroup",
	component: ToggleButtonGroup,
	// subcomponents: ToggleButton,
	args: {},
} as ComponentMeta<typeof ToggleButtonGroup>;

export const Default: ComponentStory<typeof ToggleButtonGroup> = (args) => {
	const [buttinValue, setbuttinValue] = useState("first");
	const handleClick = (e: any) => {
		setbuttinValue(e.target.value);
	};
	return (
		<ToggleButtonGroup value={buttinValue} onChange={handleClick}>
			<ToggleButton value="first" className={buttinValue === "first" ? "active" : ""}>
				First
			</ToggleButton>
			<ToggleButton value="second" className={buttinValue === "second" ? "active" : ""}>
				Second
			</ToggleButton>
			<ToggleButton value="third" className={buttinValue === "third" ? "active" : ""}>
				Second
			</ToggleButton>
		</ToggleButtonGroup>
	);
};
