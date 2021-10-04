// [=>] IMPORT SECT.
// -
const express = require("express");

// [=>] CREATE ROUTER
// -
const router = express.Router();

const postCtrl = require("../controllers/commentCtrl");

// [=>] Middlewares
// -

// [=>] EXPORT Router
// -
module.exports = router;
