const express = require("express");
const multer = require("multer");
const auth = require("../middlewares/auth");
const upload = require("../utils/upload");
const { addPostDetails } = require("../controllers/post-controller");
const { getPostDetails } = require("../controllers/post-controller");
const { getAllPostList } = require("../controllers/post-controller");

const router = express.Router();

router.post("/addPostDetails", auth.userAuthorization ,addPostDetails);

router.get("/getPostDetails/:id", auth.userAuthorization ,getPostDetails);

router.get("/getAllPostList", auth.userAuthorization ,getAllPostList);

module.exports = router;
