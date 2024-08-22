import { deleteUser, findCurrentUser, getAllUsers, logout, signUp, signin } from "../controllers/userController.js";
import authenticateUser from "../middlewares/userMiddleware.js";
import express from "express";
import User from "../models/userModel.js";
import authenticateAdmin from "../middlewares/adminMiddleware.js";

const userRouter = express.Router();

userRouter.get("/check-user", authenticateUser, async (req, res) => {
    const user = req.user;

    console.log("data", user.data);
    const findUser = await User.findOne({ email: user.data });

    if (!findUser) {
        return res.json({ message: "authentication failed", success: false });
    }

    res.json({ message: "authenticateUser", success: true });
});

userRouter.get("/", (req, res) => {
    res.send("user route");
});

userRouter.post("/signup", signUp);

userRouter.post("/signin", signin);

userRouter.get("/get-users",authenticateAdmin,getAllUsers);

userRouter.get("/get-current-user",findCurrentUser);

userRouter.post("/logout",logout);

userRouter.delete("/delete-users/:id",authenticateAdmin,deleteUser);

export default userRouter;
