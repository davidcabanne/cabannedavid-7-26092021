// [=>]  IMPORT SECT.
// -
const express = require("express");
const checkPassword = require("../middleware/checkPassword");

// [=>]  CREATE ROUTER
// -
const router = express.Router();

const userCtrl = require("../controllers/userCtrl.js");

// [=>]  Middlewares
// -
// GET Requests
router.get("/", userCtrl.findAll);
router.get("/:id", userCtrl.findOne);

// POST request => signUp
router.post("/signup", checkPassword, userCtrl.signup);

// POST request => logIn
router.post("/login", userCtrl.login);

// PUT request => update user profile
router.put("/", userCtrl.updateOne);

// DELETE request => delete user
router.delete("/:id", userCtrl.deleteOne);

// [=>] EXPORT Router
// -
module.exports = router;
