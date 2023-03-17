const GlobalTags = require("../models/globalTagsModel.js");
const PostDetails = require("../models/postDetailsModel.js");
const UserTags = require("../models/userTagsModel.js");
const PostLikesAndComments = require("../models/postLikesAndCommentsModel.js");
const userLikedAndCommentedPosts = require("../models/userLikedAndCommentedPostsModel");
const { updateTag } = require("../service/updateService");
const { orderPost } = require("../service/orderService");


const addPostDetails = async (request, response) => {
  const newPostDetails = new PostDetails(request.body);
  try {
    await newPostDetails.save();
    response.status(200).json(newPostDetails);
  } catch (err) {
    response.status(401).json({ message: err.message });
  }
};

const getPostDetails = async (request, response) => {
  const id = request.params.id;
  try {
    const postDetails = await PostDetails.find({ _id: id });
    response.status(200).json(postDetails);
  } catch (error) {
    response.status(401).json({ message: error.message });
  }
}

const getAllPostList = async (request, response) => {
  // console.log(request);
  try {
    const id = request.params;
    const allPost = await PostDetails.find({});
    // const userTags = await UserTags.find({ _id: id });
    // const postDetails = await PostLikesAndComments.find({});
    console.log(id);
    // if ((!userTags) || (userTags.length === 0) || (userTags===undefined)) {
    //   return response.status(200).json(allPost);
    // }
    // console.log(userTags);
    // // console.log(allPost);
    // console.log("HERE 1");
    // const packet = {
    //   allPostsDetails: allPost,
    //   allPostWeight: postDetails,
    //   userTags: userTags.tags,
    // }
    // orderPost(packet);
    // console.log("HERE 4");
    return response.status(200).json(allPost);

  } catch (error) {
    console.log("SADLY HERE");
    response.status(401).json({ message: error.message });
  }
}

const addPostLikesAndComments = async (request, response) => {
  try {
    const data = request.body;
    const id = data.id;
    const post = await PostLikesAndComments.findOne({ _id: id });

    if (!post || post.length === 0) {
      let obj = { _id: id, likes: 0, comments: [] };
      if (data.statusCode == 1) {
        obj.likes = 1;
      }
      else if (data.statusCode == 2) {
        obj.comments.push({ id: data.email, message: data.message });
      }
      const newInstance = new PostLikesAndComments(obj);
      await newInstance.save();
      return response.status(200).json(newInstance);
    }
    else {
      let updatedPost
      if (data.statusCode == 0 || data.statusCode == 1) {
        updatedPost = await PostLikesAndComments.updateOne(
          { _id: id },
          { $inc: { likes: data.likes } }
        );
      }
      else {
        updatedPost = await PostLikesAndComments.updateOne(
          { _id: id },
          { $push: { comments: { id: data.email, message: data.message } } }
        );
      }
      return response.status(200).json(updatedPost);
    }
  }
  catch (err) {
    response.status(401).json({ message: err.message });
  }
}

const getPostLikesAndComments = async (request, response) => {
  try {

    const id = request.params.id;
    const postLikesAndComments = await PostLikesAndComments.find({ _id: id });

    if (!postLikesAndComments || postLikesAndComments.length === 0) {

      return response.status(200).json([{ id: id, likes: 0, comments: [] }]);
    } else {

      return response.status(200).json(postLikesAndComments);
    }
  } catch (err) {
    response.status(401).json({ message: err.message });
  }

};

const addUserLikedAndCommentedPosts = async (request, response) => {
  try {
    const data = request.body;
    try {

      let weight = 0;
      if (data.statusCode === 2) weight = 2;
      if (data.statusCode === 1) weight = 1;
      if (data.statusCode === 0) weight = -1;
      const res = await UserTags.find({ _id: data.email });
      const res3 = await GlobalTags.findOne({});
      console.log("RESPOSNE ", res3.tags);
      const packet = {
        globalTags: res3.tags,
        tags: (!res[0] || res[0].length === 0) ? [] : res[0].tags,
        newTags: data.tags,
        newWeight: weight,
      }
      const res2 = await updateTag(packet);

      if (!res || res.length === 0) {
        const newIns = new UserTags({ _id: data.email, tags: res2.tags });
        newIns.save();
      }
      else await UserTags.findOneAndUpdate({ _id: data.email }, { _id: data.email, tags: res2.tags });
      try {
        await GlobalTags.findOneAndUpdate({ _id: res3._id }, { tags: res2.globalTags });
      } catch (err) {
        console.log(err);
      }
    } catch (error) {
      console.log(error);
    }

    let details = await userLikedAndCommentedPosts.find({ _id: data.email });
    if (!details || details.length == 0) {
      let obj = { _id: data.email, likes: [], comments: [] };
      if (data.statusCode == 1) {
        obj.likes.push(data.id);
      }
      else if (data.statusCode == 2) {
        obj.comments.push({ id: id, noOfComments: 1 })
      }

      const newInstance = new userLikedAndCommentedPosts(obj);
      await newInstance.save();

      return response.status(200).json(newInstance);
    }
    else {
      let updatedPost;
      if (data.statusCode == 0) {
        updatedPost = await userLikedAndCommentedPosts.updateOne(
          { _id: data.email },
          { $pull: { likes: data.id } }
        );
      }
      else if (data.statusCode == 1) {
        updatedPost = await userLikedAndCommentedPosts.updateOne(
          { _id: data.email },
          { $push: { likes: data.id } }
        );
      }
      else {
        updatedPost = await userLikedAndCommentedPosts.updateOne(
          { _id: data.email },
          { $push: { comments: { id: data.id, noOfComments: 1 } } }
        );
      }

      return response.status(200).json(updatedPost);


    }
  } catch (error) {
    response.status(401).json({ message: error.message });
  }
};

const getUserLikedAndCommentedPosts = async (request, response) => {
  try {
    const data = request.body;
    const resp = await userLikedAndCommentedPosts.findOne({ _id: data.email }, { likes: { $elemMatch: { $eq: data.postId } } });
    if (!resp || resp.length === 0 || resp.likes.length == 0) {
      return response.status(200).json({ isLiked: 0 });
    }
    else {
      return response.status(200).json({ isLiked: 1 });
    }

  }
  catch (error) {
    response.status(401).json({ message: error.message })
  }

};

module.exports = {
  addPostDetails,
  getPostDetails,
  getAllPostList,
  addPostLikesAndComments,
  getPostLikesAndComments,
  addUserLikedAndCommentedPosts,
  getUserLikedAndCommentedPosts,
};
