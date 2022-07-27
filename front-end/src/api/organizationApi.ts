import { RepositoryOutput } from "../interface/github";
import api from "./config";

export const getOrganizationRepos = async (
  organization: string
): Promise<RepositoryOutput[]> => {
  const response = await api.get<RepositoryOutput[]>(
    `/repositories/${organization}`
  );
  return response.data;
};
