import express from "express";
import cors from "cors";
import connectDB from "./config/database.js";
import userRouter from "./Routes/userRoute.js";
import managerRouter from "./Routes/managerRoutes.js";
import cookieParser from "cookie-parser";
import turfRouter from "./Routes/turfRoutes.js";
import cartRouter from "./Routes/cartRoutes.js";
import paymentRouter from "./Routes/paymentRoutes.js";
import bookingRouter from "./Routes/bookingRoutes.js";


const app = express();

let whitelist = ['http://localhost:5173', 'https://turf-booking-fe.vercel.app','https://visionary-pithivier-c15f61.netlify.app']
let corsOptions = {
  origin: function (origin, callback) {

    if (!origin) {
      return callback(null, true);
    }


    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  credentials:true 
}
 
app.use(cors(corsOptions))
app.use(express.json());
app.use(cookieParser());


app.use("/api/v1/user",userRouter);
app.use("/api/v1/managers",managerRouter);
app.use("/api/v1/turfs",turfRouter);
app.use("/api/v1/carts",cartRouter);
app.use("/api/v1/payment", paymentRouter);
app.use("/api/v1/booking",bookingRouter);

const port = 3001;
connectDB();

app.get("/",(req,res)=>{
    res.send("Hello world!")
})

app.listen(port,()=>{
console.log(`App listening on port : ${port}`);
})