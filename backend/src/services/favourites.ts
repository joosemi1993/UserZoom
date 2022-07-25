import { FavouritesOutput } from "../interface/favourites";
import { EmptyResponse } from "../interface/general";
import repository from "../repository/github";

const getFavourites = async (user: string): Promise<FavouritesOutput[]> => {
  const favouritesList = await repository.getFavourites(user);
  const favouritesFiltered: FavouritesOutput[] = favouritesList.map((repo) => {
    const {
      id,
      name,
      private: privateRepo,
      html_url,
      description,
      created_at,
      updated_at,
    } = repo;
    const { login, avatar_url } = repo.owner;
    return {
      id,
      name,
      private: privateRepo,
      url: html_url,
      description,
      created_at,
      updated_at,
      owner: {
        name: login,
        avatar: avatar_url,
      },
    };
  });
  return favouritesFiltered;
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
