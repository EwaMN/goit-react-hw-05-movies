import axios from 'axios';

export const API_KEY = '4b0e5241db7c1c4977d947e5e29be4ce';

export const fetchTrend = async () => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
  );

  return res.data;
};

export const fetchSearch = async query => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );

  return res.data;
};

export const fetchDetails = async id => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
  );

  return res.data;
};

export const fetchCredits = async id => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );

  return res.data.cast;
};

export const fetchReviews = async id => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );

  return res.data;
};
