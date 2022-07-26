import { NextFunction, Request, Response } from "express";
import HttpStatus from "http-status-codes";
import { RepositoryOutput, IsFavouriteOutput } from "../interface/favourites";
import { EmptyResponse } from "../interface/general";
import service from "../services/favourites";

const getFavourites = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response<RepositoryOutput> | void> => {
  try {
    const favourites = await service.getFavourites();
    return res.status(HttpStatus.OK).json(favourites);
  } catch (error) {
    return next(error);
  }
};

const addToFavourites = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response<EmptyResponse> | void> => {
  try {
    const owner = req.params.owner;
    const repo = req.params.repo;
    await service.addToFavourites(owner, repo);
    return res.status(HttpStatus.NO_CONTENT).send();
  } catch (error) {
    return next(error);
  }
};

const removeFromFavourites = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response<EmptyResponse> | void> => {
  try {
    const owner = req.params.owner;
    const repo = req.params.repo;
    await service.removeFromFavourites(owner, repo);
    return res.status(HttpStatus.NO_CONTENT).send();
  } catch (error) {
    return next(error);
  }
};

const isFavourite = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response<IsFavouriteOutput> | void> => {
  try {
    const owner = req.params.owner;
    const repo = req.params.repo;
    const isFavourite = await service.isFavourite(owner, repo);

    if (!isFavourite) return res.status(200).send({ isFavourite: true });

    return res.status(HttpStatus.NOT_MODIFIED).send();
  } catch (error: any) {
    if (error.response.status === 404) {
      return res.status(HttpStatus.NOT_MODIFIED).send();
    }
    return next(error);
  }
};

export default {
  getFavourites,
  isFavourite,
  addToFavourites,
  removeFromFavourites,
};
