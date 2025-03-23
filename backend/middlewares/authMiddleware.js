import jwt from 'jsonwebtoken'
import { User } from '../models/userModel.js'

const maxAge = 3*24*60*60

const requireAuth = async (req, res, next)=>{
    const { authorization } = req.headers; //destructure authorization from headers

    if(!authorization){
        return res.status(401).json({error: 'Authentication Required'}) //if no authorization send back an error response
    }

    const token = authorization.split(' ')[1] //split the authorization value and the point where there's a space between

    try {
        const {id} = jwt.verify(token, 'upload')
        req.user = await User.findOne({_id: id}).select('name email')
        next()
    } catch (error) {
        console.log(error)
        res.status(401).json({error: 'Request is not authorized'})
    }
}

export default requireAuth;