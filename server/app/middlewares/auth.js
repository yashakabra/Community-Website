const admin = require('../config/firebase-config');

async function userAuthorization(req, res, next){
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith("Bearer ")) {
        const token = authHeader.substring(7);
        try{
            await admin.auth().verifyIdToken(token);
            return next();
        }catch(error){
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