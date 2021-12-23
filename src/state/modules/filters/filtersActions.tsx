import { ActionType } from "./filtersActionTypes";

interface SetSearchStringAction {
	type: ActionType.SET_SEARCH_STRING;
	payload: string;
}
interface SetSortByAction {
	type: ActionType.SET_SORT_BY;
	payload: "release_date" | "rating";
}
interface SetSearchByAction {
	type: ActionType.SET_SEARCH_BY;
	payload: "title" | "genres";
}

export type Action = SetSearchStringAction | SetSortByAction | SetSearchByAction;
