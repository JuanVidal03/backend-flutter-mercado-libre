import bcrypt from "bcrypt";
import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {

    let { fullName, email, password } = req.body;
    
    try {

        if (!fullName || !email || !password) return res.status(400).json({message: "Debes ingresar todos los campos."});

        const foundUser = await User.findOne({email: email});
        if (foundUser) return res.status(400).json({message: `El usuario con email: '${email}' ya existe.`});

        const salt = await bcrypt.genSalt(10);
        password = await bcrypt.hash(password, salt);

        const createdUser = await User.create({ fullName, email, password });

        res.status(201).json({message: "Usuario creado exitosamente!", user: createdUser});
        
    } catch (error) {
        res.status(500).json({message: "Error al registrar el usuario", error: error.message});
    }
}


export const login = async(req, res) => {

    const { email, password } = req.body;

    try {

        if (!email || !password) return res.status(400).json({ message: "Debes ingresar ambos datos." });

        const user = await User.findOne({email: email});
        if(!user) return res.status(400).json({ message: "Usuario o contraseña incorrectos." });

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(!isPasswordValid) return res.status(400).json({ message: "Usuario o contraseña incorrectos." });

        // generar token
        jwt.sign(
            { id: user._id },
            process.env.TOKEN_SECRET,
            { expiresIn: "1h" },
            (err, token) => {
                err && res.status(400).json(`Error al generar el token: ${err.message}`);

                res.cookie("token", token, {
                    httpOnly: false,
                    secure: true,
                    sameSite: "none"
                });
                res.status(200).json({message: "Login exitoso!", user: user});
            }
        )

        
    } catch (error) {
        res.status(500).json({message: "Error al loggearse en la aplicacion.", error: error.message});
    }
}