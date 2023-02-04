const service = require("../services/TempServices");

const getTemp = async(req, res) => {
    service.getTemp();
    console.log("JKL ");
};

const putTemp = async(req, res) => {
    console.log(req.body);
    console.log("QWERTYUI");
    try{
        await service.postTemp(req.body);
        res.status(200).send(req.body);
    }catch(err){
        console.log(err);
        res.status(400).send({message: err.message});
    }
};

module.exports = {
    getTemp,
    putTemp,
};