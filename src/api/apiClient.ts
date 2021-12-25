import axios from "axios";

const axiosClient = axios.create({
	baseURL: "https://api.themoviedb.org/3",
	headers: {
		Accept: "aplication/json",
		"Content-Type": "aplication/json",
	},
	params: {
		api_key: process.env.REACT_APP_API_KEY,
	},
});

export default axiosClient;
