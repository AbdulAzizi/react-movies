import { Card } from "../stories/card/Card";
import { Image } from "../stories/image/Image";

interface movieInfoProps {
	movie: Movie;
}

export const MovieInfo = (props: movieInfoProps) => {
	const { movie } = { ...props };
	return (
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
					backgroundColor: "rgb(0 0 0 / 90%)",
					position: "relative",
					padding: "50px 0px",
				}}
			>
				<div style={{ maxWidth: "1200px", margin: "auto" }}>
					<div style={{ display: "flex", flexWrap: "wrap" }}>
						<div style={{ flex: "0 0 30%" }}>
							<div style={{ padding: "20px" }}>
								<Card flat tile padding={0}>
									<Image
										contain={false}
										src={"https://www.themoviedb.org/t/p/w440_and_h660_face/" + movie.poster_path}
									/>
								</Card>
							</div>
						</div>
						<div style={{ flex: "0 0 70%", color: "white" }}>
							<div style={{ padding: "20px" }}>
								<div style={{ display: "flex", alignItems: "center", marginBottom: "5px" }}>
									<div style={{ display: "inline-block", fontWeight: 300, fontSize: "60px" }}>
										{movie.title}
									</div>
									<div>
										<div
											style={{
												display: "inline-block",
												fontSize: "30px",
												border: "1px white solid",
												color: "#a1e66f",
												borderRadius: 100,
												padding: "15px",
												marginLeft: "20px",
											}}
										>
											{movie.vote_average}
										</div>
									</div>
								</div>
								<div>
									<span style={{ fontSize: "18px" }}>
										{movie.genres.map((g, index) => (
											<span key={g.id}>
												<span>{g.name}</span>
												{index !== movie.genres.length - 1 && <span>, </span>}
											</span>
										))}
									</span>
								</div>
								<div style={{ color: "#f65262", fontSize: "30px", paddingTop: "20px" }}>
									<span>{new Date(movie.release_date).getFullYear()}</span>
									<span style={{ marginLeft: "30px" }}>{movie.runtime} min</span>
								</div>
								<p style={{ fontSize: "20px", paddingTop: "20px" }}>{movie.overview}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
