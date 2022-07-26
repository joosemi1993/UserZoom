import api from "./config";

const getFavourites = async () => {
  const response = await api.get("/user/favourites");
  return response.data;
};

export default getFavourites;
