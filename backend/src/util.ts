require("dotenv").config();

const constants = {
  baseUrl: "https://api.github.com",
  header: {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
    },
  },
};

export default constants;
