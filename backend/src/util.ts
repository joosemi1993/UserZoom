import { GitHubRepository, RepositoryOutput } from "./interface/favourites";

require("dotenv").config();

const constants = {
  baseUrl: "https://api.github.com",
  header: {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
    },
  },
};

const filterRepoList = (
  githubRepoList: GitHubRepository[]
): RepositoryOutput[] => {
  const reposFiltered: RepositoryOutput[] = githubRepoList.map((repo) => {
    const {
      id,
      name,
      private: privateRepo,
      html_url,
      description,
      created_at,
      updated_at,
    } = repo;
    const { login, avatar_url } = repo.owner;
    return {
      id,
      name,
      private: privateRepo,
      url: html_url,
      description,
      created_at,
      updated_at,
      owner: {
        name: login,
        avatar: avatar_url,
      },
    };
  });
  return reposFiltered;
};

export default { constants, filterRepoList };
