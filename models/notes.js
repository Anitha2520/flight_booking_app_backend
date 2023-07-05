import mongoose from "mongoose"; 
const {ObjectId} = mongoose.Schema
const flightsSchema = new mongoose.Schema({
    numberOfSeats: {
        type:Number,
        required:true
    },
    flighttype: {
        type: String,
        required: true
    },
    price: {
        type:Number,
        required: true
    },
    customerName: {
        type:String,
        required: true
    },
    date:{
        type: String,
        required: true
     },
    // startTime: {
    //     type:String,
    //     required:true
    // },
    // endTime: {
    //     type:String,
    //     required: true
    // },
    FlightId: {
        type: ObjectId,
        ref: "user"
    },
    FlightName:{
        type: String,
        required: true
    },
})

const Flights = mongoose.model("flights",flightsSchema);
export {Flights}