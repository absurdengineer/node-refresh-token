const router = require("express").Router();
const AuthControllers = require("../controllers/auth.controllers");

router.post("/login", AuthControllers.login);
router.post("/signup", AuthControllers.signup);

module.exports = router;
