// [=>] IMPORT SECT.
// -
// User model
const { User, Post, Comment, Like } = require("../config/database");

// dotEnv variables
const dotEnv = require("dotenv").config({ path: "./config/.env" });

// [=>] DISPLAY [ALL] Posts
// -
exports.findAll = async function (req, res, next) {
  try {
    console.log("=> findAll function");

    const posts = await Post.findAll({
      order: [["createdAt", "DESC"]],
      include: [{ model: User }, { model: Comment }, { model: Like }],
    });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// [=>] DISPLAY [ONE] Post
// -
exports.findOne = async function (req, res, next) {
  try {
    console.log("=> findOne function");

    let id = req.params.id;

    const post = await Post.findByPk(id, {
      include: [{ model: Like }],
    });
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// [=>] DISPLAY [user] Post
// -
exports.findByUser = async function (req, res, next) {
  console.log("=> findByUser function");

  try {
    const posts = await Post.findAll({
      where: { UserId: req.params.id },
      order: [["createdAt", "DESC"]],
      include: [{ model: User }, { model: Comment }, { model: Like }],
    });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// [=>] CREATE Post
// -
exports.createOne = async function (req, res, next) {
  console.log("=> Create Post Function");

  try {
    const post = await Post.create({
      content: req.body.content,
      imageUrl: req.body.imageUrl,
      UserId: req.body.userId,
    });
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// [=>] UPDATE Post
// -
exports.updateOne = async function (req, res, next) {
  console.log("=> UPDATE POST Function");

  try {
    const post = await Post.findByPk(req.params.id);
    post.content = req.body.content;
    post.imageUrl = req.body.imageUrl;
    await post.save();

    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// [=>] DELETE Post
// -
exports.deleteOne = async function (req, res, next) {
  console.log("=> DELETE POST Function");

  try {
    const post = await Post.findByPk(req.params.id);
    post.destroy();
    res.status(200).end();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
