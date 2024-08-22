import express from "express";
import { addCart, deleteCart, getCartByUserId } from "../controllers/cartController.js";

const cartRouter = express.Router();




cartRouter.post("/addCart",addCart)
cartRouter.get("/get-cartby-userId/:user",getCartByUserId);
cartRouter.put("/delete-cart",deleteCart);


export default cartRouter;