import { ReactNode } from "react";
import "./card.css";

interface CardProps {
	tile?: boolean;
	flat?: boolean;
	outline?: boolean;
	color?: string;
	padding?: number;
	children?: ReactNode;
}

export const Card = ({
	color = "white",
	tile = false,
	flat = false,
	outline = false,
	padding = 10,
	...props
}: CardProps) => {
	return (
		<div
			className={["card", tile && "tile", !flat && "shadow", outline && "outline"].join(" ")}
			style={{ backgroundColor: color, padding: padding }}
		>
			{props.children ? props.children : "Card"}
		</div>
	);
};
