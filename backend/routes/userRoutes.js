import express from 'express'
import { checkUser, login, signup } from '../controllers/userController.js'
import requireAuth from '../middlewares/authMiddleware.js'

const route = express.Router()

route.post('/signup', signup)
route.post('/login', login)
route.get('/whoami', requireAuth ,checkUser)

export default route;