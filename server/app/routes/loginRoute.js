const express=require('express');
const { getFlag, updateFlag, createUser } = require('../controllers/login-controller');

const router=express.Router();
console.log("LOGIN ROUTES");
router.post('/getFlag',getFlag);

router.post("/updateFlag", updateFlag);

router.post("/createUser", createUser);

module.exports=router;