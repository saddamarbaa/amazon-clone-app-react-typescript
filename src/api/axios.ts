
import axios from "axios";

// Initializing axios with default TMDB URL
const instance = axios.create({
	baseURL: "https://fakestoreapi.com",
});

export default instance;
