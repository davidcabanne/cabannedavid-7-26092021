// [=>] IMPORT SECT.
// -
// User model
const { User, Post, Comment, Like } = require("../config/database");

// dotEnv variables
const dotEnv = require("dotenv").config({ path: "./config/.env" });

// [=>] LIKE
// -
exports.likePost = async function (req, res, next) {
  console.log("=> Like Function");

  try {
    const like = await Like.findOne({
      where: { UserId: req.user.id, PostId: req.params.id },
    });

    if (like !== null) {
      console.log("=> destroy like");

      like.destroy();
      res.status(200).end();
      return;
    } else {
      console.log("=> create like");

      const like = await Like.create({
        UserId: req.user.id,
        PostId: req.params.id,
      });
      res.status(201).json({ message: "like ajouté !" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
