import express from "express";
import cors from "cors";
import middlewares from "./middlewares";
import routes from "./routes";

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());
app.use(middlewares.setHeaders);
app.use("/user-zoom", routes);

app.get("/", (req, res) => {
  res.send("Welcome to UserZoom app!");
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}...`));
