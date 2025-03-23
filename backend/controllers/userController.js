import { User } from "../models/userModel.js"
import jwt from 'jsonwebtoken'


const maxAge = 3*24*60*60

const createToken = (id)=>{
    return jwt.sign({id}, 'upload',{
        expiresIn: maxAge
    })
}

export const signup = async (req, res)=>{
    try {
        const user = User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })
        if(!user)return res.status(400).json({message: 'failed to create user'})
            const token =  createToken(user._id)
            res.cookie('authToken', token, {httpOnly: true, maxAge: maxAge*1000})
            res.status(201).json({user: user._id, token})
    } catch (error) {
        console.error(error)
        res.status(500).json({message: error.message})
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.login(email, password);
        const token = createToken(user._id)
        res.cookie('authToken', token, {httpOnly: true, maxAge: maxAge*1000})
        res.status(200).json({ user: user._id, token });
    } catch (error) {
        console.error('Login error:', error);

        if (error.message === 'User does not exist' || error.message === 'Wrong Credentials') {
            return res.status(400).json({ error: error.message });
        }
        return res.status(500).json({ message: "Internal server error" });
    }
};

export const checkUser = async(req, res)=>{
    const username = req.user.name;
    try {
        res.status(200).json(username)
    } catch (error) {
        console.error(error)
        res.status(500).json({error})
    }
}
