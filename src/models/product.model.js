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
    },
    categories: [{
        type: Schema.Types.ObjectId, ref: "categories"
    }]
})

export const Product = mongoose.model("Product", productSchema);