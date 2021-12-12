import { ReactNode } from "react";
import "./chip.css";

interface ChipProps {
	children?: ReactNode;
}

export const Chip = (props: ChipProps) => {
	return <div className="chip">{props.children}</div>;
};
