import axios from "axios";
import { GitHubRepository as GitHubRepository } from "../interface/favourites";
import { EmptyResponse } from "../interface/general";
import utils from "../util";

const {
  constants: { baseUrl, header },
} = utils;

const getFavourites = async (): Promise<GitHubRepository[]> => {
  const response = await axios.get<GitHubRepository[]>(
    `${baseUrl}/user/starred`,
    header
  );
  return response.data;
};

const isFavourite = async (
  owner: string,
  repo: string
): Promise<EmptyResponse> => {
  const response = await axios.get<EmptyResponse>(
    `${baseUrl}/user/starred/${owner}/${repo}`,
    header
  );
  return response.data;
};

const addToFavourites = async (
  owner: string,
  repo: string
): Promise<EmptyResponse> => {
  console.log(owner, repo);

  const response = await axios.put<EmptyResponse>(
    `${baseUrl}/user/starred/${owner}/${repo}`,
    {},
    header
  );
  return response.data;
};

const removeFromFavourites = async (
  owner: string,
  repo: string
): Promise<EmptyResponse> => {
  console.log(owner, repo);

  const response = await axios.delete<EmptyResponse>(
    `${baseUrl}/user/starred/${owner}/${repo}`,
    header
  );
  return response.data;
};

const getOrganizationRepositories = async (
  organization: string
): Promise<GitHubRepository[]> => {
  const response = await axios.get<GitHubRepository[]>(
    `${baseUrl}/orgs/${organization}/repos`,
    header
  );
  return response.data;
};

export default {
  getFavourites,
  isFavourite,
  addToFavourites,
  removeFromFavourites,
  getOrganizationRepositories,
};
