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

// exports.findAll = (req, res, next) => {
//   User.findAll()
//     .then((users) => {
//       res.status(200).json(users);
//     })
//     .catch((err) => console.log(err));
// };

exports.findAll = async function (req, res, next) {
  try {
    console.log("=> findAll function");
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
  }
};

// [=>] DISPLAY [ONE] User
// -
// exports.findOne = (req, res, next) => {
//   let id = req.params.id;

//   User.findByPk(id)
//     .then((response) => res.status(200).json(response))
//     .catch((err) => console.log(err));
// };

exports.findOne = async function (req, res, next) {
  try {
    console.log("=> findOne function");

    let id = req.params.id;

    const user = await User.findByPk(id);
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
};

// [=>] SINGUP SECT.
// -
exports.signup = (req, res, next) => {
  console.log("=> SignUp function");

  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      const user = User.create({
        username: req.body.username,
        email: req.body.email,
        password: hash,
        // picture: req.body.picture,
        // bio: req.body.bio,
        // isAdmin: req.body.isAdmin,
      })
        .then(() => res.status(201).json({ message: "=> User créé !" }))
        .catch((error) => res.status(500).json(error));
    })
    .catch((error) => res.status(500).json({ error: "=> Signup error!" }));
};

// [=>] LOGIN SECT.
// -
exports.login = (req, res, next) => {
  console.log("=> login Function");

  let email = req.body.email;

  User.findOne({
    where: { email: email },
  })
    .then((user) => {
      if (user.length == 0) {
        return res.status(401).json({ error: "User introuvable !" });
      }
      bcrypt
        .compare(req.body.password, user.password)
        .then((valid) => {
          if (!valid) {
            return res.status(401).json({ error: "password incorrect !" });
          } else {
            let token = jwt.sign({ userId: user.id }, "SECRET_TOKEN", {
              expiresIn: "365d",
            });
            // Sequelize allows you to define custom getters and setters for the attributes of your models.
            // https://sequelize.org/master/manual/getters-setters-virtuals.html
            user.setDataValue("token", token);
            res.status(200).json(user);
          }
        })
        .catch((error) => res.status(500).json({ error: "password error !" }));
    })
    .catch((error) => res.status(500).json({ error: "login error !" }));
};

// [=>] UPDATE PROFILE SECT.
// -

exports.updateOne = (req, res, next) => {
  console.log("=> UPDATE PROFILE Function");

  User.findByPk(req.body.id)
    .then((user) => {
      user.username = req.body.username;
      user.email = req.body.email;
      user.picture = req.body.picture;
      user.bio = req.body.bio;
      return user.save();
    })
    .then((response) => res.status(200).json(response))
    .catch((error) => res.status(500).json({ error: "Server error !" }));
};

// [=>] DELETE SECT.
// -
exports.deleteOne = (req, res, next) => {
  console.log("=> DELETE PROFILE Function");

  User.findByPk(req.params.id)
    .then((user) => {
      return user.destroy();
    })
    .then((response) => res.status(200).json(response))
    .catch((err) => console.log(err));
};
