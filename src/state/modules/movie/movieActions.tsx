import { ActionType } from "./movieActionTypes";

// store action interface
export interface StoreAction {
	type: ActionType.STORE;
	payload: Movie[];
}
