import { combineReducers } from "redux";
import moviesReducer from "./modules/movies/moviesReducer";
import movieReducer from "./modules/movieInfo/movieInfoReducer";
import filtersReducer from "./modules/filters/filtersReducer";

const reducers = combineReducers({ movies: moviesReducer, filters: filtersReducer, movieInfo: movieReducer });

export default reducers;
export type State = ReturnType<typeof reducers>;
