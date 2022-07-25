import express from "express";
import favouritesController from "../controllers/favourites";

const router = express.Router();

router.get("/user/favourites/:user", favouritesController.getFavourites);
router.get("/user/is-favourite/:owner/:repo", favouritesController.isFavourite);
router.put(
  "/user/favourites/:owner/:repo",
  favouritesController.addToFavourites
);
router.delete(
  "/user/favourites/:owner/:repo",
  favouritesController.removeFromFavourites
);

export default router;
