import { RepositoryOutput } from "../interface/favourites";
import repository from "../repository/github";
import util from "../util";

const getOrganizationRepositories = async (
  organization: string
): Promise<RepositoryOutput[]> => {
  const organizationRepoList = await repository.getOrganizationRepositories(
    organization
  );
  return util.filterRepoList(organizationRepoList);
};

export default { getOrganizationRepositories };
