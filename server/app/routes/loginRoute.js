const express = require("express");
const auth = require("../middlewares/auth");

const {
  createUser,
} = require("../controllers/login-controller");

const router = express.Router();

router.post("/createUser", auth.userAuthorization ,createUser);

module.exports = router;
