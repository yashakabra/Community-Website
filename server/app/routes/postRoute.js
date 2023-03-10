const express = require("express");
const multer = require("multer");
const upload = require("../utils/upload");
const { addPostDetails } = require("../controllers/post-controller");
const { getPostDetails } = require("../controllers/post-controller");
const { getAllPostList } = require("../controllers/post-controller");

const router = express.Router();

router.post("/addPostDetails",addPostDetails);

router.get("/getPostDetails/:id", getPostDetails);

router.get("/getAllPostList", getAllPostList);

module.exports = router;
