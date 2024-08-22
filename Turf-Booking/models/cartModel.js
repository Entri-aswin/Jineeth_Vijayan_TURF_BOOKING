import mongoose from "mongoose";


const cartSchema = new mongoose.Schema({

userId:{
    type:String,
    required:true
},
turfIds:[
    {
        type:String,
        required:true
    }
]

},
    {timestamps:true}
);

const Cart = mongoose.model("Cart",cartSchema);


export default Cart;