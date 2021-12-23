import React, { ReactNode } from "react";
import "./toggleButtonGroup.css";

interface ToggleButtonGroupProps {
	value: string;
	onChange: Function;
	size?: "small" | "medium" | "large";
	color?: string;
	children: ReactNode;
	style?: object;
}

export const ToggleButtonGroup = ({ ...props }: ToggleButtonGroupProps) => {
	const childrenWithProps = React.Children.map(props.children, (child) => {
		if (React.isValidElement(child)) {
			return React.cloneElement(child, {
				size: props.size || "medium",
				onClick: props.onChange,
				color: props.color || null,
			});
		}
		return child;
	});
	return (
		<div style={props.style} className={"button-group-wrapper"}>
			{childrenWithProps}
		</div>
	);
};
