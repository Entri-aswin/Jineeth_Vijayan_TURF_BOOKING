 import jwt from "jsonwebtoken";
 import "dotenv/config";


 function authenticateUser (req,res,next){
    const token = req.cookies.token ;

    jwt.verify(token,process.env.secretKey,(err,user)=>{
        console.log(err);
        if(err) return res.sendStatus(403);
        req.user = user ;
    //console.log(req.user.role);

    next();

    });
 };


 export default authenticateUser;