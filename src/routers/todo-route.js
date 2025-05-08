import express from "express";
import { Add_Todo_list, get_ToDo_Data } from "../controllers/todo-controller.js";
import { protect } from "../middlewares/auth-login.js";
const ToDorouter = express.Router()

ToDorouter.post('/api/todo', protect, Add_Todo_list)
ToDorouter.get('/api/todo', get_ToDo_Data)




export default ToDorouter