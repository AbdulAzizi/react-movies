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
import { TextField } from "../stories/textField/TextField";
import { Button } from "../stories/button/Button";

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
		<>
			<div style={{ overflow: "hidden", position: "relative" }}>
				<div
					style={{
						backgroundImage:
							"url(https://s.studiobinder.com/wp-content/uploads/2019/12/The-Best-Order-to-Watch-Marvel-Movies-Featured-StudioBinder.jpg.webp)",

						filter: "blur(4px)",
						WebkitFilter: "blur(4px)",
						height: "100%",
						backgroundRepeat: "no-repeat",
						backgroundSize: "cover",
						position: "absolute",
						top: 0,
						bottom: 0,
						left: 0,
						right: 0,
					}}
				></div>
				<div
					style={{
						backgroundColor: "rgb(0 0 0 / 70%)",
						position: "relative",
					}}
				>
					<div style={{ maxWidth: "1000px", margin: "auto", padding: "100px 20px" }}>
						<h1
							style={{
								fontWeight: 300,
								color: "#fff",
								textTransform: "uppercase",
								paddingBottom: "40px",
							}}
						>
							Find your movie
						</h1>
						<div style={{ display: "flex", flexWrap: "wrap" }}>
							<div style={{ flex: "0 0 75%", paddingRight: "15px", boxSizing: "border-box" }}>
								<TextField transparent outline={false} name="search" label="Search" />
							</div>
							<Button
								style={{
									flex: "0 0 25%",
								}}
								label="Search"
								color="#f65262"
							/>
						</div>
					</div>
				</div>
			</div>
			<div style={{ maxWidth: "1200px", margin: "auto" }}>
				<div style={{ display: "flex", flexWrap: "wrap" }}>
					{movies.map((m) => {
						return (
							<div key={m.id} style={{ flex: "0 0 33.333333%" }}>
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
		</>
	);
};

export default Home;
