const movies = require("../data/movies.json");

const getMovies = async (req, res) => {
  return res
    .status(200)
    .json({ data: movies, message: "Movies retrieved successfully" });
};

module.exports = { getMovies };
