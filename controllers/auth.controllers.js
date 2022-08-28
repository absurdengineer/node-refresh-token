const users = require("../data/users.json");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = users.find(
      (user) => user.username === username && user.password === password
    );
    if (!user) return res.status(400).json({ message: "Invalid credentials" });
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "18000s",
    });
    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {
      expiresIn: "1y",
    });
    return res.status(200).json({
      data: { accessToken, refreshToken },
      message: "Login successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = {
  login: login,
};
