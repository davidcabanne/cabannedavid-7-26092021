// [1] IMPORT SECT.
// -
const dotEnv = require("dotenv").config({ path: "./config/.env" });
const jwt = require("jsonwebtoken");
const { User } = require("../config/database");

// [=>] EXPORT middleware
module.exports = async function (req, res, next) {
  try {
    token = req.headers.authorization.split(" ")[1];

    // verify token
    const decodedToken = jwt.verify(token, process.env.SECRET_TOKEN);

    const user = await User.findByPk(decodedToken.userId);

    req.user = user;

    next();
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};
