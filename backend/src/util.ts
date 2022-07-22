import constants from "./constants";

const generateOptions = (_path: string) => {
  return {
    hostname: constants.hostname,
    path: _path,
    headers: {
      "User-Agent": constants.user_agent,
    },
    OAUth: process.env.GITHUB_ACCESS_TOKEN,
  };
};

export default { generateOptions };
