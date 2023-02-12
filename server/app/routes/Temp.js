const express = require("express");
const controller = require("../controllers/TempController");

// Creating express router
const router = express.Router();

// Handling the request
// router.get("/", controller.getTemp);
const res = router.post("/", controller.putTemp);
// console.log("HEREEEE");

module.exports = router;