const PostDetails = require("../models/postDetailsModel.js");

const addPostDetails = async (request, response) => {
  // const postDetails = request.body;
  // const _id=req.body._id;
  // const Choice=req.body.Choice;
  // const Title = req.body.Title;
  // const Details = req.body.Details;
  // const Tags = req.body.Tags;
  // const photo=req.file.filename;

  // const postDetails={
  //     _id,Choice,Title,photo,Details,Tags,
  // }
  // console.log("iop", request.file.path);
  // request.body.photo = request.file.path;
  console.log("op",request.body);
  const newPostDetails = new PostDetails(request.body);
  try {
    await newPostDetails.save();
    response.status(200).json(newPostDetails);
  } catch (err) {
    response.status(401).json({ message: err.message });
  }
};

const getPostDetails = async (request, response) => {
  const id = request.body.id;
  try{
    const postDetails = await PostDetails.find({_id:id});
    return response.status(200).json(postDetails);
  }catch(error){
    response.status(401).json({ message: error.message });
  }
}

const getAllPostList = async (request, response) => {
  try{
   
  }catch(error){
    response.status(401).json({ message: error.message});
  }
}

module.exports = { addPostDetails, getPostDetails, getAllPostList };
