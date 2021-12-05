import { ActionType } from "./movie.action.types";

// store action interface
export interface StoreAction {
	type: ActionType.STORE;
	payload: Movie[];
}
