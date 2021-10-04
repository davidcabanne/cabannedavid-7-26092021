// [=>] IMPORT SECT.
// -
const express = require("express");

// [=>] CREATE ROUTER
// -
const router = express.Router();

const postCtrl = require("../controllers/postCtrl");

const auth = require("../middleware/auth");

// [=>] Middlewares
// -
// GET requests
router.get("/", postCtrl.findAll);
router.get("/:id", postCtrl.findById);
router.get("/user/:id", postCtrl.findByUser);

// POST request => create post
router.post("/", postCtrl.createOne);

// PUT request => update post
router.put("/", postCtrl.updateOne);

// DELETE request => delete post
router.delete("/:id", postCtrl.deleteOne);

// [=>] EXPORT Router
// -
module.exports = router;
