import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { storeMovies } from "../state/modules/movie/movie.action.creators";
import { State } from "../state/reducer";

const Home = () => {
	const movies = useSelector((state: State) => state.movies);
	const dispatch = useDispatch();
	const storeMoviesActionCreator = bindActionCreators(storeMovies, dispatch);
	const url = "https://api.themoviedb.org/3/movie/popular";

	useEffect(() => {
		axios.get(url, { params: { api_key: process.env.REACT_APP_API_KEY } }).then((resp) => {
			storeMoviesActionCreator(resp.data.results);
		});
	}, []);
	return (
		<>
			<h1>Home Page</h1>
			<div>{movies.length}</div>
		</>
	);
};

export default Home;
