import axios from "axios";

const API_URL = "https://api.spacexdata.com/v3/";

const fetchFromApi = request => axios.get(API_URL + request);

export default fetchFromApi;
