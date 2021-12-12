import { ReactNode } from "react";
import "./listItemSecondaryText.css";

interface ListItemSecondaryTextProps {
	children?: ReactNode;
}

export const ListItemSecondaryText = (props: ListItemSecondaryTextProps) => {
	return <div className="list-item-secondary-text">{props.children ? props.children : "Secondary text"}</div>;
};
