import {
  EmptyResponse,
  IsFavouriteOutput,
  RepositoryOutput,
} from "../interface/github";
import api from "./config";

export const getFavourites = async (): Promise<RepositoryOutput[]> => {
  const response = await api.get<RepositoryOutput[]>("/user/favourites");
  return response.data;
};

export const addToFavourites = async (
  author: string,
  repo: string
): Promise<EmptyResponse> => {
  const response = await api.put<EmptyResponse>(
    `/user/favourites/${author}/${repo}`
  );
  return response.data;
};

export const removeFromFavourites = async (
  author: string,
  repo: string
): Promise<EmptyResponse> => {
  const response = await api.delete<EmptyResponse>(
    `/user/favourites/${author}/${repo}`
  );
  return response.data;
};

export const isFavourite = async (
  author: string,
  repo: string
): Promise<IsFavouriteOutput> => {
  const response = await api.get<IsFavouriteOutput>(
    `/user/is-favourite/${author}/${repo}`
  );
  return response.data;
};
