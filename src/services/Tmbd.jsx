import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const API_KEY = 'ef6f1396403cc52137a9293d63758a7c';


// List of the most popular films today to create a collection on the homepage.
export const fetchTrending = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return response.data.results;
};


// Searching for a film by keyword on the films page.
export const fetchSearchByKeyword = async keyword => {
  const response = await axios.get(
    `search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${keyword}`
  );
  return response.data.results;
};


// Request full film information for the film page.
export const fetchMovieDetails = async movieId => {
  const response = await axios.get(
    `movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};


// Request for information on the acting ensemble for the film site.
export const fetchActors = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data.cast;
};


// Request for reviews for the film site.
export const fetchReviews = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return response.data.results;
};