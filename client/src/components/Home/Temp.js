const PostDetails = require("../models/postDetailsModel.js");
const PostLikesAndComments=require("../models/postLikesAndCommentsModel.js");
const userLikedAndCommentedPosts=require("../models/userLikedAndCommentedPostsModel");
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
  try{
    const allPosts = await PostDetails.find({});
    response.status(200).json(allPosts);
  }catch(error){
    response.status(401).json({ message: error.message});
  }
}
// const obj = { id: id, likes: 0, message: "", statusCode: 0,email:user.email};
const addPostLikesAndComments=async (request,response)=>{
try{
    const data=request.body;
    const id=data.id;
    const post=await PostLikesAndComments.findOne({_id:id});
    console.log("popo",post);
    if(!post || post.length===0)
    {
      // console.log('pp');
      // let obj;
      // if(data.comments.id!=0)
      // {
      // obj={
      //   _id:data.id,
      //   likes:data.likes,
      //   comments:[data.comments]
      // }
      // }
      // else
      // {
      // obj = {
      //   _id: data._id,
      //   likes: data.likes,
      //   comments: [],
      // }; 
      // }
      // const newPost=new PostLikesAndComments(obj);
      // await newPost.save();
      //   return response.status(200).json(newPost);

      let obj={_id:id,likes:0,comments:[]};

      if(data.statusCode==1)
      {
        obj.likes=1;
      }
      else if(data.statusCode==2)
      {
        obj.comments.push({id:data.email,message:data.message});
      }

      const newInstance=new PostLikesAndComments(obj);
      await newInstance.save();

      return response.status(200).json(newInstance);

    }
    else
    {
      
    // const updateObj = {};
    // if (data.comments.id != 0) {
    //   updateObj.$push = { comments: data.comments };
    // }
    // if (data.likes) {
    //   updateObj.$inc = { likes: data.likes };
    // }
    
    // const updatedPost=await PostLikesAndComments.updateOne({_id:id},data.comments.id !== 0 ? { $push: { comments: data.comments } } : { $inc: { likes: data.likes } });

    // return response.status(200).json(updatedPost);
    let updatedPost
    if(data.statusCode==0 || data.statusCode==1)
    {
       updatedPost = await PostLikesAndComments.updateOne(
        { _id: id },
        { $inc: { likes: data.likes } }
      );
    }
    else
    {
      updatedPost = await PostLikesAndComments.updateOne(
        { _id: id },
        { $push: { comments: {id:data.email,message:data.message} } }
      );
    }
    return response.status(200).json(updatedPost);
    
  }

}
catch(err)
{
  response.status(401).json({message:err.message});
}
}

const getPostLikesAndComments = async (request, response) => {
  try {
    
    const id = request.params.id;
    const postLikesAndComments = await PostLikesAndComments.find({ _id: id });
    
    if (!postLikesAndComments || postLikesAndComments.length === 0) {
      
      return response.status(200).json({ id: id, likes: 0, comments: [] });
    } else {
      
      return response.status(200).json(postLikesAndComments);
    }
  } catch (err) {
    response.status(401).json({ message: err.message });
  }

};

// let data = {
//   id: id,
//   statusCode: obj.statusCode,
//   email: user.email,
//   message: "",
// };


const addUserLikedAndCommentedPosts = async (request, response) => {
  try {
    const data=request.body;

    // if(data.statusCode==1)
    // {
    //     const post=await userLikedAndCommentedPosts.find({_id:data.email});
    //     if(!post || post.length==0)
    //     {
    //       const obj={_id:data.email,likes:[data.postId],comments:[]};
          
    //       const newPost=userLikedAndCommentedPosts(obj);
    //       newPost.save();
    //       return response.status(200).json(newPost);
    //     }
    //     else
    //     {
    //       const updatedPost= await userLikedAndCommentedPosts.updateOne(
    //         { _id: data.email },
    //         { $push: { likes:  data.postId} }
    //       );

    //       return response.status(200).json(updatedPost);
    //     }
    // }
    // else if(data.statusCode==0)
    // {
    //       const updatedPost= await userLikedAndCommentedPosts.updateOne(
    //         { _id: data.email },
    //         { $pull: { likes: data.postId } }
    //       );

    //       return response.status(200).json(updatedPost);
    // }
    // else if(data.statusCode==2)
    // {

    // }

  let details = await userLikedAndCommentedPosts.find({ _id: data.email });
    if(!details || details.length==0)
    {
      let obj={_id:data.email,likes:[],comments:[]};
      if(data.statusCode==1)
      {
        obj.likes.push(data.id);
      }
      else if(data.statusCode==2)
      {
        obj.comments.push({id:id,noOfComments:1})
      }
    
      const newInstance = new userLikedAndCommentedPosts(obj);
      await newInstance.save();

      return response.status(200).json(newInstance);
    }
    else
    {
      let updatedPost;
      if(data.statusCode==0)
      {
         updatedPost= await userLikedAndCommentedPosts.updateOne(
            { _id: data.email },
            { $pull: { likes: data.id } }
          );
          console.log(updatedPost);
      }
      else if(data.statusCode==1)
      {
        updatedPost= await userLikedAndCommentedPosts.updateOne(
            { _id: data.email },
            { $push: { likes: data.id } }
          );
      }
      else
      {
        updatedPost = await userLikedAndCommentedPosts.updateOne(
          { _id: data.email },
          { $push: { comments: {id:data.id,noOfComments:1} } }
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

    const resp =await userLikedAndCommentedPosts.findOne({_id:data.email},{ likes: { $elemMatch: { $eq: data.postId } } });
    console.log(resp,"po");
    if(!resp|| resp.length === 0 || resp.likes.length==0)
    {
      return response.status(200).json({isLiked:0});
    }
    else
    {
      return response.status(200).json({isLiked:1});
    }
    
  }
  catch(error)
  {
    response.status(401).json({message:error.message})
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