import { combineReducers } from "redux";
import movieReducer from "./modules/movie/movie.reducer";

const reducers = combineReducers({ movies: movieReducer });

export default reducers;
export type State = ReturnType<typeof reducers>;
