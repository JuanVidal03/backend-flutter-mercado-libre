import { Product } from "../models/product.model.js";

export const getAllProducts = async(req, res) => {
    try {
        
        const products = await Product.find({});
        res.status(200).json(products);

    } catch (error) {
        res.status(500).json({message: "Error al traer los productos", error: error.message});
    }
}

export const createProduct = async (req, res) => {
    
    const { title, description, price } = req.body;
    
    try {

        if (!title || !description || !price) return res.status(400).json({message: "Tienes que ingresar todos los cambios"});

        const repeatProduct = await Product.findOne({title: title.toLowerCase()});
        if (repeatProduct) return res.status(400).json({message: `El producto con nombre: '${title}' ya existe.`});
        
        const createdProduct = await Product.create({title, description, price})

        res.status(201).json({ message: "Producto creado exitosamente!", createdProduct });
        

    } catch (error) {
        res.status(500).json({message: "Error al crear el producto", error: error.message});
    }
}

export const productById = async(req, res) => {

    const { id } = req.params;

    try {

        const foundProduct = await Product.findOne({_id: id});
        if(!foundProduct) return res.status(400).json({message: `El producto con id: '${id}' no existe.`});

        res.status(200).json({message: "Producto encontrado", product: foundProduct});
        
    } catch (error) {
        res.status(500).json({message: `Error al obtener el producto con id: '${id}'`, error: error.message});
    }
}

export const deleteProductById = async(req, res) => {

    const { id } = req.params;

    try {

        const deletedProduct = await Product.findByIdAndDelete({_id: id});
        if(!deletedProduct) return res.status(400).json({message: `El producto con id: '${id}' no existe.`});

        res.status(200).json({message: "Producto eliminado exitosamente!", product: deletedProduct});

        
    } catch (error) {
        res.status(500).json({message: "Error al eliminar el producto", error: error.message});
    }
}