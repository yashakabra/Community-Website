const loginDetails = require("../models/loginUserModel");

const createUser = async (req, res) => {
  const loginUser = req.body;
  const newLoginUser = new loginDetails(loginUser);
  try {
    await newLoginUser.save();
    res.status(200).json(newLoginUser);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

const getFlag = async (req, res) => {
  const loginUser = req.body;
  const email = loginUser.email;
  console.log("INNN HERE");
  try {
    const loginUser = await loginDetails.find({ email: email });
    return res.status(200).json(loginUser);
  } catch (error) {
    console.log("ERROR HH");
    res.send(401).json({ message: error.message });
  }
};

const updateFlag = async (req, res) => {
  const loginUser = req.body;
  const email = loginUser.email;
  try {
    await loginDetails.updateMany({ email: email }, loginUser);
    res.status(200).json(loginUser);
  } catch (error) {
    res.send(401).json({ message: error.message });
  }
};

module.exports = { createUser, getFlag, updateFlag };
