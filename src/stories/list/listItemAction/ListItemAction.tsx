import { ReactNode } from "react";
import "./listItemAction.css";

interface ListItemActionProps {
	children?: ReactNode;
}

export const ListItemAction = (props: ListItemActionProps) => {
	return <div className="list-item-action">{props.children}</div>;
};
