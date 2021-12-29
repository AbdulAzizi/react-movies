import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { storeMovies } from "../state/modules/movies/moviesActionCreators";
import { State } from "../state/reducer";

import MoviesGrid from "../components/MoviesGrid";
import SearchBanner from "../components/SearchBanner";
import SortByPanel from "../components/SortByPanel";
import { getPopularMovies } from "../api/movie";
import { getAllGenres } from "../api/genre";
import { MovieInfo } from "../components/MovieInfo";

const Home = () => {
	const movieInfo = useSelector((state: State) => state.movieInfo);
	const movies = useSelector((state: State) => state.movies);
	const searchString = useSelector((state: State) => state.filters.searchString);
	const sortBy = useSelector((state: State) => state.filters.sortBy);
	const searchBy = useSelector((state: State) => state.filters.searchBy);

	const storeMoviesActionCreator = bindActionCreators(storeMovies, useDispatch());

	useEffect(() => {
		initializeMoviesWithGenres();
	}, []);

	const initializeMoviesWithGenres = async () => {
		const popularMovies = await getPopularMovies();
		const allGenres = await getAllGenres();
		const moviesWithGenres = populateMoviesWithGenres(popularMovies.data.results, allGenres.data.genres);
		storeMoviesActionCreator(moviesWithGenres);
	};

	const populateMoviesWithGenres = (movies: Movie[], genres: Genre[]) => {
		return movies.map((movie: Movie) => {
			movie.genres = genres.filter((genre: Genre) => {
				return movie.genre_ids.includes(genre.id);
			});
			movie.release_date = new Date(movie.release_date);
			return movie;
		});
	};

	const filteredMovies = () => {
		return movies.filter((m: Movie) => {
			if (searchBy === "title") return m.title.includes(searchString);
			else if (searchBy === "genres") return m.genres.some((g) => g.name.includes(searchString));
		});
	};

	const sort = (movies: Movie[]) => {
		return movies.sort((a: Movie, b: Movie) => {
			if (sortBy === "release_date") {
				return b.release_date.valueOf() - a.release_date.valueOf();
			} else {
				return b.vote_average - a.vote_average;
			}
		});
	};

	return (
		<>
			{movieInfo ? <MovieInfo movie={movieInfo} /> : <SearchBanner searchBy={searchBy} />}
			<SortByPanel foundMoviesNumber={filteredMovies().length} sortBy={sortBy} />
			<MoviesGrid movies={sort(filteredMovies())} />
		</>
	);
};

export default Home;
