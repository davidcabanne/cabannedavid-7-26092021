// [=>] IMPORT SECT.
// -
// User model
const { User, Post, Comment } = require("../config/database");

// dotEnv variables
const dotEnv = require("dotenv").config({ path: "./config/.env" });

// [=>] CREATE (( comment ))
// -
exports.createOne = async function (req, res, next) {
  console.log("=> Create Comment Function");

  try {
    const comment = await Comment.create({
      content: req.body.content,
      UserId: req.user.id,
      PostId: req.params.id,
    });
    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// [=>] UPDATE (( comment ))
// -
exports.updateOne = async function (req, res, next) {
  console.log("=> UPDATE Comment Function");

  try {
    const comment = await Comment.findByPk(req.params.id);
    comment.content = req.body.content;
    await comment.save();

    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// [=>] DELETE (( comment ))
// -
exports.deleteOne = async function (req, res, next) {
  console.log("=> DELETE Comment Function");

  // contrôle d'accès, vérifier userID || admin req.comment.UserId req.User.isAdmin

  try {
    const comment = await Comment.findByPk(req.params.commentId);
    comment.destroy();
    res.status(200).end();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
