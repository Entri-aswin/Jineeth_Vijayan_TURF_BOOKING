import Booking from "../models/bookingModel.js";
import mongoose from "mongoose";


export const createBookings = async(req,res)=>{
 
  
const{userEmail,turfName,turfId,category,date,startingTime,duration} = req.body;

let bookings = await Booking.findOne({userEmail});

if(!bookings){
    bookings = new Booking({userEmail,turfName,turfId,category,date,startingTime,duration})
}else{
    return res.send("already booked")
}


await bookings.save();

//res.status(200).send(bookings)
res.json({message:'booking done',bookings})
}



export const findBookingsByTurfIds = async (req, res) => {

    const { ids } = req.body;
     console.log(ids);
    if (!Array.isArray(ids) || ids.some(id => !mongoose.Types.ObjectId.isValid(id))) {
        return res.status(400).send('Invalid IDs');
    }

    const objectIds = ids.map(id => new mongoose.Types.ObjectId(id));

    //console.log(objectIds);
    try {

        const bookings = await Booking.find({ turfId: { $in: objectIds } });

        // console.log(turfs);


        if (bookings) {
            return res.send(bookings);
        } else {
            return res.send("there is no turf created by you")
        }

    } catch (error) {
        console.error('Error finding documents:');
        res.status(500).send('Server Error');
    }




}