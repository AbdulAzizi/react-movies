import { Dispatch } from "redux";
import { ActionType } from "./movieActionTypes";
import { StoreAction } from "./movieActions";

export const storeMovies = (movies: Movie[]) => {
	return (dispatch: Dispatch<StoreAction>) => {
		dispatch({
			type: ActionType.STORE,
			payload: movies,
		});
	};
};
