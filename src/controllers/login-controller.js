import user from "../models/user.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';


export const login = async (req, res) => {
   const { email, password } = req.body
   const checkuser = await user.findOne({ email })
   if (!checkuser) {
      console.log("NO user found with this email")
      return
   }
   const passOk = await bcrypt.compare(password, checkuser.password)
   if (!passOk) {
      console.log("Password is not matched...")
      return
   };
   const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '10m' })

   res.cookie('token', token)
   res.status(200).json({
      mesg: "your are login now",
      token
   })
}