import express from "express";
import { getAllTurfs,createTurf,updateTurf,deleteTurf, getLimitedTurfs, TurfbyCategory, findTurfByIds, findOneTurfById } from "../controllers/turfController.js";
import upload from "../middlewares/uploadMiddleware.js";
import authenticateAdmin from "../middlewares/adminMiddleware.js";
import authenticateManager from "../middlewares/managerMiddleware.js";

const turfRouter = express.Router();

turfRouter.get("/get-turfs",getAllTurfs);
turfRouter.post("/add-turfs",upload.single("image"),createTurf);
turfRouter.put("/update-turfs/:id", updateTurf);
turfRouter.delete("/delete-turfs/:id",deleteTurf);
turfRouter.post("/get-turfsByIds",findTurfByIds);
turfRouter.get("/get-limited-turf",getLimitedTurfs);
turfRouter.get('/get-turf/category/:category',TurfbyCategory);
turfRouter.get('/get-oneturfbyId/:id',findOneTurfById )
export default turfRouter;