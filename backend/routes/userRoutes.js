// [1] IMPORT SECT.
// -
const express = require("express");

// [2] CREATE ROUTER
// -
const router = express.Router();

const userCtrl = require("../controllers/userCtrl.js");
// const checkPassword = require("../middleware/checkPassword");

// [3] Middlewares
// -
router.get("/", userCtrl.findAll);
router.get("/:id", userCtrl.findOne);

// // POST request => signUp
// router.post("/signup", checkPassword, userCtrl.signup);
router.post("/signup", userCtrl.signup);
// // POST request => logIn
router.post("/login", userCtrl.login);

router.put("/", userCtrl.updateOne);
router.delete("/:id", userCtrl.deleteOne);

// [=>] EXPORT Router
// -
module.exports = router;
