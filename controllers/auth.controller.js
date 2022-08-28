const users = require("../data/users.json");
const jwt = require("jsonwebtoken");
const {
  signAccessToken,
  signRefreshToken,
  verifyRefreshToken,
} = require("../helpers/jwt.helpers");

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = users.find(
      (user) => user.username === username && user.password === password
    );
    if (!user) return res.status(400).json({ message: "Invalid credentials" });
    const accessToken = signAccessToken(user.id);
    const refreshToken = signRefreshToken(user.id);
    return res.status(200).json({
      data: { accessToken, refreshToken },
      message: "Login successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

const refreshToken = async (req, res) => {
  try {
    let { refreshToken } = req.body;
    if (!refreshToken)
      return res.status(400).json({ message: "No refresh token provided" });
    const data = await verifyRefreshToken(refreshToken);
    if (!data)
      return res
        .status(400)
        .json({ message: "Invallid/Expired refresh token" });
    const accessToken = signAccessToken(data.id);
    return res.status(200).json({
      data: {
        accessToken,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = {
  login: login,
  refreshToken: refreshToken,
};
