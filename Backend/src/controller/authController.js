import bcrypt from "bcryptjs"
import  User  from "../models/userModel.js"
import jwt from 'jsonwebtoken'

export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body
        const hashedPassword = await bcrypt.hash(password, 10)
        
        const newUser = new User({
            name,
            email,
            password : hashedPassword,
        })
        await newUser.save()
        res.status(201).json({message : "User created successfully"})
    } catch (error) {
        console.log(error)
        res.status(500).json({message : "something went wrong"})
    }
}

export const login = async (req, res)=>{
    try {
        const { email, password } = req.body
        // console.log(req.body)
        const user = await User.findOne({ email })
        
        if (!user) {
            return res.status(404).json({message : "user not found"})
        }
        const isMatch = await bcrypt.compare(password, user.password)
        
        if (!isMatch) {
            return res.status(400).json({message : "invalid credentials"})
        }
        const token = jwt.sign(
            {
                id: user._id,
                role:user.role
            },
            process.env.JWT_SECRET,
            {
                expiresIn : "6h"
            }
        )
        res.status(200).json({token})
    } catch (error) {
        console.log(error)
        res.status(500).json({message : "something went wrong"})
    }
}