import axios from 'axios';

export const searchShows = async (query) => {
  const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${query}`);
  return res.data;
};

export const getShowDetail = async (id) => {
  const res = await axios.get(`https://api.tvmaze.com/shows/${id}`);
  return res.data;
};

export const getShowEpisodes = async (id) => {
  const res = await axios.get(`https://api.tvmaze.com/shows/${id}/episodes`);
  return res.data;
};
