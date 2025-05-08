import express from "express";
import router from "./src/routers/user-route.js";
import login_router from "./src/routers/login-route.js";
import ToDorouter from "./src/routers/todo-route.js";

const app = express()

app.use(express.json())

app.use((req, res, next) => {
   // req.requestTime = new Date().toISOString()
   console.log(req.headers)
   next();
})

app.use('/', router)
app.use('/', login_router)
app.use('/', ToDorouter)



export default app

