import mongoose, { Schema } from "mongoose";

const userModel = new Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    }

})

export const User = mongoose.model("User", userModel);