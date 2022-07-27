import api from "./config";

export const getFavourites = async () => {
  const response = await api.get("/user/favourites");
  return response.data;
};

export const addToFavourites = async (author: string, repo: string) => {
  const response = await api.put(`/user/favourites/${author}/${repo}`);
  return response.data;
};

export const removeFromFavourites = async (author: string, repo: string) => {
  const response = await api.delete(`/user/favourites/${author}/${repo}`);
  return response.data;
};

export const isFavourite = async (author: string, repo: string) => {
  const response = await api.get(`/user/is-favourite/${author}/${repo}`);
  return response.data;
};
