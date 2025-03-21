import mongoose from "mongoose";
import validator from 'validator'
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: [true, 'Please Enter an Email to proceed'],
        unique: true,
        lowercase: true,
        validator: [validator.isEmail, 'please enter a valid email']
    },
    password: {
        type: String,
        required: [true, 'Please Enter an password to proceed'],
        minlength: [8, 'Password must not be less than 6']
    }
}, {timestamps: true})

userSchema.pre('save', async function(next){
    const salt  = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(this.password, salt)
    this.password = hashedPassword
})

userSchema.post('save', async function (doc, next) {
    console.log('user created', doc)
    next()
})

userSchema.statics.login = async function (email, password) {
    const user = await this.findOne({email})
    if(user){
        const auth = await bcrypt.compare(password, user.password)
        if(auth){
            return user
        } throw Error('wrong credentials')
    } throw Error('user does not exist')
}

export const User = mongoose.model('users', userSchema)