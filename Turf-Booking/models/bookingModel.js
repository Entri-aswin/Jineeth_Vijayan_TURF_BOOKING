import mongoose from "mongoose";


const bookingSchema = new mongoose.Schema({
    turfId: {
        type: String,
        required: true
    },
    turfName: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true,
    }
    ,
    userEmail: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    startingTime: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    }
},

{ timestamps: true }

);

const Booking = mongoose.model("Booking",bookingSchema);


export default Booking;