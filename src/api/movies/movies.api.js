const REACT_APP_TMDB_APIKEY = process.env.REACT_APP_TMDB_APIKEY;
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${REACT_APP_TMDB_APIKEY}`,
  },
};
const getMovies = async (endPoint) => {
  const res = await fetch(endPoint, options);
  const data = await res.json();
  return data.results;
};
const getMovie = async (movieId) => {
  const endPoint = `https://api.themoviedb.org/3/movie/${movieId}?language=ko-KR&page=1&region=KR`;
  const res = await fetch(endPoint, options);
  const data = await res.json();
  console.log(data);
  return data;
};
export const moviesAPI = {
  getMovie,
  getMovies,
};
export default moviesAPI;
