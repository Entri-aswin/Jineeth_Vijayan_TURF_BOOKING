import jwt from "jsonwebtoken";
import "dotenv/config";

const secretkey = process.env.secretKey

export const userToken = (email)=>{
    return jwt.sign({data:email},secretkey,{expiresIn:"1d"})
}

export const adminToken = (user) =>{

    return jwt.sign({data:user.id,role:user.role},secretkey,{expiresIn:"1d"});

};