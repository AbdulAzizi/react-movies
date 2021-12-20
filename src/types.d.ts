interface Genre {
	id: number;
	name: string;
}
interface Movie {
	id: number;
	title: string;
	poster_path: string;
	genres: Genre[];
	genre_ids: number[];
	release_date: Date;
	vote_average: number;
}
interface Filters {
	searchString: string;
	sortBy: "release_date" | "rating";
}
