import { StoreAction } from "./movie.actions";
import { ActionType } from "./movie.action.types";

// declare initial state array type of Movie
const initialState: Movie[] = [];

// reducer exports function which returns state
// use initial state as a default value
const reducer = (state: Movie[] = initialState, action: StoreAction) => {
	switch (action.type) {
		case ActionType.STORE:
			return action.payload;
		default:
			return state;
	}
};

export default reducer;
