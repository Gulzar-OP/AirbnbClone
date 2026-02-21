import mongoose from "mongoose";
import User from "../model/user.model.js";
import bcrypt from "bcryptjs";
import genToken from "../config/token.js";

export const signUp = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // check existing user
        const existUser = await User.findOne({ email });

        if (existUser) {
            return res.status(400).json({
                message: "Already exist"
            });
        }
        // hash password
        const hashPassword = await bcrypt.hash(password, 10);
        
        // create user
        const user = await User.create({
            name,
            email,
            password: hashPassword
        });
        let token = await genToken(user._id);
        // token store in cookie
        res.cookie("token",token,{
            httpOnly:true,
            secure:process.env.NODE_ENV === "production",
            sameSite:"strict",
            maxAge:7*24*60*60*1000
        })
        return res.status(201).json({
            message: "User created successfully",
            user
        });

    } catch (e) {
        console.log(e);
        return res.status(500).json({
            message: `signUp error ${e.message}`
        });
    }
};

export const login = async(req,res)=>{
    try {
        const { email, password } = req.body;

        // check existing user
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                message: "user not found"
            });
        }
        // compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                message: "invalid credentials"
            });
        }
        
        let token = await genToken(user._id);
        // token store in cookie
        res.cookie("token",token,{
            httpOnly:true,
            secure:process.env.NODE_ENV === "production",
            sameSite:"strict",
            maxAge:7*24*60*60*1000
        })
        return res.status(201).json({
            message: "User login successfully",
            user
        });

    } catch (e) {
        console.log(e);
        return res.status(500).json({
            message: `login error ${e.message}`
        });
    }
}

export const logout = async(req,res)=>{
    try{
        res.clearCookie("token")
        return res.status(200).json({
            message:"user logout successfully"
            
        })
    }catch(e){
        console.log(e);
        return res.status(500).json({
            message: `logout error ${e.message}`
        });
    }
}