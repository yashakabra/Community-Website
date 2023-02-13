const express = require('express');
const mongoose = require('mongoose');
const tempModel = require("./app/models/TempModel.js");
const cors=require('cors');
const morgan = require('morgan');
const methodOverride = require('method-override');
const RegisterUser = require('./app/models/loginUserModel.js');
const loginRoutes = require('./app/routes/loginRoute');
const profileRoute = require('./app/routes/userRoute');
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

const PORT = process.env.PORT;
const URL = process.env.URL;

app.use("/profile", profileRoute);
app.use('/login', loginRoutes);


app.listen(PORT, ()=>{
    console.log("Server started!!");
})