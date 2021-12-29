import { ActionType } from "./movieInfoActionTypes";

interface StoreMoviesAction {
	type: ActionType.STORE_MOVIE;
	payload: Movie;
}

export type Action = StoreMoviesAction;
