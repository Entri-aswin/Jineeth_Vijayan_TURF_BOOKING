import Cart from "../models/cartModel.js";



export const addCart = async (req, res) => {

    const { userId, turfId } = req.body;


    let cart = await Cart.findOne({ userId });

    if (!cart) {
        cart = new Cart({ userId, turfIds: [] })
    }

    let isInclude = cart.turfIds.includes(turfId);

    if (isInclude === true) {
        return res.send("already added to bookings")
    } else {
        cart.turfIds.push(turfId);
    }


    await cart.save();

    res.status(200).send(cart);

};


export const getCartByUserId = async (req, res) => {

    const userId = req.params.user;
    //console.log(userId);

    let cart = await Cart.findOne({ userId });

    if (!cart) {
        res.status(404).send("there is no cart created")
    } else {
        res.status(200).send(cart);
    }


}


export const deleteCart = async (req, res) => {
    const { userid, turfid } = req.body;
    console.log(userid, turfid);

    const cart = await Cart.findOne({ userId: userid });
    console.log(cart);
    const newCart = cart.turfIds.filter(id => id !== turfid);
    console.log(newCart);
    const updatedCart = await Cart.findOneAndUpdate(
        { userId: userid },
        { turfIds: newCart },
        {
            new: true,
        }
    );

    console.log(updatedCart);

await updatedCart.save();

res.status(200).send(updatedCart);
    
}