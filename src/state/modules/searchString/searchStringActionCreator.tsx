import { Dispatch } from "redux";
import { ActionType } from "./searchStringActionTypes";
import { SetAction } from "./searchStringActions";

export const setSearchString = (str: string) => {
	return (dispatch: Dispatch<SetAction>) => {
		dispatch({
			type: ActionType.SET,
			payload: str,
		});
	};
};
