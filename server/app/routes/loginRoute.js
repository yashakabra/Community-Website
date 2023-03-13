const express = require("express");
const auth = require("../middlewares/auth");

const {
  getFlag,
  updateFlag,
  createUser,
} = require("../controllers/login-controller");

const router = express.Router();

router.post("/getFlag", auth.userAuthorization ,getFlag);

router.post("/updateFlag", auth.userAuthorization ,updateFlag);

router.post("/createUser", auth.userAuthorization ,createUser);

module.exports = router;
