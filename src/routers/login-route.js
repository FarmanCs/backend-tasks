import express from "express";
import { login } from "../controllers/login-controller.js";
const login_router = express.Router()

login_router.post('/api/login', login)

export default login_router