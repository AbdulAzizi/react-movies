import { SetAction } from "./searchStringActions";
import { ActionType } from "./searchStringActionTypes";

const initialValue: string = "";

const reducer = (state: string = initialValue, action: SetAction) => {
	switch (action.type) {
		case ActionType.SET:
			return action.payload;
		default:
			return state;
	}
};

export default reducer;
