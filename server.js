import mongoose from "mongoose";
import app from "./app.js";
import dotenv from "dotenv";
dotenv.config()

const PORT = process.env.PORT || 9090
mongoose.connect(process.env.MONGO_URL).then(() => {
   app.listen(PORT, () => {
      console.log(`server started at Port: http://localhost:${PORT}`);
   })
}).then(() => {
   console.log("Data base connected successfully.");
})


