const express = require("express");
const auth = require("../middlewares/auth");
const {
  addUserDetails,
  getUserDetails,
  editUserDetails,
} = require("../controllers/user-controller");

const router = express.Router();

router.post("/addUserDetails", auth.userAuthorization ,addUserDetails);

router.post("/getUserDetails", auth.userAuthorization ,getUserDetails);

router.post("/editUserDetails", auth.userAuthorization ,editUserDetails);

module.exports = router;
