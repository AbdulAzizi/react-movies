import axios from "axios";
import { useEffect, useState } from "react";
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
import { ToggleButtonGroup } from "../stories/toggleButtonGroup/ToggleButtonGroup";
import { ToggleButton } from "../stories/toggleButton/ToggleButton";

const Home = () => {
	const movies = useSelector((state: State) => state.movies);
	const dispatch = useDispatch();
	const storeMoviesActionCreator = bindActionCreators(storeMovies, dispatch);
	const popularMoviesUrl = "https://api.themoviedb.org/3/movie/popular";
	const genreUrl = "https://api.themoviedb.org/3/genre/movie/list";
	const [search, setSearch] = useState("");
	const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
	const [sortBy, setSortBy] = useState("realease_date");
	const handleSortClick = (e: any) => {
		setSortBy(e.target.value);
	};

	const applySearch = () => {
		setFilteredMovies(movies.filter((m, i) => m.title.includes(search)));
	};
	// useEffect(() => {
	// 	// implement sort here
	// }, [sortBy]);

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
				setFilteredMovies(tempMovies);
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
								<TextField
									value={search}
									transparent
									outline={false}
									name="search"
									label="Search"
									onInput={(e) => setSearch((e.target as HTMLInputElement).value)}
								/>
							</div>
							<Button
								style={{
									flex: "0 0 25%",
								}}
								color="#f65262"
								onClick={applySearch}
							>
								Search
							</Button>
						</div>
					</div>
				</div>
			</div>
			<div style={{ backgroundColor: "#555" }}>
				<div
					style={{
						maxWidth: "1000px",
						margin: "auto",
						padding: "10px 20px",
						color: "white",
						display: "flex",
						justifyContent: "space-between",
						flexFlow: "row wrap",
					}}
				>
					<span style={{ margin: "auto 0", fontWeight: 900 }}>{filteredMovies.length} movies found</span>
					<div style={{ display: "flex", alignContent: "center" }}>
						<div style={{ margin: "auto", marginRight: "15px", fontWeight: 300 }}> SORT BY</div>
						<ToggleButtonGroup value={sortBy} onChange={handleSortClick} size="small" color="#f65262">
							<ToggleButton value="realease_date" className={sortBy === "realease_date" ? "active" : ""}>
								Realease date
							</ToggleButton>
							<ToggleButton value="rating" className={sortBy === "rating" ? "active" : ""}>
								Rating
							</ToggleButton>
						</ToggleButtonGroup>
					</div>
				</div>
			</div>
			<div style={{ maxWidth: "1200px", margin: "auto" }}>
				<div style={{ display: "flex", flexWrap: "wrap" }}>
					{filteredMovies.map((m) => {
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
