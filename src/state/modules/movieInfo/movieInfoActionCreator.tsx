import { Dispatch } from "redux";
import { ActionType } from "./movieInfoActionTypes";
import { Action } from "./movieInfoActions";

export const storeMovie = (movie: Movie) => {
	return (dispatch: Dispatch<Action>) => {
		dispatch({
			type: ActionType.STORE_MOVIE,
			payload: movie,
		});
	};
};
