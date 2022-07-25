import { FavouritesOutput } from "../interface/favourites";
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

const addToFavourites = async (owner: string, repo: string) =>
  repository.addToFavourites(owner, repo);

const removeFromFavourites = async (owner: string, repo: string) =>
  repository.removeFromFavourites(owner, repo);

const isFavourite = async (owner: string, repo: string) =>
  repository.isFavourite(owner, repo);

export default {
  getFavourites,
  addToFavourites,
  removeFromFavourites,
  isFavourite,
};
