interface Genre {
	id: number;
	name: string;
}
interface Movie {
	title: string;
	poster_path: string;
	genres: Genre[];
	genre_ids: number[];
	release_date: string;
}
