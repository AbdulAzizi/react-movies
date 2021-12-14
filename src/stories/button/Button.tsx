import { ReactNode } from "react";
import "./button.css";

interface ButtonProps {
	color?: string;
	label: string;
	children?: ReactNode;
	style?: Object;
}

export const Button = ({ color = "blue", ...props }: ButtonProps) => (
	<button className="button" {...props} style={{ backgroundColor: color, ...props.style }}>
		{props.label}
	</button>
);
