const express=require('express');
const {addUserDetails,getUserDetails,editUserDetails} = require('../controllers/user-controller')

const router=express.Router();

router.post('/addUserDetails',addUserDetails);

router.post("/getUserDetails", getUserDetails);

router.post("/editUserDetails", editUserDetails);

module.exports=router;