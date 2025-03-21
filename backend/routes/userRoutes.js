import express from 'express'
import { login, signup } from '../controllers/userController.js'

const route = express.Router()

route.post('/signup', signup)
route.post('/login', login)

export default route;