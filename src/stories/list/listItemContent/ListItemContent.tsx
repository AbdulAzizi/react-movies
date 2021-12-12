import { ReactNode } from "react";
import "./listItemContent.css";

interface ListItemContentProps {
	children?: ReactNode;
}

export const ListItemContent = (props: ListItemContentProps) => {
	return <div className="list-item-content-text">{props.children ? props.children : ""}</div>;
};
