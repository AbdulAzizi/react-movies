import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { storeMovies } from "../state/modules/movie/movieActionCreators";
import { State } from "../state/reducer";

import MoviesGrid from "../components/MoviesGrid";
import SearchBanner from "../components/SearchBanner";
import SortByPanel from "../components/SortByPanel";

const Home = () => {
	const movies = useSelector((state: State) => state.movies);
	const searchString = useSelector((state: State) => state.filters.searchString);
	const sortBy = useSelector((state: State) => state.filters.sortBy);

	const popularMoviesUrl = "https://api.themoviedb.org/3/movie/popular";
	const storeMoviesActionCreator = bindActionCreators(storeMovies, useDispatch());
	const genreUrl = "https://api.themoviedb.org/3/genre/movie/list";

	useEffect(() => {
		// request movies
		axios.get(popularMoviesUrl, { params: { api_key: process.env.REACT_APP_API_KEY } }).then((resp) => {
			// get movies
			let tempMovies = resp.data.results;
			// request genres
			axios.get(genreUrl, { params: { api_key: process.env.REACT_APP_API_KEY } }).then((resp) => {
				// get genres
				let genres = resp.data.genres;
				// for each movie
				tempMovies = tempMovies.map((m: Movie) => {
					// find movie's genre and assign to genres property
					m.genres = genres.filter((g: Genre) => {
						return m.genre_ids.includes(g.id);
					});
					return m;
				});
				// update state
				storeMoviesActionCreator(tempMovies);
			});
		});
	}, []);

	return (
		<>
			<SearchBanner />
			<SortByPanel
				foundMoviesNumber={movies.filter((m: Movie) => m.title.includes(searchString)).length}
				sortBy={sortBy}
			/>
			<MoviesGrid movies={movies.filter((m: Movie) => m.title.includes(searchString))} />
		</>
	);
};

export default Home;
