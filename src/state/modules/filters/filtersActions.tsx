import { ActionType } from "./filtersActionTypes";

interface SetSearchStringAction {
	type: ActionType.SET_SEARCH_STRING;
	payload: string;
}
interface SetSortAction {
	type: ActionType.SET_SORT_BY;
	payload: "release_date" | "rating";
}

export type Action = SetSearchStringAction | SetSortAction;
