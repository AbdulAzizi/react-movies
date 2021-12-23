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
	const searchBy = useSelector((state: State) => state.filters.searchBy);

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

	const filteredMovies = () => {
		return movies.filter((m: Movie) => {
			if (searchBy === "title") return m.title.includes(searchString);
			else if (searchBy === "genres") return m.genres.filter((g) => g.name.includes(searchString)).length;
		});
	};

	const sort = (movies: Movie[]) => {
		return movies.sort((a: Movie, b: Movie) => {
			if (sortBy === "release_date") {
				return new Date(b.release_date).valueOf() - new Date(a.release_date).valueOf();
			} else {
				return b.vote_average - a.vote_average;
			}
		});
	};

	return (
		<>
			<SearchBanner searchBy={searchBy} />
			<SortByPanel foundMoviesNumber={filteredMovies().length} sortBy={sortBy} />
			<MoviesGrid movies={sort(filteredMovies())} />
		</>
	);
};

export default Home;
