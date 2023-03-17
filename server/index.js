const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const loginRoutes = require("./app/routes/loginRoute");
const profileRoute = require("./app/routes/userRoute");
const postRoute = require("./app/routes/postRoute");

require("dotenv").config();

const app = express();

async function connect() {
  try {
    await mongoose.set("strictQuery", false);
    await mongoose.connect(URL, { useUnifiedTopology: true });
    console.log("Connected to mongoDB");
  } catch (error) {
    console.log(error.message);
  }
}


const URL = process.env.URL;
const PORT = process.env.PORT;

connect();

app.use(cors());
app.use(express.json());

app.use("/profile", profileRoute);
app.use('/login', loginRoutes);
app.use("/post", postRoute);

app.listen(PORT, ()=>{
    console.log("Server started!!");
})
