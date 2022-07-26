import axios from "axios";
import { GitHubFavourites } from "../interface/favourites";
import { EmptyResponse } from "../interface/general";
import utils from "../util";

const getFavourites = async (): Promise<GitHubFavourites[]> => {
  const response = await axios.get<GitHubFavourites[]>(
    `${utils.baseUrl}/user/starred`,
    utils.header
  );
  return response.data;
};

const isFavourite = async (
  owner: string,
  repo: string
): Promise<EmptyResponse> => {
  const response = await axios.get<EmptyResponse>(
    `${utils.baseUrl}/user/starred/${owner}/${repo}`,
    utils.header
  );
  return response.data;
};

const addToFavourites = async (
  owner: string,
  repo: string
): Promise<EmptyResponse> => {
  console.log(owner, repo);

  const response = await axios.put<EmptyResponse>(
    `${utils.baseUrl}/user/starred/${owner}/${repo}`,
    {},
    utils.header
  );
  return response.data;
};

const removeFromFavourites = async (
  owner: string,
  repo: string
): Promise<EmptyResponse> => {
  console.log(owner, repo);

  const response = await axios.delete<EmptyResponse>(
    `${utils.baseUrl}/user/starred/${owner}/${repo}`,
    utils.header
  );
  return response.data;
};

export default {
  getFavourites,
  isFavourite,
  addToFavourites,
  removeFromFavourites,
};
