const loginDetails = require('../models/loginUserModel');

const createUser = async (req, res) => {
    const loginUser = req.body;
    console.log("INSIDE SIGNUP CONTROLLER");
    console.log(loginUser);
    const newLoginUser = new loginDetails(loginUser);
    try{
        console.log("INSIDE CONT  ", newLoginUser);
        await newLoginUser.save();
        res.status(200).json(newLoginUser);
    }catch(error){
        res.status(401).json({message: error.message});
    }
}

const getFlag = async (req, res) => {
    const loginUser = req.body;
    const email = loginUser.email;
    console.log("INSIDE GET FLAG CONTROLLER");
    console.log(loginUser);
    try{
        console.log("INSIDE TRY")
        const loginUser = await loginDetails.find({email:email});
        console.log(loginUser);
        return res.status(200).json(loginUser);
    }catch(error){
        res.send(401).json({message: error.message});
    }
}

const updateFlag = async (req, res) => {
    const loginUser = req.body;
    const email = loginUser.email;
    try{
        await loginDetails.updateMany({email:email}, loginUser);
        res.status(401).json(loginUser);
    }catch(error){
        res.send(401).json({message: error.message});
    }
}

module.exports = {createUser, getFlag, updateFlag};