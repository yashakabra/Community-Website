const express = require("express");
const auth = require("../middlewares/auth");

const {
  getFlag,
  updateFlag,
  createUser,
} = require("../controllers/login-controller");

const router = express.Router();

router.post("/getFlag" ,getFlag);

router.post("/updateFlag", updateFlag);

router.post("/createUser", createUser);

module.exports = router;
