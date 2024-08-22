import jwt from "jsonwebtoken";
import "dotenv/config";

function authenticateManager(req,res,next){
    const token = req.cookies.token ;

    jwt.verify(token,process.env.secretKey,(err,user)=>{
        console.log(err);

        if(err) return res.send("token not valid or missing").status(403);
        req.manager = user ;
        console.log(req.manager.role);
        if(req.manager.role !== "manager" && req.manager.role !== "admin"){
            return res.send("not authenticate");
        }
        next();
    })
}

export default authenticateManager;
