const router = require("express").Router();
const AuthController = require("../controllers/auth.controller");

router.post("/login", AuthController.login);
router.post("/refresh-token", AuthController.refreshToken);

module.exports = router;
