const router = require("express").Router();
const AuthControllers = require("../controllers/auth.controllers");

router.post("/login", AuthControllers.login);

module.exports = router;
