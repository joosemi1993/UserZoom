require("dotenv").config();

const constants = {
  baseUrl: "https://api.github.com",
  authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
};

export default constants;
