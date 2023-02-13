const UserDetails = require("../models/userDetailsModel.js");

const addUserDetails = async (request, response) => {
  const userDetails = request.body;
  const newUserDetails = new UserDetails(userDetails);
  try {
    await newUserDetails.save();
    response.status(200).json(newUserDetails);
  } catch (error) {
    response.status(401).json({ message: error.message });
  }
};

const getUserDetails = async (request, response) => {
  const val = request.body.id;
  console.log(val);
  try {
    const userDetails = await UserDetails.find({ _id: val });
    console.log(userDetails);
    return response.status(200).json(userDetails);
  } catch (error) {
    response.status(401).json({ message: error.message });
  }
};

const editUserDetails = async (request, response) => {
  const val = request.body.id.id;
  const user = request.body.data;

  const editUser = new UserDetails(user);
  try {
    console.log("INSIDE EDIT", editUser, val);
    await UserDetails.updateOne({ _id: val }, editUser);
    response.status(200).json(editUser);
  } catch (error) {
    response.status(401).json({ message: error.message });
  }
};

module.exports = { addUserDetails, editUserDetails, getUserDetails };
