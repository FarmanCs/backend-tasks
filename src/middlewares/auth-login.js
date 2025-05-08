import user from "../models/user.js";

export const protect = (req, res, next) => {
   let token;
   if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1]
      console.log("token is :", token)
      console.log(req.headers.authorization)
   } else {
      console.log("you can't add todo")
      return
   }

   next()
}