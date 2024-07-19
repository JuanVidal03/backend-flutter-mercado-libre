import mongoose from "mongoose";

export const mongodbConnection = async() => {
    try {
        
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("<<< MongoDB Atlas conectada >>>");

    } catch (error) {
        console.log("<<< Error al conectar la DB >>>");
        console.log(error);
    }
}