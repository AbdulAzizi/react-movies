import { ActionType } from "./moviesActionTypes";

// store action interface
export interface StoreAction {
	type: ActionType.STORE;
	payload: Movie[];
}
