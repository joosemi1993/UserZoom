import { RepositoryOutput } from "../interface/favourites";
import { EmptyResponse } from "../interface/general";
import repository from "../repository/github";
import util from "../util";

const getFavourites = async (): Promise<RepositoryOutput[]> => {
  const favouritesList = await repository.getFavourites();
  return util.filterRepoList(favouritesList);
};

const isFavourite = async (
  owner: string,
  repo: string
): Promise<EmptyResponse> => repository.isFavourite(owner, repo);

const addToFavourites = async (
  owner: string,
  repo: string
): Promise<EmptyResponse> => repository.addToFavourites(owner, repo);

const removeFromFavourites = async (
  owner: string,
  repo: string
): Promise<EmptyResponse> => repository.removeFromFavourites(owner, repo);

export default {
  getFavourites,
  isFavourite,
  addToFavourites,
  removeFromFavourites,
};
