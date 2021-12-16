import { ReactNode } from "react";
import React from "react";
import "./button.css";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLElement> {
	size?: "small" | "medium" | "large";
	color?: string;
	children?: ReactNode;
}

export const Button = ({ size = "medium", color = "#0089ff", ...props }: ButtonProps) => (
	<button
		{...props}
		style={{ backgroundColor: color, ...props.style }}
		className={["button", size, props.className].join(" ")}
	>
		{props.children}
	</button>
);
