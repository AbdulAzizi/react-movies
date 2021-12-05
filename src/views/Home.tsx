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
	const popularMoviesUrl = "https://api.themoviedb.org/3/movie/popular";
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
		<div style={{ maxWidth: "1200px", margin: "auto" }}>
			<div style={{ display: "flex", flexWrap: "wrap" }}>
				{movies.map((m) => {
					return (
						<div style={{ flex: "0 0 33.333333%" }}>
							<div style={{ padding: "20px" }}>
								<img
									style={{ width: "100%" }}
									src={"https://www.themoviedb.org/t/p/w440_and_h660_face/" + m.poster_path}
									alt=""
								/>
								<div style={{ padding: "20px 0px" }}>
									<div style={{ display: "flex", justifyContent: "space-between" }}>
										<span style={{ color: "#bdbdbd" }}>{m.title}</span>
										<span
											style={{
												color: "#bdbdbd",
												border: "1px #555 solid",
												borderRadius: "5px",
												padding: "4px 15px",
												fontSize: "13px",
											}}
										>
											{new Date(m.release_date).getFullYear()}
										</span>
									</div>
									<span style={{ color: "#818181", fontSize: "14px" }}>
										{m.genres.length && m.genres[0].name}
									</span>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Home;
