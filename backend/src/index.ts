import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import cors from 'cors'


const app:Express = express()
dotenv.config()

const DBURI: string = 'mongodb+srv://olamide:olamide@cluster0.i8pz7.mongodb.net/imgUploadApp?retryWrites=true&w=majority&appName=Cluster0'

const corsOptions = {
    origin:  process.env.FE_PORT || 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}
app.use(cors(corsOptions))
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json())

mongoose.connect(DBURI)
    .then(()=>console.log('connected to db'))
    .catch((err)=>console.error(err));



app.listen(4000,()=>{
    console.log('app running on port 4000')
})

