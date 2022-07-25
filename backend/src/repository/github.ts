import axios from "axios";
import { GitHubFavourites } from "../interface/favourites";
import utils from "../util";

const getFavourites = async (user: string): Promise<GitHubFavourites[]> => {
  const response = await axios.get<GitHubFavourites[]>(
    `${utils.baseUrl}/user/starred`,
    {
      headers: {
        Authorization: utils.authorization,
      },
    }
  );
  return response.data;
};

export default { getFavourites };
