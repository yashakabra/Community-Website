const express = require("express");
const multer = require("multer");
const upload = require("../utils/upload");
const { addPostDetails } = require("../controllers/post-controller");

const router = express.Router();

router.post("/addPostDetails", upload.single("photo"), addPostDetails);

module.exports = router;
