const GlobalTags = require("../models/globalTagsModel.js");
const PostDetails = require("../models/postDetailsModel.js");
const UserTags = require("../models/userTagsModel.js");
const PostLikesAndComments = require("../models/postLikesAndCommentsModel.js");
const userLikedAndCommentedPosts = require("../models/userLikedAndCommentedPostsModel");
const { updateFlag } = require("../service/renderService");

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
  // const id = request.id;
  const allPost = await PostDetails.find({});
  // const userTags = UserTags.find({_id:id});
  // const packet = {
  //   allPost: allPost,
  //   tags: userTags.Tags,
  //   weight: userTags.Weights,
  // }
  // orderPost(packet);
  response.status(200).json(allPost);
  try {
  } catch (error) {
    response.status(401).json({ message: error.message });
  }
}

const updateTags = async (request, response) => {
  const weight = request.body.weight;
  const tags = request.body.tags;
  const id = request.body.id;
  try {
    const data = await UserTags.find({ _id: id });
    const packet = {
      tags: data.Tags,
      updatedTags: tags,
      weight: data.Weights,
      updatedWeighted: weight,
    }
    updateFlag(packet);
    const newData = {
      _id: id,
      Tags: tags,
      Weights: weight,
    }
    await UserTags.findOneAndUpdate({ _id: id }, newData);
    await GlobalTags.findOneAndUpdate({}, { $set: { Tags: tags, Weights: weight } }, { new: true });
  } catch (error) {
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
  addPostDetails, getPostDetails, getAllPostList, updateTags, addPostLikesAndComments,
  getPostLikesAndComments,
  addUserLikedAndCommentedPosts,
  getUserLikedAndCommentedPosts,
};
