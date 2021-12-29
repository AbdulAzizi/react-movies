import { Action } from "./movieInfoActions";
import { ActionType } from "./movieInfoActionTypes";

const initialValue = null;

const reducer = (state: Movie | null = initialValue, action: Action) => {
	switch (action.type) {
		case ActionType.STORE_MOVIE:
			return action.payload;
		default:
			return state;
	}
};

export default reducer;
