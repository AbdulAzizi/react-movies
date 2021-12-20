import { ActionType } from "./searchStringActionTypes";

export interface SetAction {
	type: ActionType.SET;
	payload: string;
}
