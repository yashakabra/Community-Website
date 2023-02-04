const tempModel = require("../models/TempModel");

const getTemp = async() =>{
    console.log("succesfull");
};

const postTemp = async(tempBody) => {
    console.log(tempBody);
    const temp = new tempModel(tempBody);
    await temp.save();
};

module.exports = {
    getTemp,
    postTemp,
}
