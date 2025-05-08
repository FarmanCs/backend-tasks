import mongoose from "mongoose";

const TodoSchema = mongoose.Schema({
   title: { type: String, require: true },
   description: { type: String, require: false },
   author: { type: String, require: true },
})

const todo = new mongoose.model('todo', TodoSchema)
export default todo