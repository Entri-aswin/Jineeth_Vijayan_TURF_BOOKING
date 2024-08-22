import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 20
    },
    lastName: {
        type: String,
        required: true,
        maxLength: 20
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minLength: 3,
        maxLength: 30

    },
    role:{
        type:String,
        enum:["user","manager","admin"]
    },
    hashPassword: {
        type: String,
        required: true,
        minLength: 6
    },
    turfs: [{ type: mongoose.Types.ObjectId, ref: "Turf" }]
},
    { timestamps: true }

);


const User = mongoose.model("User", userSchema);

export default User;

