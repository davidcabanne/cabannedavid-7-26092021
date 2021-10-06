// [=>] IMPORT SECT.
// -
const express = require("express");

// [=>] CREATE ROUTER
// -
const router = express.Router();

const postCtrl = require("../controllers/postCtrl");
const commentCtrl = require("../controllers/commentCtrl");
const likeCtrl = require("../controllers/likeCtrl");

const authn = require("../middleware/authn");

// [=>] Middlewares
// [=>] POSTS
// POST | GET requests
router.get("/", authn, postCtrl.findAll);
router.get("/:id", authn, postCtrl.findOne);
router.get("/user/:id", authn, postCtrl.findByUser);

// POST | POST request => create post
router.post("/", authn, postCtrl.createOne);

// POST | PUT request => update post
router.put("/:id", authn, postCtrl.updateOne);

// POST | DELETE request => delete post
router.delete("/:id", authn, postCtrl.deleteOne);

// [=>] COMMENTS
// COMMENT | POST request => create post
router.post("/:id/comments/:commentId", authn, commentCtrl.createOne);

// COMMENT | PUT request => update post
router.put("/:id/comments/:commentId", authn, commentCtrl.updateOne);

// COMMENT | DELETE request => delete post
router.delete("/:id/comments/:commentId", authn, commentCtrl.deleteOne);

// [=>] LIKES
router.post("/:id/like", authn, likeCtrl.likePost);

// [=>] EXPORT Router
// -
module.exports = router;
