import express from "express";
import { dbConnection } from "./db.js";
import cors from "cors";
import dotenv from "dotenv";
import { userRouter } from "./Routes/user.js";
import { flightRouter } from "./Routes/notes.js";
import { isAuthenticated } from "./controllers/auth.js";

//configuring env
dotenv.config();

const app = express();
const PORT =process.env.PORT;

//middlewares 
app.use(express.json());
app.use(cors());

//db connection
dbConnection();

//routes
app.use("/api/user",userRouter); 
app.use("/api/flights", isAuthenticated,flightRouter)


//server connection
app.listen(PORT,()=>console.log(`Server running in localhost:${PORT}`)); 


