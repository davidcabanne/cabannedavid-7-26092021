// [=>] IMPORT SECT.
// -

// User model
const { User } = require("../config/database");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// dotEnv variables
const dotEnv = require("dotenv").config({ path: "./config/.env" });

// [=>] DISPLAY [ALL] Users
// -
exports.findAll = async function (req, res, next) {
  try {
    console.log("=> findAll function");
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// [=>] DISPLAY [ONE] User
// -
exports.findOne = async function (req, res, next) {
  try {
    console.log("=> findOne function");

    let id = req.params.id;

    const user = await User.findByPk(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// [=>] SIGNUP SECT.
// -
exports.signup = async function (req, res, next) {
  console.log("=> Signup function");

  try {
    const hash = await bcrypt.hash(req.body.password, 10);
    const user = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: hash,
      // picture: req.body.picture,
      // bio: req.body.bio,
      // isAdmin: req.body.isAdmin,
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// [=>] LOGIN SECT.
// -
exports.login = async function (req, res, next) {
  console.log("=> login Function");

  let email = req.body.email;

  // maxAgeToken in seconds
  const maxAgeToken = 1 * 24 * 60 * 60;

  try {
    const user = await User.findOne({ where: { email: email } });

    if (user == null) {
      return res.status(401).json({ message: "User introuvable !" });
    }

    const valid = await bcrypt.compare(req.body.password, user.password);

    if (!valid) {
      return res.status(401).json({ message: "Password incorrect !" });
    }

    let token = await jwt.sign({ userId: user.id }, process.env.SECRET_TOKEN, {
      expiresIn: maxAgeToken,
    });

    res.cookie("token", token, {
      httpOnly: true,
      expires: new Date(Date.now() + maxAgeToken * 1000),
    });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.logout = (req, res, next) => {
  console.log("=> logout Function");

  res.clearCookie("token");
  res.end();
};

// [=>] UPDATE PROFILE SECT.
// -
exports.updateOne = async function (req, res, next) {
  console.log("=> UPDATE PROFILE Function");

  try {
    const user = await User.findByPk(req.params.id);
    user.username = req.body.username;
    user.email = req.body.email;
    user.picture = req.body.picture;
    user.bio = req.body.bio;
    await user.save();

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// [=>] DELETE SECT.
// -
exports.deleteOne = async function (req, res, next) {
  console.log("=> DELETE PROFILE Function");

  try {
    const user = await User.findByPk(req.params.id);
    user.destroy();
    res.status(200).end();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
