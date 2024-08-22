import Turf from "../models/turfModel.js";
import Manager from "../models/managerModel.js";
import { cloudinaryInstance } from "../config/cloudinary.js";
import mongoose from "mongoose";

export const getAllTurfs = async (req, res) => {
    const turfs = await Turf.find();
    res.send(turfs).status(200);
}


export const getLimitedTurfs = async (req, res) => {
    const limit = parseInt(req.query.limit) || 6;
    const turfs = await Turf.find().limit(limit);
    res.send(turfs).status(200);
}

export const createTurf = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "no file uploaded"
            })
        }

        cloudinaryInstance.uploader.upload(req.file.path, async (err, result) => {
            if (err) {
                console.log(err, "error");
                return res.status(500).json({
                    success: false,
                    message: "error"
                });
            }

            const imageUrl = result.url;

            const body = req.body;

            const { title, description, price, managerEmail, category } = body;



          //  console.log(managerEmail);

            const findManager = await Manager.findOne({
                email: managerEmail,
            });
          //  console.log(findManager);

            if (!findManager) {
                return res.send("please add manager first").status(201);
            }


            const createTurf = new Turf({
                title,
                category,
                description,
                price,
                manager: findManager._id,
                image: imageUrl,
            });



            const newTurfCreated = await createTurf.save();


            const managerData = findManager.turfs.push(newTurfCreated._id);
            await findManager.save();

            // const mangerId = findManager. _id;

            // const turfs = findManager.turfs;

            // const updatedTurf = await Manager.findOneAndUpdate(
            //     { _id: mangerId },
            //     { turfs },
            //     {
            //         new: true,
            //     }
            // );

            //const managers = await Manager.find().populate('turfs');
            // Manager.populate('turfs')
            // console.log(managers);
            // managers.save();

            if (!newTurfCreated) {
                return res.send("turf is not created");
            }
            return res.json({message:'created',newTurfCreated})

            //res.send(newTurfCreated);

        });
    } catch (error) {
        console.log("something went wrong", error);
        res.send("failed to create course").status(201);
    }
}



export const updateTurf = async (req, res) => {

    const id = req.params.id;
    console.log(id);

    const { description, price, manager } = req.body;



    const updatedTurf = await Turf.findOneAndUpdate(
        { _id: id },
        { description, price, manager },
        {
            new: true,
        }
    );

    if (!updatedTurf) {
        return res.send("Turf is not updated");
    }

    console.log(updatedTurf);
    return res.send(updatedTurf);
};

export const deleteTurf = async (req, res) => {
    const id = req.params.id;

    const deleteId = await Turf.deleteOne({ _id: id });

    if (!deleteId) {
        return res.send("not deleted");
    }
    return res.send("turf deleted");
};


export const findTurfByIds = async (req, res) => {

    const { ids } = req.body;
    // console.log(ids);
    if (!Array.isArray(ids) || ids.some(id => !mongoose.Types.ObjectId.isValid(id))) {
        return res.status(400).send('Invalid IDs');
    }

    const objectIds = ids.map(id => new mongoose.Types.ObjectId(id));

    //console.log(objectIds);
    try {

        const turfs = await Turf.find({ _id: { $in: objectIds } });

        // console.log(turfs);


        if (turfs) {
            return res.send(turfs);
        } else {
            return res.send("there is no turf created by you")
        }

    } catch (error) {
        console.error('Error finding documents:');
        res.status(500).send('Server Error');
    }




}


export const TurfbyCategory = async (req, res) => {
    try {

        const category = req.params.category;
        console.log(category);
        const turfs = await Turf.find({category});
        res.send(turfs);
    } catch (error) {
        console.log(error);
    }
}


export const findOneTurfById = async (req, res) => {

    const id = req.params.id;

    const turf = await Turf.findOne({ _id: id });

    if (turf) {
        return res.send(turf);
    } else {
        return res.send("turf is not exist")
    }
}