import express from "express";
import favouritesController from "../controllers/favourites";
import orgController from "../controllers/organization";

const router = express.Router();

router.get("/user/favourites", favouritesController.getFavourites);
router.get("/user/is-favourite/:owner/:repo", favouritesController.isFavourite);
router.get(
  "/repositories/:organization",
  orgController.getOrganizationRepositories
);
router.put(
  "/user/favourites/:owner/:repo",
  favouritesController.addToFavourites
);
router.delete(
  "/user/favourites/:owner/:repo",
  favouritesController.removeFromFavourites
);

export default router;
