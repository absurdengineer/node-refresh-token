const login = async (req, res) => {
  try {
    return res.status(200).json({ message: "Login successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

const signup = async (req, res) => {
  try {
    return res.status(200).json({ message: "Signup successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = {
  login: login,
  signup: signup,
};
