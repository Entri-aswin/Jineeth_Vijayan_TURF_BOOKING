import express from "express";
import { createBookings, findBookingsByTurfIds } from "../controllers/bookingController.js";


const bookingRouter = express.Router();



bookingRouter.post("/create-booking",createBookings)

bookingRouter.post("/get-bookings",findBookingsByTurfIds);


export default bookingRouter;