import { NextFunction, Request, Response } from "express";
import HttpStatus from "http-status-codes";
import { FavouritesOutput } from "../interface/favourites";
import service from "../services/favourites";

const getFavourites = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response<FavouritesOutput> | void> => {
  try {
    const user = req.params.user;
    const favourites = await service.getFavourites(user);
    return res.status(HttpStatus.OK).json(favourites);
  } catch (error) {
    return next(error);
  }
};

export default { getFavourites };
