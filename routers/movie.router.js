const router = require("express").Router();
const authMiddleware = require("../middlewares/auth.middleware");
const MoviesController = require("../controllers/movies.controller");

router.get("/", [authMiddleware], MoviesController.getMovies);

module.exports = router;
