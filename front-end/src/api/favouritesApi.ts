import api from "./config";

const getFavourites = async () => {
  const response = await api.get("/user/favourites");
  return response.data;
};

const addToFavourites = async (author: string, repo: string) => {
  const response = await api.put(`/user/favourites/${author}/${repo}`);
  return response.data;
};

const removeFromFavourites = async (author: string, repo: string) => {
  const response = await api.delete(`/user/favourites/${author}/${repo}`);
  return response.data;
};

const isFavourite = async (author: string, repo: string) => {
  const response = await api.get(`/user/is-favourite/${author}/${repo}`);
  return response.data;
};

export default {
  getFavourites,
  addToFavourites,
  removeFromFavourites,
  isFavourite,
};
