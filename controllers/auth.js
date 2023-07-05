import jwt from "jsonwebtoken";
import { User } from "../models/users.js";

const isAuthenticated = async(req, res, next)=>{
    let token;
    if(req.headers){
        try{
        token = req.headers["x-auth-token"];
        const decode = jwt.verify(token,process.env.SECRET_KEY)
        console.log(decode);
        req.user = await User.findById(decode.id).select("_id name email")
        next()
        

    } catch(error){
        return res.status(200).json({message:"Invalid Authentication"})
    }
    if(!token){
        return res.status(400).json({message:"Access denied!"})
    }
}
}

export {isAuthenticated}