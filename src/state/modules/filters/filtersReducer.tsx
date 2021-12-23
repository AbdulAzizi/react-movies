import { Action } from "./filtersActions";
import { ActionType } from "./filtersActionTypes";

const initialValue: Filters = { searchString: "", sortBy: "release_date", searchBy: "title" };

const reducer = (state: Filters = initialValue, action: Action) => {
	switch (action.type) {
		case ActionType.SET_SEARCH_STRING:
			return { ...state, searchString: action.payload };
		case ActionType.SET_SORT_BY:
			return { ...state, sortBy: action.payload };
		case ActionType.SET_SEARCH_BY:
			return { ...state, searchBy: action.payload };
		default:
			return state;
	}
};

export default reducer;
