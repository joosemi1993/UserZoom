import { FavouritesOutput } from "../interface/favourites";
import repo from "../repository/github";

const getFavourites = async (user: string): Promise<FavouritesOutput[]> => {
  const favouritesList = await repo.getFavourites(user);
  const favouritesFiltered: FavouritesOutput[] = favouritesList.map((repo) => {
    const { id, name, private: privateRepo, html_url, description } = repo;
    const { login, avatar_url } = repo.owner;
    return {
      id,
      name,
      private: privateRepo,
      url: html_url,
      description,
      owner: {
        name: login,
        avatar: avatar_url,
      },
    };
  });
  return favouritesFiltered;
};

export default { getFavourites };
