import { NextFunction, Request, Response } from "express";
import HttpStatus from "http-status-codes";
import { RepositoryOutput, IsFavouriteOutput } from "../interface/favourites";
import { EmptyResponse } from "../interface/general";
import service from "../services/organization";

const getOrganizationRepositories = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response<RepositoryOutput> | void> => {
  try {
    const organization = req.params.organization;
    const organizationRepos = await service.getOrganizationRepositories(
      organization
    );
    return res.status(HttpStatus.OK).json(organizationRepos);
  } catch (error) {
    return next(error);
  }
};

export default { getOrganizationRepositories };
