import { ReactNode } from "react";
import React from "react";
import "./button.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLElement> {
	color?: string;
	label: string;
	children?: ReactNode;
}

export const Button = ({ color = "blue", ...props }: ButtonProps) => (
	<button className="button" {...props} style={{ backgroundColor: color, ...props.style }}>
		{props.label}
	</button>
);
