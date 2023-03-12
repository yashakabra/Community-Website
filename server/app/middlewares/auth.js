const admin = require('../config/firebase-config');

async function userAuthorization(req, res, next){
    console.log(req.headers);
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith("Bearer ")) {
        const token = authHeader.substring(7);
        console.log("INSIDE MIDDLEWARE  ", token);
        try{
            const decode = admin.auth().verifyIdToken(token);
            console.log(decode);
            if(decode){
                return next();
            }
            res.status(401).send({message:"Log in first 1"});
        }catch(error){
            console.log(error);
            res.status(401).send({message:"Log in first 2"});
        }
    }else{
        res.status(401).send({message: "Log in first 3"});
        return ;
    }
}

module.exports = {
    userAuthorization,
}