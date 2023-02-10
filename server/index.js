const express = require('express');
const mongoose = require('mongoose');
const tempModel = require("./app/models/TempModel.js");
const cors=require('cors');
const morgan = require('morgan');
const methodOverride = require('method-override');
const RegisterUser = require('./app/models/RegisterUserModel.js');
require("dotenv").config();

const app = express();

async function connect() {
    try{
        await mongoose.set("strictQuery", false);
        await mongoose.connect(URL, {useUnifiedTopology: true});
        console.log("Connected to mongoDB");
    }catch(error){
        console.log(error.message);
    }
}

connect();

app.use(cors());
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(morgan('dev'));

const PORT = process.env.PORT;
const URL = process.env.URL;

app.use('/temp', require('./app/routes/Temp'));
app.use("/", require('./app/routes/route'));

app.post("/login", async(req, res) => {
    console.log("INSIDE LOGIN SERVER SIDE");
    try{
        console.log(req.body.e);
        await RegisterUser.findOne({"email":req.body.e}, function(err, result){
            console.log("INSIDE REGISTER USER");
            // console.log(err);
            // console.log(result.email);
            if(result){
                const user = {"email":result.email, "flag":result.flag};
                console.log(user);
                res.status(200).json(user);
            }else{
                console.log("CREATE USER");
                const user = RegisterUser.create({
                    flag: false,
                    email: req.body.e, 
                }).then(()=>{
                    console.log("NOW SENDING BACK RESPONSE");
                    // console.log(user.email)
                    const user = {"email":req.body.e, "flag":false};
                    res.status(200).json(user);
                }, (err)=>{
                    console.log(err);
                });
            }
        } )
    }catch(err){
        console.log("IN SERVER POST ERROR SIDE");
    }
});

app.put("/login", async(req, res) => {
    console.log("INSIDE LOGIN SERVER SIDE PUT");
    try{
        console.log("IN PUT REQUEST LOGIN");
        console.log(req.body.emai);
        const filter = {'email':req.body.emai};
        const update = {'flag':'true'};
        await RegisterUser.findOneAndUpdate(filter, update);
        res.status(200).json({"email":req.body.emai, "flag":true});
    }catch(err){
        console.log("IN SERVER POST ERROR SIDE");
    }
});


app.listen(PORT, ()=>{
    console.log("Server started!!");
})