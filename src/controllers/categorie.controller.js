import { Categorie } from "../models/categorie.model.js";

export const getAllCategories = async(req, res) => {
    try {
        
        const categories = await Categorie.find({});
        res.status(200).json(categories);

    } catch (error) {
        res.status(500).json({message: "Error al traer todas las categorias.", error: error.message});
    }
}

export const createCategorie = async(req, res) => {

    const { title, description } = req.body;

    try {

        if(!title || !description) return res.status(400).json({message: "Ambos campos son obligatorios"});

        const foundCategorie = await Categorie.findOne({title: title.toLowerCase()});
        if (foundCategorie) return res.status(400).json({message: `La categoria '${title}' ya existe.`})

        const categorie = await Categorie.create({title, description});

        res.status(201).json({message: "Categoria creada exitosamente", categorie});

        
    } catch (error) {
        res.status(500).json({message: "Error al crear la categoria.", error: error.message});
    }
}

export const categoryById = async(req, res) => {

    const { id } = req.params;

    try {
        
        const categorie = await Categorie.findOne({_id: id});
        if(!categorie) return res.status(400).json({message: `La categoria con id: '${id}' no existe.`});

        res.status(200).json(categorie);

    } catch (error) {
        res.status(500).json({message: `Error al traer la categoria con id: '${id}'.`, error: error.message});
    }
}

export const deleteCategoryById = async(req, res) => {

    const { id } = req.params;

    try {
        
        const foundCategorie = await Categorie.findByIdAndDelete({_id: id});
        if(!foundCategorie) return res.status(400).json({message: `Producto con id: '${id}' no existe.`});

        res.status(200).json({message: "Producto eliminado exitosamente!"});

    } catch (error) {
        res.status(500).json({message: `Error al eliminar la categoria con id: '${id}'.`, error: error.message});
    }
}