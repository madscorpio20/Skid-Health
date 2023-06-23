import User from "../model/user-schema.js";
import mongoose from "mongoose";

export const addUserController = async (req, res) => {
  const user = req.body;
  const newUser = new User(user);
  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    console.log(user);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const user = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(404).send("No user with that id");
    }

    const updatedUser = await User.findByIdAndUpdate(
      _id,
      { ...user, _id },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).send("User not found");
    }

    res.json(updatedUser);
  } catch (err) {
    console.log("Error updating user:", err);
    res.status(500).send("An error occurred while updating the user");
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send("No user with that id");
    }

    await User.findByIdAndRemove(id);

    res.json({ message: "User deleted successfully" });
  } catch (err) {
    console.log("Error deleting user:", err);
    res.status(500).send("An error occurred while deleting the user");
  }
};
