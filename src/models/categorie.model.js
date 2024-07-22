import mongoose, { Schema } from "mongoose";

const categorieSchema = Schema({
    title: {
        type: String,
        trim: true,
        required: true,
        minlength: 4,
        maxlength: 100,
        unique: true,
        lowercase: true,
    },
    description: {
        type: String,
        trim: true,
        required: true,
    }
})

export const Categorie = mongoose.model("Categorie", categorieSchema);