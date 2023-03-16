const express = require("express");
const auth = require("../middlewares/auth");
const { addPostDetails } = require("../controllers/post-controller");
const { getPostDetails } = require("../controllers/post-controller");
const { getAllPostList } = require("../controllers/post-controller");
const { updateTags } = require("../controllers/post-controller");

const router = express.Router();

router.post("/addPostDetails", auth.userAuthorization ,addPostDetails);

router.get("/getPostDetails/:id", auth.userAuthorization ,getPostDetails);

router.get("/getAllPostList", auth.userAuthorization ,getAllPostList);

router.post("/updateTags", auth.userAuthorization, updateTags);
module.exports = router;
