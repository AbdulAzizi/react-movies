import { Dispatch } from "redux";
import { ActionType } from "./movie.action.types";
import { StoreAction } from "./movie.actions";
import { Movie } from "./movie.interface";

export const storeMovies = (movies: Movie[]) => {
	return (dispatch: Dispatch<StoreAction>) => {
		dispatch({
			type: ActionType.STORE,
			payload: movies,
		});
	};
};
