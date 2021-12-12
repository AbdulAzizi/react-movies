import { ReactNode } from "react";
import "./listItemPrimaryText.css";

interface ListItemPrimaryTextProps {
	children?: ReactNode;
}

export const ListItemPrimaryText = (props: ListItemPrimaryTextProps) => {
	return <div className="list-item-primary-text">{props.children ? props.children : "Primary text"}</div>;
};
