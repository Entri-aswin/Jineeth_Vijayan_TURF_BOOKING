import mongoose from "mongoose";

const managerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    role:{
        type:String,
        enum:["user","manager","admin"]
    },
    hashPassword:{
        type:String,
        required:true,
        minLength:6
    },

    turfs: [{ type: mongoose.Types.ObjectId, ref: "Turf" }]

},

{timestamps:true}

);


const Manager = mongoose.model("Manager",managerSchema);

export default Manager;