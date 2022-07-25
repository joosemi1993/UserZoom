import axios from "axios";
import { GitHubFavourites } from "../interface/favourites";
import utils from "../util";

const getFavourites = async (user: string): Promise<GitHubFavourites[]> => {
  const response = await axios.get<GitHubFavourites[]>(
    `${utils.baseUrl}/user/starred`,
    utils.header
  );
  return response.data;
};

const isFavourite = async (owner: string, repo: string) => {
  const response = await axios.get<GitHubFavourites[]>(
    `${utils.baseUrl}/user/starred/${owner}/${repo}`,
    utils.header
  );
  return response.data;
};

const addToFavourites = async (owner: string, repo: string) => {
  console.log(owner, repo);

  const response = await axios.put(
    `${utils.baseUrl}/user/starred/${owner}/${repo}`,
    {},
    utils.header
  );
  return response.data;
};

const removeFromFavourites = async (owner: string, repo: string) => {
  console.log(owner, repo);

  const response = await axios.delete(
    `${utils.baseUrl}/user/starred/${owner}/${repo}`,
    utils.header
  );
  return response.data;
};

export default {
  getFavourites,
  addToFavourites,
  removeFromFavourites,
  isFavourite,
};
