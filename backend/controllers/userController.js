import { User } from "../models/userModel.js"

export const signup = async (req, res)=>{
    try {
        const user = User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })
        if(!user)return res.status(400).json({message: 'failed to create user'})
            res.status(201).json({message: 'user Created'})
    } catch (error) {
        console.error(error)
        res.status(500).json({message: error.message})
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.login(email, password);

        return res.json({ user });
    } catch (error) {
        console.error('Login error:', error);

        if (error.message === 'User does not exist' || error.message === 'Wrong Credentials') {
            return res.status(400).json({ error: error.message });
        }

        return res.status(500).json({ message: "Internal server error" });
    }
};
