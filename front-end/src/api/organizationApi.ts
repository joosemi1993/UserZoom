import api from "./config";

export const getOrganizationRepos = async (organization: string) => {
  const response = await api.get(`/repositories/${organization}`);
  return response.data;
};
