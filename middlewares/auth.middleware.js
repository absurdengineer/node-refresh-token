const { verifyAccessToken } = require("../helpers/jwt.helpers");

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ message: `No token provided` });
  const user = verifyAccessToken(token);
  if (!user) return res.status(400).json({ message: "Invalid/Expired token" });
  req.user = user;
  next();
};

module.exports = authMiddleware;
