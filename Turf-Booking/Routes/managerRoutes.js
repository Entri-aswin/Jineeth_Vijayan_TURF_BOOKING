import express from "express";
import Manager from "../models/managerModel.js";
import { signup, signin, getAllManagers, removeManager, findManagerById, updateManager, deleteManager, logout } from "../controllers/managerController.js";
import authenticateManager from "../middlewares/managerMiddleware.js";
import authenticateAdmin from "../middlewares/adminMiddleware.js";
import { findCurrentManager } from "../controllers/managerController.js";


const managerRouter = express.Router();

managerRouter.get("/check-instructor", authenticateManager, async (req, res) => {

    const manager = req.manager;

    console.log(manager.data);

    const findManager = await Manager.findById({ _id: manager.data });

    if (!findManager) {
        return res.json({ message: "authentication failed", success: false });
    }
    res.json({ message: "authenticate Manager", success: true });
}
);


managerRouter.post("/signup", signup);
managerRouter.post("/signin", signin);
managerRouter.get("/get-managers",authenticateAdmin, getAllManagers);
managerRouter.delete("/remove-managers/:id",authenticateAdmin, removeManager)
managerRouter.get("/get-manager/:id",findManagerById);
managerRouter.get("/get-current-manager",findCurrentManager);
managerRouter.put('/update-managers/:id',updateManager);
managerRouter.delete('/delete-managers/:id',authenticateAdmin,deleteManager);
managerRouter.post('/logout',logout);



export default managerRouter;