import userModel from "../models/model.js";

export const CreateUser = async (req, res) => {
    const { name, email, password, phone } = req.body;
    try {
        const userExists = await userModel.findOne({ email: email })
        if (userExists) {
            return res.status(400).json({ msg: "User Already Exists" })
        }
        const user = userModel({
            name, email, password, phone
        })
        const newUser = await user.save()
        if (newUser) {
            return res.status(201).json({
                success: "ok",
                newUser
            })
        }
        else {
            return res.status(400).json({ msg: "Couldn't create a Doc" })
        }
    } catch (error) {
        return res.status(400).json({ msg: error.message })
    }
};

export const GetUsers = async (req, res) => {
    try {
        const allUsers = await userModel.find({});
        if (allUsers) {
            res.status(200).json(allUsers);
        }
    } catch (error) {
        res.status(400).json(error);
    }
};

export const getSingleUser = async (req, res) => {
    const { id } = req.params;
    try {
        if (id) {
            const getSingleData = await userModel.findById(id);
            return res.status(200).json(getSingleData);
        } else {
            return res.status(400).json({ message: "couldn't get user id" });
        }
    } catch (error) {
        res.status(400).json(error);
    }
};

export const UpdateUser = async (req, res) => {
    const { id } = req.params;
    try {
        if (id) {
            const getUpdatedData = await userModel.findByIdAndUpdate(id, req.body);
            return res.status(200).json(getUpdatedData);
        } else {
            return res.status(400).json({ message: "couldn't get user id" });
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

export const DeleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        if (id) {
            const getDeletedData = await userModel.findByIdAndDelete(id);
            return res.status(200).json(getDeletedData);
        } else {
            return res.status(400).json({ message: "couldn't get user id" });
        }
    } catch (error) {
        res.status(400).json(error);
    }
}
