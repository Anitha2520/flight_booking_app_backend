import express from "express"; 
//import { createConnection } from "./db.js";

//initialize express server framework
const app = express();
//const client = await createConnection();
const PORT = 9000;
app.use(express.json());
//initlaizing the data
const flightData = [
  {
    id: "1",
    numberOfSeats: 100,
    flighttype: ["Ac", "chairs", "discolights"],
    price: 5000,
    ifBooked: "true",
    customerName: "Sanjay",
    date: "05-feb-2022",
    startTime: "10-feb-2022 at 12PM",
    endTime: "11-feb-2020 at 11am",
    FlightId: 201,
    FlightName: "Duplex",
  },
  {
    id: "2",
    numberOfSeats: 100,
    flighttype: ["Ac", "chairs", "discolights"],
    price: 5000,
    ifBooked: "false",
    customerName: "",
    date: "",
    startTime: "",
    endTime: "",
    FlightId: 202,
    FlightName: "Duplex",
  },
  {
    id: "3",
    numberOfSeats: 50,
    flighttype: ["Ac", "chairs"],
    price: 3000,
    ifBooked: "false",
    customerName: "",
    date: "",
    startTime: "",
    endTime: "",
    FlightId: 203,
    FlightName: "Classic",
  },
  {
    id: "4",
    numberOfSeats: 100,
    flighttype: ["Ac", "chairs", "discolights"],
    price: 5000,
    ifBooked: "true",
    customerName: "Suresh",
    date: "03-feb-2022",
    startTime: "15-feb-2022 at 12PM",
    endTime: "16-feb-2020 at 11am",
    FlightId: 204,
    FlightName: "Duplex",
  },
  {
    id: "5",
    numberOfSeats: 200,
    flighttype: ["Ac", "chairs", "discolights", "buffet"],
    price: 9000,
    ifBooked: "true",
    customerName: "Vidhya",
    date: "06-feb-2022",
    startTime: "11-feb-2022 at 12PM",
    endTime: "12-feb-2020 at 11am",
    FlightId: 205,
    FlightName: "Suite",
  },
];

app.get("/", (req, res)=>{
    res.send("hey there am working fine")
})

app.get("/flight-details", (req, res)=>{    
    const {flighttype, ifBooked} = req.query;
    console.log(flighttype);
    console.log(ifBooked);
    let filterFlights
    if(flighttype){
        filterFlights = flightData.filter((flight)=>flight.FlightName ===flighttype)
        return res.send(filterFlights)
    }
    return res.send(flightData);
})

app.post("/add/flight-details",(req, res)=>{
    const newFlight = {
        id: flightData.length+1,
        numberOfSeats: req.body.numberOfSeats,
        flighttype: req.body.flighttype,
        price: req.body.price,
        FlightId: req.body.FlightId,     
    };
    //console.log(req.body)
    flightData.push(newFlight)
    return res.send(flightData)
})

app.put("/edit/flight-details/:id",(req,res)=>{
    const { id } = req.params;
    const flights = flightData.find((hall) => hall.id === id);
    
    //logic for not updating an already booked flight.
    if (flights.ifBooked === "true") {
        res.status(400).send("Hey this flight is already booked");
        return;
    } else flights.customerName = req.body.customerName;
     flights.date = req.body.date;
     flights.startTime = req.body.startTime;
     flights.endTime = req.body.endTime;
     res.send(flights);     
})

//listen to a server
app.listen(PORT,()=>console.log(`server started in localhost:${PORT}`));


//This function will return all flight details data will have flights parameter
function getAllFlightDetails(){

}

getAllFlightDetails();