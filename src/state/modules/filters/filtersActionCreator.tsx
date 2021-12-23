import { Dispatch } from "redux";
import { ActionType } from "./filtersActionTypes";
import { Action } from "./filtersActions";

export const setSearchString = (str: string) => {
	return (dispatch: Dispatch<Action>) => {
		dispatch({
			type: ActionType.SET_SEARCH_STRING,
			payload: str,
		});
	};
};
export const setSortBy = (str: "release_date" | "rating") => {
	return (dispatch: Dispatch<Action>) => {
		dispatch({
			type: ActionType.SET_SORT_BY,
			payload: str,
		});
	};
};
export const setSearchBy = (str: "title" | "genres") => {
	return (dispatch: Dispatch<Action>) => {
		dispatch({
			type: ActionType.SET_SEARCH_BY,
			payload: str,
		});
	};
};
