const router = require("express").Router();
const AuthRouter = require("./auth.router");
const MovieRouter = require("./movie.router");

router.use("/auth", AuthRouter);
router.use("/movies", MovieRouter);

module.exports = router;
