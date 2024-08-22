import Manager from "../models/managerModel.js";
import { adminToken } from "../utils/generateToken.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";

export const signup = async (req, res) => {

    try {
        const { name, email, password } = req.body;

        const managerExist = await Manager.findOne({ email });

        if (managerExist) {
            return res.send("manager already exist");
        }

        const saltRounds = 10;

        const hashPassword = await bcrypt.hash(password, saltRounds);

        const newManager = new Manager({
            name,
            email,
            hashPassword,
            role: "manager"
        })

        const newManagerCreated = await newManager.save();

        if (!newManagerCreated) {
            return res.send("manager not created");
        }

        const token = adminToken(newManagerCreated);
        res.cookie("token", token);
        res.json({ message: "signed in !", token });

    } catch (error) {
        console.log(error, "something wrong");
        res.status(500).send("internal error")
    }

};


export const signin = async (req, res) => {
    try {

        const { email, password } = req.body;

        const manager = await Manager.findOne({ email });

        if (!manager) {
            return res.status(401).send("invalid email id");
        }

        const matchpassword = await bcrypt.compare(password, manager.hashPassword);

        if (!matchpassword) {
            return res.status(401).send("invalid password");
        }
        const role = manager.role;
        const token = adminToken(manager);
        console.log(token);
        
        res.cookie("token", token);
        res.json({ message: "loged in", manager, role, token });

    } catch (error) {
        console.log(error, "something went wrong");
        res.status(500).send("internal server error")
    }
}

export const getAllManagers = async (req, res) => {
    const managers = await Manager.find();
    return res.send(managers);
}


export const removeManager = async (req, res) => {
    const id = req.params.id;

    const manager = await Manager.findById({ _id: id });

    if (!manager) {
        return res.send("manager is not exist");
    }

    const remove = await Manager.deleteOne({ _id: id });

    if (!remove) {
        return res.send("failed to remove");
    }

    return res.send("removed successfully")
}

export const findManagerById = async (req, res) => {

    const id = req.params.id;

    const manager = await Manager.findOne({ _id: id });

    if (manager) {
        return res.send(manager);
    } else {
        return res.send("manager is not exist")
    }
}

export const findCurrentManager = async (req, res) => {

    const token = req.cookies.token;

     console.log(token);
    try {

        const decoded = jwt.verify(token, process.env.secretKey);
      
        const manager = await Manager.findOne({ _id: decoded.data })
        // console.log(manager);
        if (!manager) {
            return res.send("no manager found");
        } else {
            return res.send(manager);
        }
    } catch (error) {
        console.log(error);
    }
}


export const updateManager = async (req, res) => {

    const id = req.params.id;
  //  console.log(id);

    const { email, name, role } = req.body;



    const updatedManager = await Manager.findOneAndUpdate(
        { _id: id },
        { email, name, role },
        {
            new: true,
        }
    );

    if (!updatedManager) {
        return res.send("Manager is not updated");
    }

   // console.log(updatedManager);
    return res.send(updatedManager);
};


export const deleteManager = async (req, res) => {
    const id = req.params.id;

    const deleteId = await Manager.deleteOne({ _id: id });

    if (!deleteId) {
        return res.send("not deleted");
    }
    return res.send("manager deleted");
};

export const logout = async (req, res) => {
    try {
        // Clear the JWT token cookie
        res.clearCookie("token");
        
        // Optionally, you can also blacklist the token (not covered here)
        
        res.json({ message: "Logged out successfully" });
    } catch (error) {
        console.log(error, "Something went wrong");
        res.status(500).send("Internal Error");
    }
};