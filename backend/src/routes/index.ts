import express from "express";
import favouritesController from "../controllers/favourites";

const router = express.Router();

router.get("/user/favourites/:user", favouritesController.getFavourites);

export default router;
