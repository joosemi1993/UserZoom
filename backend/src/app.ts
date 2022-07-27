import express, { Request, Response, NextFunction, Errback } from "express";
import cors from "cors";
import middlewares from "./middlewares";
import routes from "./routes";

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());
app.use(middlewares.setHeaders);
app.use("/userzoom", routes);

app.use((err: any, res: Response) => {
  res.status(err.status || 500).json({
    message: err.message,
    errors: err.errors,
  });
});

app.get("/", (req, res) => {
  res.send("Welcome to UserZoom app!");
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}...`));
