const express = require('express');
const mongoose = require('mongoose');
const tempModel = require("./app/models/TempModel.js");
const app = express();
require("dotenv").config();

const methodOverride = require('method-override');

app.use(methodOverride('_method'));
app.use(express.urlencoded({extended:true}));

app.use(express.json());

const PORT = process.env.PORT;
const URL = process.env.URL;

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

app.use('/temp', require('./app/routes/Temp'));
// app.post('/temp', async (req, res) => {
//     try{
//         console.log(req.body);
//         const temp = new tempModel({
//             name : req.body.name,
//         });
//         await temp.save();
//         res.status(200).json(temp);
//     }catch(err){
//         console.log(err);
//         res.status(404).json(err.message);
//     }
    
// });

app.get('/tempt', (req, res) => {
    res.send("HELLO WORLD");
})

app.get('/temp', (req, res) => {
    console.log(req.body);
})

app.listen(PORT, ()=>{
    console.log("Server started!!");
})