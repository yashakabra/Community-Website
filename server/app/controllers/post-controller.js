const GlobalTags = require("../models/globalTagsModel.js");
const PostDetails = require("../models/postDetailsModel.js");
const UserTags = require("../models/userTagsModel.js");
const {updateFlag} = require("../service/renderService");

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
  try{
    const postDetails = await PostDetails.find({_id:id});
    response.status(200).json(postDetails);
  }catch(error){
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
  try{
  }catch(error){
    response.status(401).json({ message: error.message});
  }
}

const updateTags = async (request, response) => {
  const weight = request.body.weight;
  const tags = request.body.tags;
  const id = request.body.id;
  try{
    const data = await UserTags.find({_id:id});
    const packet = {
      tags: data.Tags,
      updatedTags: tags,
      weight: data.Weights,
      updatedWeighted: weight,
    }
    updateFlag(packet);
    const newData = {
      _id:id,
      Tags:tags,
      Weights:weight,
    }    
    await UserTags.updateOne({_id:id}, newData);
    await GlobalTags.findOneAndUpdate({}, {$set:{Tags:tags, Weights:weight}}, {new: true});
  }catch(error){
    response.status(401).json({message: error.message});
  }
}

module.exports = { addPostDetails, getPostDetails, getAllPostList, updateTags };
