import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { getMovieInfo } from "../api/movie";
import { storeMovie } from "../state/modules/movieInfo/movieInfoActionCreator";
import { Card } from "../stories/card/Card";
import { Chip } from "../stories/chip/Chip";
import { Image } from "../stories/image/Image";
import { ListItem } from "../stories/list/listItem/ListItem";
import { ListItemAction } from "../stories/list/listItemAction/ListItemAction";
import { ListItemContent } from "../stories/list/listItemContent/ListItemContent";
import { ListItemPrimaryText } from "../stories/list/listItemPrimaryText/ListItemPrimaryText";
import { ListItemSecondaryText } from "../stories/list/listItemSecondaryText/ListItemSecondaryText";

interface MoviesGridProps {
	movies: Movie[];
}

const MoviesGrid = (props: MoviesGridProps) => {
	const { movies } = { ...props };
	const storeMovieActionCreator = bindActionCreators(storeMovie, useDispatch());
	const selectAMovie = async (movie: Movie) => {
		const movieInfo = await getMovieInfo(movie.id);
		storeMovieActionCreator(movieInfo.data);
		window.scrollTo(0, 0);
	};
	return (
		<div style={{ maxWidth: "1200px", margin: "auto" }}>
			<div style={{ display: "flex", flexWrap: "wrap" }}>
				{movies.map((m) => {
					return (
						<div key={m.id} style={{ flex: "0 0 33.333333%" }}>
							<div style={{ padding: "20px" }}>
								<button style={{ border: 0, cursor: "pointer" }} onClick={() => selectAMovie(m)}>
									<Card flat tile padding={0}>
										<Image
											contain={false}
											src={"https://www.themoviedb.org/t/p/w440_and_h660_face/" + m.poster_path}
										/>
									</Card>
								</button>
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
export default MoviesGrid;
