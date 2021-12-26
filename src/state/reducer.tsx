import { combineReducers } from "redux";
import moviesReducer from "./modules/movies/moviesReducer";
import filtersReducer from "./modules/filters/filtersReducer";

const reducers = combineReducers({ movies: moviesReducer, filters: filtersReducer });

export default reducers;
export type State = ReturnType<typeof reducers>;
