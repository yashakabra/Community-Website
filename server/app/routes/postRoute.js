const express = require("express");
const auth = require("../middlewares/auth");
const { addPostDetails } = require("../controllers/post-controller");
const { getPostDetails } = require("../controllers/post-controller");
const { getAllPostList } = require("../controllers/post-controller");
const { addPostLikesAndComments } = require("../controllers/post-controller");
const { getPostLikesAndComments } = require("../controllers/post-controller");
const {addUserLikedAndCommentedPosts} = require("../controllers/post-controller");
const {getUserLikedAndCommentedPosts}=require("../controllers/post-controller")
const { updateTags } = require("../controllers/post-controller");

const router = express.Router();

router.post("/addPostDetails", auth.userAuthorization ,addPostDetails);

router.get("/getPostDetails/:id", auth.userAuthorization ,getPostDetails);

router.get("/getAllPostList", auth.userAuthorization ,getAllPostList);

router.post("/addPostLikesAndComments", auth.userAuthorization,addPostLikesAndComments);

router.get("/getPostLikesAndComments/:id", auth.userAuthorization, getPostLikesAndComments);

router.post("/addUserLikedAndCommentedPosts", auth.userAuthorization, addUserLikedAndCommentedPosts);

router.post("/getUserLikedAndCommentedPosts", auth.userAuthorization, getUserLikedAndCommentedPosts);

module.exports = router;
