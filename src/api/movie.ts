import axiosClient from "./apiClient";

export function getPopularMovies() {
	return axiosClient.get("/movie/popular");
}
export function getMovieInfo(movie_id: number) {
	return axiosClient.get(`/movie/${movie_id}`);
}
