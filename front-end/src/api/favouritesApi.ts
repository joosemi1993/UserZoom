import api from "./config";

const getFavourites = async () => {
  const response = await api.get("/user/favourites");
  return response.data;
};

const removeFromFavourites = async (author: string, repo: string) => {
  const response = await api.delete(`/user/favourites/${author}/${repo}`);
  return response.data;
};

export default { getFavourites, removeFromFavourites };
