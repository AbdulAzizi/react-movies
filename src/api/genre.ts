import axiosClient from "./apiClient";

export function getAllGenres() {
	return axiosClient.get("/genre/movie/list");
}
