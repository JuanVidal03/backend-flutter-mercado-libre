import mongoose, { Schema } from "mongoose";

const productSchema = Schema({
    title: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        lowercase: true,
    },
    description: {
        type: String,
        trim: true,
        required: true,
        minlength: 4,
    },
    price: {
        type: Number,
        required: true,
    }
})

export const Product = mongoose.model("Product", productSchema);