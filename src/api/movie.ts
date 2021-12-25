import axiosClient from "./apiClient";

export function getPopularMovies() {
	return axiosClient.get("/movie/popular");
}
