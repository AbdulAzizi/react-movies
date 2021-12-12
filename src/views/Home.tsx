import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { storeMovies } from "../state/modules/movie/movie.action.creators";
import { State } from "../state/reducer";
import { Card } from "../stories/card/Card";
import { ListItemPrimaryText } from "../stories/list/listItemPrimaryText/ListItemPrimaryText";
import { ListItemSecondaryText } from "../stories/list/listItemSecondaryText/ListItemSecondaryText";
import { ListItem } from "../stories/list/listItem/ListItem";
import { ListItemContent } from "../stories/list/listItemContent/ListItemContent";
import { ListItemAction } from "../stories/list/listItemAction/ListItemAction";
import { Chip } from "../stories/chip/Chip";
import { Image } from "../stories/image/Image";

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
								<Card flat tile padding={0}>
									<Image
										contain={false}
										src={"https://www.themoviedb.org/t/p/w440_and_h660_face/" + m.poster_path}
									/>
								</Card>
								<ListItem>
									<ListItemContent>
										<ListItemPrimaryText>{m.title}</ListItemPrimaryText>
										<ListItemSecondaryText>
											{m.genres.length && m.genres[0].name}
										</ListItemSecondaryText>
									</ListItemContent>
									<ListItemAction>
										<Chip>{new Date(m.release_date).getFullYear()}</Chip>
									</ListItemAction>
								</ListItem>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Home;
