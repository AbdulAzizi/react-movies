import { combineReducers } from "redux";
import movieReducer from "./modules/movie/movieReducer";
import searchStringReducer from "./modules/searchString/searchStringReducer";

const reducers = combineReducers({ movies: movieReducer, searchString: searchStringReducer });

export default reducers;
export type State = ReturnType<typeof reducers>;
