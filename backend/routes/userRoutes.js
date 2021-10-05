// [=>]  IMPORT SECT.
// -
const express = require("express");
const checkPassword = require("../middleware/checkPassword");
const authn = require("../middleware/authn");

// [=>]  CREATE ROUTER
// -
const router = express.Router();

const userCtrl = require("../controllers/userCtrl.js");

// [=>]  Middlewares
// -

// POST request => signUp
router.post("/signup", checkPassword, userCtrl.signup);

// POST request => logIn
router.post("/login", userCtrl.login);

// GET request => logOut function
router.post("/logout", authn, userCtrl.logout);

// GET Requests
router.get("/", authn, userCtrl.findAll);
router.get("/:id", authn, userCtrl.findOne);

// PUT request => update user profile
router.put("/:id", authn, userCtrl.updateOne);

// DELETE request => delete user
router.delete("/:id", authn, userCtrl.deleteOne);

// [=>] EXPORT Router
// -
module.exports = router;
