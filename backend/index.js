import express from 'express'
import dotenv from 'dotenv'
import authRouter from './routes/auth.route.js'
import connectDb from './config/db.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import userRouter from './routes/user.route.js'
import listingRouter from './routes/listing.route.js'

dotenv.config()

const port = process.env.PORT || 3000
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
app.get('/',(req,res)=>{
    res.send("good to go chief")
})
app.use("/api/auth",authRouter)
app.use('/api/user',userRouter)
app.use('/api/listing',listingRouter)
app.listen(port,(req,res)=>{
    connectDb()
    console.log(`server is running on ${port}`)
})