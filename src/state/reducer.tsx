import { combineReducers } from "redux";
import movieReducer from "./modules/movie/movieReducer";
import filtersReducer from "./modules/filters/filtersReducer";

const reducers = combineReducers({ movies: movieReducer, filters: filtersReducer });

export default reducers;
export type State = ReturnType<typeof reducers>;
