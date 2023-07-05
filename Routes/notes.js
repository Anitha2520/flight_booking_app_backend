import express from "express";
import { Flights } from "../models/notes.js";

const router = express.Router();

router.get("/all", async(req, res)=>{
    try{
        const date = new Date().toJSON().slice(0,10);
        res.status(200).json({message:date})
    } catch(error){

    }
})

router.post("/add", async(req, res)=>{
    
    try{
        //new date function
        
        const postedDate = new Date().toJSON().slice(0,10);
        const flights = await new Flights(
            {...req.body,
            date : postedDate,
            user : req.user._id}
        ).save()
        if(!flights){ 
            return res.status(400).json({message:"Error in saving the flights"})
        }
        res.status(200).json({message:"Flights saved successfully",data:flights})
    } catch(error){
        console.log(error)
        res.status(500).json({message: "Internal server error"})
    }
})

export const flightRouter = router