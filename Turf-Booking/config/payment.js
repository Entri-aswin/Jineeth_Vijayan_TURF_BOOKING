import Razorpay from "razorpay";
import 'dotenv/config';

//console.log(process.env.RAZORPAY_KEY_ID);
//console.log(process.env.RAZORPAY_SECRET);

const razorpayInstance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID || "",
    key_secret : process.env.RAZORPAY_KEY_SECRET || "",
});

export default razorpayInstance ;