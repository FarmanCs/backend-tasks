import user from "../models/user.js";
import bcrypt from "bcrypt"

export const createUser = async (req, res) => {
   const { name, email, password } = req.body
   const hashPassword = await bcrypt.hash(password, 10)
   const userData = new user({ password: hashPassword, email, name })
   const newUser = await userData.save()
   res.status(201).json(
      {
         message: "new user added",
         newUser
      }
   )
}

export const getUsers = async (req, res) => {
   const userData = await user.find().select('-_id -__v -password')
   res.status(200).json(
      {
         message: "All users",
         length: userData.length,
         userData
      }
   )
}

export const getUser = async (req, res) => {
   const userId = req.params.id
   // const userData = await user.findOne({ _id: userId }).select('-__v -password')
   const userData = await user.findById(userId).select('-__v -password')
   res.status(200).json(
      {
         message: " user",
         userData
      }
   )
}

export const deleteUser = async (req, res) => {
   const userId = req.params.id
   const userData = await user.findOneAndDelete(userId)
   res.status(200).json(
      {
         message: " user Deleted",
      }
   )
}
export const updateUser = async (req, res) => {
   const userId = req.params.id
   const { name, email } = req.body
   const userData = await user.findByIdAndUpdate({ _id: userId }, req.body, { new: true })
   res.status(200).json(
      {
         message: " user Updated successfuly..",
         userData
      }
   )
}