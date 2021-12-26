import { Dispatch } from "redux";
import { ActionType } from "./moviesActionTypes";
import { StoreAction } from "./moviesActions";

export const storeMovies = (movies: Movie[]) => {
	return (dispatch: Dispatch<StoreAction>) => {
		dispatch({
			type: ActionType.STORE,
			payload: movies,
		});
	};
};
