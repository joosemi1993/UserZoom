import api from "./config";

const getOrganizationRepos = async (organization: string) => {
  const response = await api.get(`/repositories/${organization}`);
  return response.data;
};

export default { getOrganizationRepos };
