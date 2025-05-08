import express from "express";
import { createUser, getUsers, getUser, deleteUser, updateUser } from "../controllers/user-controller.js";
const router = express.Router()

router.post('/api/user', createUser)
router.get('/api/user', getUsers)
router.get('/api/user/:id', getUser)
router.delete('/api/user/:id', deleteUser)
router.patch('/api/user/:id', updateUser)

export default router