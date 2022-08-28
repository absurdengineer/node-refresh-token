const JWT = require("jsonwebtoken");

const signAccessToken = (userId) => {
  const payload = { id: userId };
  const options = {
    expiresIn: "30s",
    issuer: "webformulator.com",
  };
  const accessToken = JWT.sign(
    payload,
    process.env.ACCESS_TOKEN_SECRET,
    options
  );
  return accessToken;
};

const signRefreshToken = (userId) => {
  const payload = { id: userId };
  const options = {
    expiresIn: "1y",
    issuer: "webformulator.com",
  };
  const refreshToken = JWT.sign(
    payload,
    process.env.REFRESH_TOKEN_SECRET,
    options
  );
  return refreshToken;
};

const verifyAccessToken = (accessToken) => {
  try {
    const data = JWT.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
    return data;
  } catch (error) {
    return null;
  }
};

const verifyRefreshToken = (refreshToken) => {
  try {
    const data = JWT.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
    return data;
  } catch (error) {
    return null;
  }
};

module.exports = {
  signAccessToken: signAccessToken,
  signRefreshToken: signRefreshToken,
  verifyAccessToken: verifyAccessToken,
  verifyRefreshToken: verifyRefreshToken,
};
