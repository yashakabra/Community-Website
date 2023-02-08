const UserDetails =require('../models/user-details-schema.js');

const addUserDetails=async (request,response)=>{
    const userDetails=request.body;
    //  console.log("id", request.body);
    const newUserDetails=new UserDetails(userDetails);
    console.log('po');
    try{
        await newUserDetails.save();
        response.status(200).json(newUserDetails);
    }
    catch(error)
    {
        response.status(401).json({message:error.message});
    }
}

const getUserDetails = async (request, response) => {
        // console.log("id",request.body.val);
        const val = request.body.val;
  try {
     const userDetails=await UserDetails.find({UserName:val});
     console.log(userDetails);
     return response.status(200).json(userDetails);
  } catch (error) {
    response.status(401).json({ message: error.message });
  }
};

const editUserDetails = async (request, response) => {
  console.log(request.body);
  const val=request.body.id.val;
  const user=request.body.data;

  const editUser=new UserDetails(user);
  try {
    await UserDetails.updateMany({ UserName:val }, editUser);
    response.status(200).json(editUser);
  } catch (error) {
    response.status(401).json({ message: error.message });
  }
};

module.exports={addUserDetails,editUserDetails,getUserDetails};