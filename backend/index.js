import express from 'express'
import dotenv from 'dotenv'
import authRouter from './routes/auth.route.js'
import connectDb from './config/db.js'
import cookieParser from 'cookie-parser'

dotenv.config()

const port = process.env.PORT || 3000
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())
app.get('/',(req,res)=>{
    res.send("good to go chief")
})
app.use("/api/auth",authRouter)
app.listen(port,(req,res)=>{
    connectDb()
    console.log(`server is running on ${port}`)
})