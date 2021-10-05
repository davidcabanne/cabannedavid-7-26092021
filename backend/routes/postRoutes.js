// [=>] IMPORT SECT.
// -
const express = require("express");

// [=>] CREATE ROUTER
// -
const router = express.Router();

const postCtrl = require("../controllers/postCtrl");

const authn = require("../middleware/authn");

// [=>] Middlewares
// -
// GET requests
router.get("/", authn, postCtrl.findAll);
router.get("/:id", authn, postCtrl.findOne);
router.get("/user/:id", authn, postCtrl.findByUser);

// // POST request => create post
router.post("/", authn, postCtrl.createOne);

// // PUT request => update post
router.put("/:id", authn, postCtrl.updateOne);

// // DELETE request => delete post
router.delete("/:id", authn, postCtrl.deleteOne);

// [=>] EXPORT Router
// -
module.exports = router;
