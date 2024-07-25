import { User } from "../models/user.model.js";

export const getAllUsers = async(req, res) => {
    try {
        
        const users = await User.find({});
        return res.status(200).json(users);

    } catch (error) {
        res.status(500).json({message: "Error al traer todos los usuarios.", error: error.message});
    }
}

export const getUserById = async(req, res) => {

    const { id } = req.params;

    try {

        const user = await User.findOne({_id: id});
        if (!user) return res.status(400).json({message: `El usuario con id: '${id}' no existe.`});
        
        res.status(200).json(user);
        
    } catch (error) {
        res.status(500).json({message: `Error al traer el usuario con id: '${id}'. `, error: error.message});
    }
}

export const deleteUser = async(req, res) => {

    const { id } = req.params;

    try {
        
        const foundUser = await User.findByIdAndDelete({_id: id});
        if (!foundUser) return res.status(400).json({message: `No se ha encontrado ningun usuario con id: '${id}'.`});

        res.status(200).json({message: `Usuario con id: '${id}' fue eliminado existosamente!`});

    } catch (error) {
        res.status(500).json({message: `Error al eliminar usuario con id: '${id}'. `, error: error.message});
        
    }
}