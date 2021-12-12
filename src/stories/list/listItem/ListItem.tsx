import { ReactNode } from "react";
import "./listItem.css";

interface ListItemProps {
	children?: ReactNode;
}

export const ListItem = (props: ListItemProps) => {
	return <div className="list-item">{props.children}</div>;
};
